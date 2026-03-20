import type { EmailTemplateEditorBlock, EmailTemplateEditorButtonBlock, EmailTemplateEditorCondition, EmailTemplateEditorContext, EmailTemplateEditorH1Block, EmailTemplateEditorHeaderBlock, EmailTemplateEditorIfBlock, EmailTemplateEditorParagraphBlock, EmailTemplateEditorVariable, EmailTemplateType } from '#data/types';

const SHARED_VARIABLES: EmailTemplateEditorVariable[] = [
    {label: 'variable.merchantName', path: 'merchant.name'},
    {label: 'variable.weekDay', path: 'weekDay'}
];

const BUYER_VARIABLES: EmailTemplateEditorVariable[] = [
    {label: 'variable.buyerFirstName', path: 'buyer.firstName'},
    {label: 'variable.buyerLastName', path: 'buyer.lastName'},
    {label: 'variable.buyerFullName', path: 'buyer.fullName'},
    {label: 'variable.buyerInitials', path: 'buyer.initials'},
    {label: 'variable.buyerEmail', path: 'buyer.email'},
    {label: 'variable.buyerPhoneNumber', path: 'buyer.phoneNumber'},
    {label: 'variable.buyerDateOfBirth', path: 'buyer.dateOfBirth'},
    {label: 'variable.buyerGender', path: 'buyer.gender'},
    {label: 'variable.buyerLanguage', path: 'buyer.language'},
    {label: 'variable.buyerAddressStreet', path: 'buyer.address.street'},
    {label: 'variable.buyerAddressNumber', path: 'buyer.address.number'},
    {label: 'variable.buyerAddressPostalCode', path: 'buyer.address.postalCode'},
    {label: 'variable.buyerAddressCity', path: 'buyer.address.city'},
    {label: 'variable.buyerAddressCountry', path: 'buyer.address.country'}
];

const EVENT_VARIABLES: EmailTemplateEditorVariable[] = [
    {label: 'variable.eventName', path: 'event.name'},
    {label: 'variable.eventStartDate', path: 'event.startDate'},
    {label: 'variable.eventStartTime', path: 'event.startTime'}
];

const ORDER_VARIABLES: EmailTemplateEditorVariable[] = [
    {label: 'variable.orderCode', path: 'order.code'}
];

const HEADER_CONDITION: EmailTemplateEditorCondition = {label: 'condition.eventHasHeaderImage', condition: 'event.headerFile'};

export const EMAIL_TEMPLATE_EDITOR_CONTEXTS: Record<EmailTemplateType, EmailTemplateEditorContext> = {
    merchant_invite: {
        variables: [
            ...SHARED_VARIABLES,
            {label: 'variable.userFirstName', path: 'user.firstName'},
            {label: 'variable.userLastName', path: 'user.lastName'},
            {label: 'variable.acceptUrl', path: 'acceptUrl'}
        ],
        conditions: []
    },
    order_canceled: {
        variables: [...SHARED_VARIABLES, ...BUYER_VARIABLES, ...EVENT_VARIABLES, ...ORDER_VARIABLES],
        conditions: [HEADER_CONDITION]
    },
    order_confirmation: {
        variables: [...SHARED_VARIABLES, ...BUYER_VARIABLES, ...EVENT_VARIABLES, ...ORDER_VARIABLES],
        conditions: [
            {label: 'condition.hasNormalTicketsOnly', condition: 'hasNormalTicketsOnly'},
            {label: 'condition.hasPersonalizableTickets', condition: 'hasPersonalizableTickets'},
            {label: 'condition.hasSealedTickets', condition: 'hasSealedTickets'},
            HEADER_CONDITION
        ]
    },
    order_expired: {
        variables: [...SHARED_VARIABLES, ...BUYER_VARIABLES, ...EVENT_VARIABLES, ...ORDER_VARIABLES],
        conditions: [HEADER_CONDITION]
    },
    order_failed: {
        variables: [...SHARED_VARIABLES, ...BUYER_VARIABLES, ...EVENT_VARIABLES, ...ORDER_VARIABLES],
        conditions: [HEADER_CONDITION]
    },
    personalization_invite: {
        variables: [...SHARED_VARIABLES, ...BUYER_VARIABLES, ...EVENT_VARIABLES, {label: 'variable.personalizeUrl', path: 'personalizeUrl'}],
        conditions: [HEADER_CONDITION]
    },
    personalization_request: {
        variables: [...SHARED_VARIABLES, ...BUYER_VARIABLES, ...EVENT_VARIABLES, ...ORDER_VARIABLES, {label: 'variable.personalizeUrl', path: 'personalizeUrl'}],
        conditions: [HEADER_CONDITION]
    },
    tickets: {
        variables: [...SHARED_VARIABLES, ...BUYER_VARIABLES, ...EVENT_VARIABLES, ...ORDER_VARIABLES],
        conditions: [HEADER_CONDITION]
    }
};

interface ScanResult {
    blocks: EmailTemplateEditorBlock[];
    consumed: number;
}

/**
 * Parses quoted or unquoted arguments from a Handlebars helper argument string.
 * Returns an array of string values.
 */
function parseArgs(args: string): string[] {
    const result: string[] = [];
    let remaining = args.trim();

    while (remaining.length > 0) {
        if (remaining[0] === '"') {
            const end = remaining.indexOf('"', 1);
            if (end === -1) break;
            result.push(remaining.slice(1, end));
            remaining = remaining.slice(end + 1).trim();
        } else {
            const spaceIdx = remaining.search(/\s/);
            if (spaceIdx === -1) {
                result.push(remaining);
                break;
            }
            result.push(remaining.slice(0, spaceIdx));
            remaining = remaining.slice(spaceIdx + 1).trim();
        }
    }

    return result;
}

/**
 * Builds a single EmailTemplateEditorBlock from a parsed Handlebars block.
 */
function buildBlock(
    type: string,
    args: string,
    children: EmailTemplateEditorBlock[],
    rawContent: string
): EmailTemplateEditorBlock | null {
    const content = rawContent.trim().split('\n').map(line => line.replace(/^ {4}/, '')).join('\n');

    switch (type) {
        case 'h1':
            return {type: 'h1', content} satisfies EmailTemplateEditorH1Block;

        case 'paragraph':
            return {type: 'paragraph', content} satisfies EmailTemplateEditorParagraphBlock;

        case 'divider':
            return {type: 'divider'};

        case 'spacer':
            return {type: 'spacer'};

        case 'logo':
            return {type: 'logo'};

        case 'button': {
            const [label = '', url = ''] = parseArgs(args);
            return {type: 'button', label, url} satisfies EmailTemplateEditorButtonBlock;
        }

        case 'header': {
            const [src = ''] = parseArgs(args);
            return {type: 'header', src} satisfies EmailTemplateEditorHeaderBlock;
        }

        case 'if':
            return {type: 'if', condition: args, children} satisfies EmailTemplateEditorIfBlock;

        default:
            return null;
    }
}

/**
 * Recursively scans the template string starting from startPos, building blocks
 * until a closing tag is found or the end of the string is reached.
 */
function scan(template: string, startPos: number = 0): ScanResult {
    const blocks: EmailTemplateEditorBlock[] = [];
    let pos = startPos;

    while (pos < template.length) {
        const tokenStart = template.indexOf('{{', pos);
        if (tokenStart === -1) break;

        const ch = template[tokenStart + 2];

        // Partial {{> ...}} — skip
        if (ch === '>') {
            const end = template.indexOf('}}', tokenStart);
            if (end === -1) break;
            pos = end + 2;
            continue;
        }

        // Comment {{!-- ... --}} or {{! ...}} — skip
        if (ch === '!') {
            const end = template.indexOf('}}', tokenStart);
            if (end === -1) break;
            pos = end + 2;
            continue;
        }

        // Closing tag {{/type}} — return to parent scanner
        if (ch === '/') {
            return {blocks, consumed: tokenStart};
        }

        // Opening block tag {{#type args}}
        if (ch === '#') {
            const closeTag = template.indexOf('}}', tokenStart);
            if (closeTag === -1) break;

            const tagContent = template.slice(tokenStart + 3, closeTag).trim();
            const spaceIdx = tagContent.search(/\s/);
            const type = spaceIdx === -1 ? tagContent : tagContent.slice(0, spaceIdx);
            const args = spaceIdx === -1 ? '' : tagContent.slice(spaceIdx + 1).trim();

            const innerStart = closeTag + 2;
            const {blocks: children, consumed: innerEnd} = scan(template, innerStart);
            const rawContent = template.slice(innerStart, innerEnd);

            // Advance past the closing {{/type}} tag
            const expectedClose = `{{/${type}}}`;
            pos = innerEnd + expectedClose.length;

            const block = buildBlock(type, args, children, rawContent);
            if (block !== null) {
                blocks.push(block);
            }
            continue;
        }

        // Variable or other expression — skip
        const end = template.indexOf('}}', tokenStart);
        if (end === -1) break;
        pos = end + 2;
    }

    return {blocks, consumed: pos};
}

/**
 * Serializes a single block back to its Handlebars string representation.
 */
function serializeBlock(block: EmailTemplateEditorBlock): string {
    switch (block.type) {
        case 'h1': {
            const indented = block.content.split('\n').map(line => `    ${line}`).join('\n');
            return `{{#h1}}\n${indented}\n{{/h1}}`;
        }

        case 'paragraph': {
            const indented = block.content.split('\n').map(line => `    ${line}`).join('\n');
            return `{{#paragraph}}\n${indented}\n{{/paragraph}}`;
        }

        case 'divider':
            return `{{#divider}}{{/divider}}`;

        case 'spacer':
            return `{{#spacer}}{{/spacer}}`;

        case 'logo':
            return `{{#logo}}{{/logo}}`;

        case 'button':
            return `{{#button "${block.label}" "${block.url}"}}{{/button}}`;

        case 'header': {
            const srcArg = block.src.includes('://') ? `"${block.src}"` : block.src;
            return `{{#header ${srcArg}}}{{/header}}`;
        }

        case 'if': {
            const indented = serializeBlocks(block.children)
                .split('\n')
                .map(line => `    ${line}`)
                .join('\n');
            return `{{#if ${block.condition}}}\n${indented}\n{{/if}}`;
        }
    }
}

/**
 * Parses a Handlebars template string into an array of editor blocks.
 * Strips structure partials; only content blocks are returned.
 */
export function parseEmailTemplate(template: string): EmailTemplateEditorBlock[] {
    const {blocks} = scan(template);
    return blocks;
}

/**
 * Serializes an array of editor blocks back into a Handlebars content string.
 * Does not include structure partials — those are added by the backend automatically.
 */
export function serializeBlocks(blocks: EmailTemplateEditorBlock[]): string {
    return blocks.map(serializeBlock).join('\n\n');
}

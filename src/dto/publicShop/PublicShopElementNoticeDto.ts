import { dto } from '@basmilius/http-client';
import type { FluxIconName } from '@flux-ui/types';
import { PublicShopElementDto } from '../../dto';
import type { NoticeType } from '../../types';

@dto
export class PublicShopElementNoticeDto extends PublicShopElementDto {
    get icon(): FluxIconName {
        return this.#icon;
    }

    set icon(value: FluxIconName) {
        this.#icon = value;
    }

    get noticeType(): NoticeType {
        return this.#noticeType;
    }

    set noticeType(value: NoticeType) {
        this.#noticeType = value;
    }

    get title(): string | null {
        return this.#title;
    }

    set title(value: string | null) {
        this.#title = value;
    }

    get text(): string {
        return this.#text;
    }

    set text(value: string) {
        this.#text = value;
    }

    #icon: FluxIconName;
    #noticeType: NoticeType;
    #title: string | null;
    #text: string;

    constructor(id: string, icon: FluxIconName, noticeType: NoticeType, title: string | null, text: string) {
        super(id, 'notice');
        this.#icon = icon;
        this.#noticeType = noticeType;
        this.#title = title;
        this.#text = text;
    }
}

import { adapter } from '@basmilius/http-client';
import type { FluxFormSelectEntry, FluxFormSelectGroup, FluxFormSelectOption } from '@flux-ui/types';

@adapter
export class FluxAdapter {
    static parseFluxFormSelectEntryFromObject(entry: object): FluxFormSelectEntry {
        if ('value' in entry) {
            return FluxAdapter.parseFluxFormSelectOptionFromObject(entry);
        }

        return FluxAdapter.parseFluxFormSelectGroupFromObject(entry);
    }

    static parseFluxFormSelectGroupFromObject(group: object): FluxFormSelectGroup {
        return group as FluxFormSelectGroup;
    }

    static parseFluxFormSelectOptionFromObject(option: object): FluxFormSelectOption {
        return option as FluxFormSelectOption;
    }
}

import { adapter, ForeignData } from '@basmilius/http-client';
import type { FluxFormSelectEntry, FluxFormSelectGroup, FluxFormSelectOption } from '@flux-ui/types';

@adapter
export class FluxAdapter {
    static parseFluxFormSelectEntry(data: ForeignData): FluxFormSelectEntry {
        if ('value' in data) {
            return FluxAdapter.parseFluxFormSelectOption(data);
        }

        return FluxAdapter.parseFluxFormSelectGroup(data);
    }

    static parseFluxFormSelectGroup(data: ForeignData): FluxFormSelectGroup {
        return data as FluxFormSelectGroup;
    }

    static parseFluxFormSelectOption(data: ForeignData): FluxFormSelectOption {
        return data as FluxFormSelectOption;
    }
}

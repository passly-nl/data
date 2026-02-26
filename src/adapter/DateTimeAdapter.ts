import { adapter } from '@basmilius/http-client';
import { DateTime } from 'luxon';

@adapter
export class DateTimeAdapter {
    static parseDateTime(dateTime: string): DateTime {
        return DateTime
            .fromISO(dateTime, {zone: 'UTC'})
            .setZone('Europe/Amsterdam');
    }

    static parseDateTimeFromMonth(dateTime: string): DateTime {
        return DateTime
            .fromFormat(dateTime, 'yyyy-MM', {zone: 'UTC'})
            .setZone('Europe/Amsterdam');
    }
}

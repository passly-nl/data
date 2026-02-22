import { adapter } from '@basmilius/http-client';
import { DateTime } from 'luxon';

@adapter
export class DateTimeAdapter {
    static parseDateTimeFromString(dateTime: string): DateTime {
        return DateTime
            .fromISO(dateTime, {zone: 'UTC'})
            .setZone('Europe/Amsterdam');
    }
}

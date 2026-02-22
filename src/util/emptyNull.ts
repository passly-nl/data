export default function <T>(value: T): T | null {
    if (typeof value === 'string' && value.trim().length === 0) {
        return null;
    } else if (Array.isArray(value) && value.length === 0) {
        return null;
    }

    return value;
}

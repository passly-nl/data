export default function <T>(value: object[], adapter: (value: object) => T): T[] | null {
    if (value === undefined || value === null) {
        return null;
    }

    return value.map(adapter);
}

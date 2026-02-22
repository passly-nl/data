export default function <T, U>(value: U, adapter: (value: U) => T): T {
    if (value === undefined || value === null) {
        return null as T;
    }

    return adapter(value);
}

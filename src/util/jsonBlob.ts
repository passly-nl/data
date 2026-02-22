export default function <T>(json: T): Blob {
    return new Blob([JSON.stringify(json)], {
        type: 'application/json'
    });
}

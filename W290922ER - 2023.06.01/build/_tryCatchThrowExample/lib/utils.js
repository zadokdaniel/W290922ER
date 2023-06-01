export function wait(milliseconds, value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, milliseconds);
    });
}

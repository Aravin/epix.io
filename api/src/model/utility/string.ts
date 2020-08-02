export function isValidString(str: string): boolean {
    if (str == undefined
        || str === null
        || str === ''
        )
    {
        return false;
    }

    return true;
}

export function isInvalidString(str: string): boolean {
    return !isValidString(str);
}
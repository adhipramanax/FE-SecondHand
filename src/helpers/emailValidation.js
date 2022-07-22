export function emailValidation(value){
    const emailRegex = /^[\w-\.]+@([\w]+\.)+[\w-\.]+/i;
    return emailRegex.test(value);
}
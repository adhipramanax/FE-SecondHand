export function numberValidation(value){
    const regex = /^\d+/g;
    return regex.test(value);
}
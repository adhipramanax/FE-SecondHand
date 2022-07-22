export function phoneNumberValidation(value) {
  const phoneNumberRegex = /^62+8[0-9]{6,11}$/g;
  return phoneNumberRegex.test(Number(value));
}
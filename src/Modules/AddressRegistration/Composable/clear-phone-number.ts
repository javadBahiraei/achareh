const clearPhoneNumber = (number: string) => {
    const regex = new RegExp("^(\\+98|0)?9\\d{9}$");
    const result = regex.test(number);
    if (number == undefined) return undefined;
    if (number.length == 0) return undefined;
    return result;
  };
  export default clearPhoneNumber;
  
function onlyPersianText(event) {
    if ((event.charCode < 1536 || event.charCode > 1791) && event.charCode != 32) {
      event.preventDefault();
    }
  }
  function charIsNumber(event) {
    if (event.charCode < 48 || event.charCode > 57) {
      event.preventDefault();
    }
  }
  export { onlyPersianText,charIsNumber };

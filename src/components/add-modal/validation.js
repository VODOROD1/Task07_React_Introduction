export let isValidTitle;
export let isValidText;
export let isCommonValidate;

export let commonValidate = (title, text) => {
  let title1 = title.trim();
  let text1 = text.trim();
  if( (title1.length == 0 && text1.length != 0) ||
      (title1.length != 0 && text1.length == 0) ||
      (title1.length != 0 && text1.length != 0)
  ) {
    isValidTitle = validateTitle(title1);
    isCommonValidate = true;
  } else { isCommonValidate = false; }
}

let validateTitle = (title) => {
  return title.length <= 30;
}

let validateText = (text) => {
  
}
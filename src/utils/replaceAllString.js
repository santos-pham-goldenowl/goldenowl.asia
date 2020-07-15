const allReplace = (originalString, obj) => {
  let retStr = originalString;
  Object.keys(obj).forEach((key) => {
    retStr = retStr.replace(new RegExp(key, 'g'), obj[key]);
  });

  return retStr;
};

export default allReplace;

const allReplace = (originalString, obj) => {
    var retStr = originalString;
    for (var x in obj) {
        retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
    }
    return retStr;
};

export default allReplace;
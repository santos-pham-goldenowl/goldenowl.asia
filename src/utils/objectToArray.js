const objectToArray = obj => Object.keys(obj)
  .map(key => ({ key, ...obj[key] }));

export default objectToArray;

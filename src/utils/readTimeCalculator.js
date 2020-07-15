const readTimeCalculator = (string) => {
  const wordsPerMinute = 250;
  const wordsPerSecond = 4;

  let result; let
    value;

  const textLength = string.split(' ').length; // Split by words
  if (textLength > 0) {
    value = textLength / wordsPerMinute;
    result = `${Math.ceil(value)} min read`;
  }

  if (value < 1) {
    value = textLength / wordsPerSecond;
    result = `${Math.ceil(value)} sec read`;
  }

  return result;
};

export default readTimeCalculator;

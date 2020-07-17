const aosItemDirection = (idx, animation = 'flip') => {
  switch (idx % 2) {
    case 0:
      return `${animation}-right`;
    case 1:
      return `${animation}-left`;
    default:
  }
  return '';
};

export default aosItemDirection;

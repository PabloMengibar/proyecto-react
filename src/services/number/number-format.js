const Prefijo = ['K', 'M', 'B', 'T'];

export function getShortNumberString(number) {
  const shouldShowDecimalPlace = Prefijo.some((element, index) => {
    const lowerBound = Math.pow(1000, index + 1);
    const upperBound = lowerBound + lowerBound * 10;
    return  number > lowerBound && number < upperBound
  });
  const digits = shouldShowDecimalPlace ? 1 : 0;
  for (let i = Prefijo.length - 1; i >= 0; i--) {
    const decimal = Math.pow(1000, i + 1);

    if (number >= decimal) {
      return (number / decimal).toFixed(digits) + Prefijo[i];
    }
  }
  return number.toString();
}
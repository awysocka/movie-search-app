export const getRating = (number) => {
  const rating = Math.round(number * 10) / 10;

  return rating;
};

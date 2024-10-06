export const convertToRating = (popularity: number): string => {
  const maxPopularity = 10000;
  const minPopularity = 0;
  const maxRating = 10;
  const minRating = 0;

  const normalizedRating =
    ((popularity - minPopularity) / (maxPopularity - minPopularity)) *
      (maxRating - minRating) +
    minRating;
  return Math.min(Math.max(normalizedRating, minRating), maxRating).toFixed(1);
};

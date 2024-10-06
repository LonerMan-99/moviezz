export const formatDate = (dateString: string) => {
  const options = { year: "numeric", month: "long", day: "2-digit" };
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", options);
};

export const formatCurrency = (number) => {
  return new Intl.NumberFormat(["ban", "id"]).format(number);
};

export const formatRupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};

export const currentDatetime = () => {
  const date = new Date();
  const current =
    date.getDate() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes();
  return current;
};

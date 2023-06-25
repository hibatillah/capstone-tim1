export const formatCurrency = (number) => {
  return new Intl.NumberFormat(["ban", "id"]).format(number);
}
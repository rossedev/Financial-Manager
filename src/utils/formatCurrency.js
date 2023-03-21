export const formatCurrency = (amount = 0) => {
  return `$${amount
    .toFixed(0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
};

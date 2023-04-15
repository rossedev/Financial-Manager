export const monthInDate = date => {
  const dateModify = date ? new Date(date) : new Date();
  return dateModify.getUTCMonth() + 1;
};

export const dayInDate = date => {
  const dateModify = date ? new Date(date) : new Date();
  return dateModify.getUTCDate();
};

export const yearInDate = date => {
  const dateModify = date ? new Date(date) : new Date();
  return dateModify.getUTCFullYear();
};

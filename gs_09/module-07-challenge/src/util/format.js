// export const { format } = new Intl.NumberFormat('pt-BR', {
//   style: 'currency',
//   currency: 'BRL',
// });

export const formatPrice = function (originalPrice) {
  const replaced = String(originalPrice).replace('.', ',');

  return `R$ ${replaced}`;
};

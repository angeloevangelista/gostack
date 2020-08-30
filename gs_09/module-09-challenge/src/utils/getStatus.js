export default function getStatus(startDate, endDate, canceledAt) {
  /**
   * Codes
   *
   * 0: pendente
   * 1: retirada
   * 2: cancelada
   * 3: entregue
   */

  const status = {
    text: startDate ? 'RETIRADA' : 'PENDENTE',
    code: startDate ? 1 : 0,
  };

  status.text = canceledAt ? 'CANCELADA' : status.text;
  status.code = canceledAt ? 2 : status.code;

  status.text = endDate ? 'ENTREGUE' : status.text;
  status.code = endDate ? 3 : status.code;

  return status;
}

export default function getStatusColor(statusCode) {
  /**
   * Codes
   *
   * 0: pendente
   * 1: retirada
   * 2: cancelada
   * 3: entregue
   */

  switch (statusCode) {
    case 0:
      return '#C1BC35';
    case 1:
      return '#4D85EE';
    case 2:
      return '#DE3B3B';
    case 3:
      return '#2CA42B';
    default:
      return '#222222';
  }
}

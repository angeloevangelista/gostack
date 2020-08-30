import { format } from 'date-fns';
import { parseISO } from 'date-fns/esm';

export default function formatDate(date) {
  return date ? format(parseISO(date), 'dd/MM/yyyy') : null;
}

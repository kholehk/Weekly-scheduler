import { Template } from '../utils/template';
import tableHTML from './table.html';

function Table(table, eventKeys) {
  return Template(tableHTML, { table, eventKeys });
}

export default Table;

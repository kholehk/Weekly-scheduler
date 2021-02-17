import { Template } from '../utils/template';
import selectHTML from './select.html';

function Select(id, list, multiple = false) {
  const select = Template(selectHTML, { id, list, multiple });

  return select;
}

export default Select;

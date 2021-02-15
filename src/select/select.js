import renderTemplate from '../utils/template-utils';
import template from './select.html';

function Select(id, list, multiple = false) {
  const select = renderTemplate(template, { id, list, multiple });

  return select;
}

export default Select;

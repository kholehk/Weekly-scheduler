import renderTemplate from '../utils/template-utils';
import template from './select.html';

function Select(list) {
  const select = renderTemplate(template, { list });

  return select.innerHTML;
}

export default Select;

import renderTemplate from '../utils/template-utils';
import template from './select.html';

function appendChildSelect(parent, list) {
  const select = renderTemplate(template, { list });

  parent.appendChild(select.firstChild);

  return select.firstChild;
}

export default appendChildSelect;

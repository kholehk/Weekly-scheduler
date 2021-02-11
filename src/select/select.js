import renderTemplate from '../utils/template-utils';
import template from './select.html';

function Select(list) {
  return {
    template,
    data: {
      list,
    },
  };
}

function appendChildSelect(parent, list) {
  const element = parent.querySelector('[data-element="select"]');
  if (!element) return;

  const select = Select(list);

  [...renderTemplate(select.template, select.data).children]
    .forEach((child) => element.appendChild(child));
}

export default appendChildSelect;

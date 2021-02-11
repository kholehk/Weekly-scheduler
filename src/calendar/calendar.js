import getMembers from '../utils/members';
import template from './calendar.html';
import renderTemplate from '../utils/template-utils';
import appendChildSelect from '../select/select';

export default async function Calendar(links) {
  const members = await getMembers();
  const data = {
    tableHeader: ['Time', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    links,
  };

  const calendar = renderTemplate(template, data);
  const parent = calendar.querySelector('[data-element="select"]');
  if (parent) {
    appendChildSelect(parent, ['All members ...', ...members]);
  }

  return {
    template: calendar.innerHTML,
    data: {},
  };
}

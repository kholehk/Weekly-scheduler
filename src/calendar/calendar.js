import getMembers from '../utils/members';
import template from './calendar.html';
import renderTemplate from '../utils/template-utils';
import appendChildSelect from '../select/select';

export default async function Calendar(links) {
  const data = {
    tableHeader: ['Name', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    links,
  };

  const calendar = renderTemplate(template, data);
  const members = await getMembers();
  appendChildSelect(calendar, ['All members ...', ...members]);

  return {
    template: calendar.innerHTML,
    data: {},
  };
}

import template from './calendar.html';
import renderTemplate from '../utils/template-utils';
import { appendChildMembers } from '../members/members';

export default async function Calendar(links) {
  const data = {
    tableHeader: ['Name', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    links,
  };

  const calendar = renderTemplate(template, data);

  await appendChildMembers(calendar);

  return {
    template: calendar.innerHTML,
    data: {},
  };
}

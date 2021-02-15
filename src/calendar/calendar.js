import template from './calendar.html';
import renderTemplate from '../utils/template-utils';
import getConfig from '../utils/config';
import Select from '../select/select';

async function Calendar(links) {
  const { members, daysWeek, time } = await getConfig();
  const table = {
    header: ['Time', ...daysWeek],
    rows: time,
  };
  const id = 'members';
  const calendar = renderTemplate(template, { table, links });
  const selectMembers = calendar.querySelector(`[data-element="${id}"]`);
  if (!selectMembers) return calendar;

  [...selectMembers.children].forEach((element) => element.remove());
  selectMembers.append(...(Select(id, ['All members ...', ...members]).children));

  return calendar;
}

export default Calendar;

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

  const calendar = renderTemplate(template, { table, links });
  const selectMembers = calendar.querySelector('[data-element="members"]');
  if (selectMembers) {
    selectMembers.innerHTML = Select(['All members ...', ...members]);
  }

  return calendar;
}

export default Calendar;

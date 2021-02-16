import template from './calendar.html';
import renderTemplate from '../utils/template-utils';
import getConfig from '../utils/config';
import Select from '../select/select';

// member = 0, all members
function markEvents(calendar, listEvents, keys, member = 0) {
  listEvents.get().forEach((element) => {
    const {
      event, participants, days, time,
    } = element;

    const isParticipant = member === 0
      ? true
      : !!participants.find(member - 1);

    const cell = calendar.querySelector(`[data-${keys.days}="${days}"][data-${keys.time}="${time}"]`);

    if (isParticipant && cell) {
      cell.innerHTML = `<span>${event}</span>`;
    }
  });
}

async function Calendar(links) {
  const {
    members, daysWeek, time, eventKeys, listEvents,
  } = await getConfig();

  const table = {
    header: ['Time', ...daysWeek],
    rows: time,
  };

  const id = 'members';
  const calendar = renderTemplate(template, { table, links, eventKeys });
  markEvents(calendar, listEvents, eventKeys);

  const selectMembers = calendar.querySelector(`[data-element="${id}"]`);
  if (!selectMembers) return calendar;

  [...selectMembers.children].forEach((element) => element.remove());
  selectMembers.append(...(Select(id, ['All members ...', ...members]).children));

  return calendar;
}

export default Calendar;

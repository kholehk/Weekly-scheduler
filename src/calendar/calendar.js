import calendarHTML from './calendar.html';
import { clearNode, Template } from '../utils/template';
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

    const cell = calendar.getRender().querySelector(
      `[data-${keys.days}="${days}"][data-${keys.time}="${time}"]`,
    );

    if (isParticipant && cell) {
      cell.innerHTML = event;
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
  const calendar = Template(calendarHTML, { table, links, eventKeys });
  markEvents(calendar, listEvents, eventKeys);

  const liMembers = calendar.getRender().querySelector(`[data-element="${id}"]`);
  if (!liMembers) return calendar;

  clearNode(liMembers);
  Select(id, ['All members ...', ...members]).addTo(liMembers);

  return calendar;
}

export default Calendar;

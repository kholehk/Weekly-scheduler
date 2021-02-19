import calendarHTML from './calendar.html';
import { clearNode, Template } from '../utils/template';
import getConfig from '../utils/config';
import Select from '../select/select';
import Table from '../table/table';
import Mark from '../mark/mark';

// member = 0, all members
function markEvents(calendarTable, listEvents, keys, member = 0) {
  listEvents.get().forEach((element) => {
    const {
      event, participants, days, time,
    } = element;

    const participant = Array.isArray(participants)
      ? participants.find((part) => +part === (member - 1))
      : false;
    const isParticipant = +member === 0
      ? true
      : !!participant;

    const cell = calendarTable.querySelector(
      `[data-${keys.days}="${days}"][data-${keys.time}="${time}"]`,
    );

    if (isParticipant && cell) {
      cell.style.backgroundColor = 'lightgreen';
      cell.style.position = 'relative';
      Mark(event, days, time).addTo(cell);
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

  const calendar = Template(calendarHTML, { links });
  const calendarTable = calendar.getRender().querySelector('main');
  if (!calendarTable) return calendar;

  clearNode(calendarTable);
  Table(table, eventKeys).addTo(calendarTable);

  markEvents(calendarTable, listEvents, eventKeys);

  calendarTable.addEventListener('click', (ev) => {
    const { delCell } = ev.target.dataset;
    if (!delCell) return;

    const [d, t] = [...String(delCell).split('_')];

    const key = listEvents
      .find((curr) => +curr[eventKeys.days] === +d && +curr[eventKeys.time] === +t);
    listEvents.remove(key);

    clearNode(calendarTable);
    Table(table, eventKeys).addTo(calendarTable);
    markEvents(calendarTable, listEvents, eventKeys);
  });

  const id = 'members';
  const liMembers = calendar.getRender().querySelector(`[data-element="${id}"]`);
  if (!liMembers) return calendar;

  clearNode(liMembers);
  const selectMembers = Select(id, ['All members ...', ...members]);
  selectMembers
    .getRender()
    .querySelector('select')
    .addEventListener('change', (ev) => {
      clearNode(calendarTable);
      Table(table, eventKeys).addTo(calendarTable);
      markEvents(calendarTable, listEvents, eventKeys, ev.target.value);
    });
  selectMembers.addTo(liMembers);

  return calendar;
}

export default Calendar;

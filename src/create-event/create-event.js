import CreateEventError from '../utils/error';
import Select from '../select/select';
import getHistory from '../utils/app-history';
import getConfig from '../utils/config';
import { Template } from '../utils/template';
import createEventHTML from './create-event.html';

function submitForm(form, listEvents, keys) {
  const newEvent = [...form]
    .reduce((acc, curr) => {
      if (!curr.hasAttribute('name')) return acc;

      acc[curr.name] = curr.name === keys.participants
        ? [...curr.selectedOptions].map((opt) => opt.value)
        : curr.value;

      return acc;
    }, {});

  listEvents.forEach((existEvent) => {
    if (
      existEvent[keys.time] === newEvent[keys.time]
      && existEvent[keys.days] === newEvent[keys.days]
    ) {
      throw new CreateEventError(
        'Failed to create an event. Time slot is already booked.',
      );
    }
  });

  listEvents.push(JSON.stringify(newEvent));
}

async function CreateEvent(links) {
  const {
    eventKeys, listEvents, members, daysWeek, time,
  } = await getConfig();

  const createEvent = Template(createEventHTML, { eventKeys, links });

  const selects = [
    { id: eventKeys.days, list: daysWeek },
    { id: eventKeys.time, list: time },
    { id: eventKeys.participants, list: members, multiple: true },
  ];

  selects.forEach(({ id, list, multiple }) => {
    const fieldSet = createEvent.getRender().querySelector(`[data-element=${id}]`);
    if (!fieldSet) return;

    Select(id, list, multiple).addTo(fieldSet);
  });

  const history = getHistory();

  createEvent
    .getRender()
    .querySelector('button[type="submit"]')
    .addEventListener('click', (e) => {
      try {
        submitForm(e.target.form, listEvents, eventKeys);
        const calendarRef = history.createHref(links.calendar);
        history.push(calendarRef);
      } catch (error) {
        if (error instanceof CreateEventError) { error.alert(); }
      }
    });

  return createEvent;
}

export default CreateEvent;

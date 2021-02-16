import CreateEventError from '../error/error';
import Select from '../select/select';
import getConfig from '../utils/config';
import renderTemplate from '../utils/template-utils';
import template from './create-event.html';

function submitForm(form, listEvents, keys) {
  const newEvent = [...form]
    .reduce((acc, curr) => {
      if (!curr.hasAttribute('id')) return acc;

      acc[curr.id] = curr.id === keys.participants
        ? [...curr.selectedOptions].map((opt) => opt.value)
        : curr.value;

      return acc;
    }, {});

  listEvents.forEach((existEvent) => {
    if (
      existEvent[keys.time] === newEvent[keys.time]
      && existEvent[keys.days] === newEvent[keys.days]
    ) {
      throw new CreateEventError('Failed to create an event. Time slot is already booked.');
    }
  });

  listEvents.push(newEvent);

  console.log(listEvents);
}

async function CreateEvent(links) {
  const {
    eventKeys, listEvents, members, daysWeek, time,
  } = await getConfig();
  const createEvent = renderTemplate(template, { eventKeys, links });

  const selects = [
    { id: eventKeys.days, list: daysWeek },
    { id: eventKeys.time, list: time },
    { id: eventKeys.participants, list: members, multiple: true },
  ];

  selects.forEach(({ id, list, multiple }) => {
    const fieldSet = createEvent.querySelector(`[data-element=${id}]`);
    if (!fieldSet) return;

    const input = Select(id, list, multiple);

    fieldSet.append(...input.children);
  });

  createEvent
    .querySelector('button[type="submit"]')
    .addEventListener('click', (e) => {
      try {
        submitForm(e.target.form, listEvents, eventKeys);
      } catch (error) {
        if (error instanceof CreateEventError) { error.alert(); }
      }
    });

  return createEvent;
}

export default CreateEvent;

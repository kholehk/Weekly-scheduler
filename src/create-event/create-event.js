import { appendChildMembers } from '../members/members';
import renderTemplate from '../utils/template-utils';
import template from './create-event.html';

export default async function CreateEvent(links) {
  const data = {
    labels: ['Name of the event:', 'Participants:', 'Date:', 'Time:'],
    links,
  };

  const createEvent = renderTemplate(template, data);

  await appendChildMembers(createEvent);

  return {
    template: createEvent.innerHTML,
    data: {},
  };
}

import appendChildSelect from '../select/select';
import getMembers from '../utils/members';
import renderTemplate from '../utils/template-utils';
import template from './create-event.html';

export default async function CreateEvent(links) {
  const members = await getMembers();
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const time = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
  const data = {
    links,
  };

  const createEvent = renderTemplate(template, data);
  const parents = createEvent.querySelectorAll('[data-element="select"]');

  if (parents.length) {
    const selectDays = appendChildSelect(parents[0], days);
    const selectTime = appendChildSelect(parents[1], time);
  }

  return {
    template: createEvent.innerHTML,
    data: { links },
  };
}

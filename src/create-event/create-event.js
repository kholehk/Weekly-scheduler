import Select from '../select/select';
import getConfig from '../utils/config';
import renderTemplate from '../utils/template-utils';
import template from './create-event.html';

async function CreateEvent(links) {
  const { members, daysWeek, time } = await getConfig();
  const createEvent = renderTemplate(template, { links });
  const selects = [
    { id: 'days', list: daysWeek },
    { id: 'time', list: time },
    { id: 'participants', list: ['All members ...', ...members] },
  ];

  selects.forEach((select) => {
    const element = createEvent.querySelector(`[data-element=${select.id}]`);
    if (element) {
      element.innerHTML += Select(select.list);
      const id = document.createAttribute('id');
      id.value = select.id;
      element.lastChild.attributes.setNamedItem(id);
    }
  });

  return createEvent.innerHTML;
}

export default CreateEvent;

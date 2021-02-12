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
    { id: 'participants', list: members, multiple: true },
  ];

  selects.forEach((select) => {
    const element = createEvent.querySelector(`[data-element=${select.id}]`);
    if (element) {
      element.innerHTML += Select(select.list);
      element.lastChild.setAttribute('id', select.id);
      element.lastChild.multiple = !!select.multiple;
    }
  });

  return createEvent.innerHTML;
}

export default CreateEvent;

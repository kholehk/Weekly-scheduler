import Calendar from '../calendar/calendar';
import CreateEvent from '../create-event/create-event';
import Start from '../start/start';
import renderTemplate from './template-utils';

function getLinks() {
  return {
    start: '/',
    calendar: '/calendar',
    createEvent: '/create-event',
  };
}

export default async function renderRoute(location, wrapper) {
  const path = location.pathname;
  const links = getLinks();
  let props = Start(links);

  switch (path) {
    case links.start:
      break;
    case links.calendar:
      props = await Calendar(links);
      break;
    case links.createEvent:
      props = await CreateEvent(links);
      break;
    default:
  }

  [...wrapper.children].forEach((ch) => wrapper.removeChild(ch));
  [...renderTemplate(props.template, props.data).children]
    .forEach((element) => wrapper.appendChild(element));
}

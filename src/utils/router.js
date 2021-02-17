import Calendar from '../calendar/calendar';
import CreateEvent from '../create-event/create-event';
import Start from '../start/start';
import { clearNode } from './template';

function getLinks() {
  return {
    start: '/',
    calendar: '/calendar',
    createEvent: '/create-event',
  };
}

async function renderRoute(location, wrapper) {
  const path = location.pathname;
  const links = getLinks();
  let page = Start(links);

  switch (path) {
    case links.start:
      break;
    case links.calendar:
      page = await Calendar(links);
      break;
    case links.createEvent:
      page = await CreateEvent(links);
      break;
    default:
  }

  clearNode(wrapper);
  page.addTo(wrapper);
}

export default renderRoute;

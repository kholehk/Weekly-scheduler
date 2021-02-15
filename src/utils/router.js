import Calendar from '../calendar/calendar';
import CreateEvent from '../create-event/create-event';
import Start from '../start/start';

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
  let render = Start(links);

  switch (path) {
    case links.start:
      break;
    case links.calendar:
      render = await Calendar(links);
      break;
    case links.createEvent:
      render = await CreateEvent(links);
      break;
    default:
  }

  [...wrapper.children].forEach((element) => element.remove());
  wrapper.append(...render.children);
}

export default renderRoute;

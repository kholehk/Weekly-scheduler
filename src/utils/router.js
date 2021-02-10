
import Calendar from '../calendar/calendar';
import Start from '../start/start';
import renderTemplate from './template-utils';

function getLinks() {
    return {
        start: '/',
        calendar: '/calendar',
        createEvent: 'create-event',
    }
};

async function renderRoute(location, wrapper) {
    const path = location.pathname;
    const links = getLinks();
    let props = Start();

    switch (path) {
        case links.start:
            break;
        case links.calendar:
            props = await Calendar();
            break;
        case links.createEvent:
            break;
        default:
    }

    wrapper.innerHTML = '';
    [...renderTemplate(props.template, props.data)].forEach(element => wrapper.appendChild(element));
}

export { getLinks, renderRoute }

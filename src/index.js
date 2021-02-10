import getHistory from './utils/app-history';

function main() {
    const links = Object.freeze({
        start: '/',
        calendar: '/calendar',
        createEvent: 'create-event',
    });

    const wrapper = document.querySelector('body');
    if (wrapper === null) return;

    function renderRoute(location) {
        const path = location.pathname;

        switch (path) {
            case links.start:
                break;
            case links.calendar:
                break;
            case links.createEvent:
                break;
            default:
        }

        wrapper.innerHTML = "";
    }

    const history = getHistory();
    history.listen(listener => renderRoute(listener.location));

    window.addEventListener("load", event => {
        event.preventDefault();

        const location = new URL(event.target.URL);

        renderRoute(location);
    });

    document.addEventListener("click", async event => {
        event.preventDefault();

        const href = event.target.href;
        if (!href) return;

        history.push({ ...(new URL(href)) });
    });
}

main()
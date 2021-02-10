import { createBrowserHistory } from 'history';

const appHistory = createBrowserHistory();

export default function getHistory() {
    return appHistory;
}

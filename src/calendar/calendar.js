import getMembers from '../members/members';
import { getLinks } from '../utils/router';
import template from './calendar.html';

export default async function Calendar() {
    return {
        template,
        data: {
            tableHeader: ['Name', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri',],
            links: { ...getLinks() },
        },
    }
}
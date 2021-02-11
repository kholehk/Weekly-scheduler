import getMembers from '../members/members';
import { getLinks } from '../utils/router';
import template from './create-event.html';

export default async function CreateEvent() {
    return {
        template,
        data: {
            members: await getMembers(),
            labels: ['Name of the event:', 'Participants:', 'Date:', 'Time:',],
            links: { ...getLinks() }
        },
    }
}
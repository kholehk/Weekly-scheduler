import getMembers from '../utils/members';
import { getLinks } from '../utils/router';
import template from './create-event.html';

export default async function CreateEvent() {
    return {
        template,
        data: {
            members: await getMembers(),
            links: { ...getLinks() }
        },
    }
}
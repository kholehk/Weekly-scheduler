import axios from 'axios';

import { getLinks } from '../utils/router';
import template from './calendar.html';

const urlAPI = 'https://rickandmortyapi.com';

async function getMembers(url) {
    const response = await axios.get(url);
    const members = response.data.map(element => element.name);

    return members;
}

export default async function Calendar() {
    return {
        template,
        data: {
            tableHeader: ['Name', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri',],
            members: await getMembers(new URL('/api/character/2,3,5,8,13', urlAPI)),
            links: { ...getLinks() },
        },
    }
}
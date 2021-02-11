import axios from 'axios';

import template from './members.html';

const urlAPI = 'https://rickandmortyapi.com/api/character/2,3,5,8,13';

async function getMembers() {
    const response = await axios.get(urlAPI);
    const members = response.data.map(element => element.name);

    return ['All members ...', ...members];
}

async function Members() {
    return {
        template,
        data: {
            members: await getMembers(),
        },
    }
}

export { getMembers, Members };
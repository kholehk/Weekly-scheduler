import axios from 'axios';
import renderTemplate from '../utils/template-utils';
import template from './members.html';

const urlAPI = 'https://rickandmortyapi.com/api/character/2,3,5,8,13';

async function getMembers() {
  const response = await axios.get(urlAPI);
  const members = response.data.map((element) => element.name);

  return ['All members ...', ...members];
}

async function Members() {
  return {
    template,
    data: {
      names: await getMembers(),
    },
  };
}

async function appendChildMembers(parent) {
  const element = parent.querySelector('li[data-modules="members"]');
  if (!element) return;

  const members = await Members();

  [...renderTemplate(members.template, members.data).children]
    .forEach((child) => element.appendChild(child));
}

export { Members, appendChildMembers };

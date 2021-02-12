import axios from 'axios';

async function getMembers() {
  const urlAPI = 'https://rickandmortyapi.com/api/character/2,3,5,8,13';
  const response = await axios.get(urlAPI);
  const members = response.data.map((element) => element.name);

  return members;
}

async function getConfig() {
  return {
    daysWeek: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    time: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
    members: await getMembers(),
  };
}

export default getConfig;

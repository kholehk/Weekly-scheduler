import axios from 'axios';

const eventKeys = Object.freeze({
  title: 'event',
  participants: 'participants',
  days: 'days',
  time: 'time',
});

const listEvents = {
  push(event) {
    localStorage.setItem(localStorage.length, event);
  },

  forEach(cb) {
    let element;

    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);

      try {
        element = JSON.parse(localStorage.getItem(key));
      } catch {
        element = {};
      }

      cb(element, key);
    }
  },
};

async function getMembers() {
  const urlAPI = 'https://rickandmortyapi.com/api/character/2,3,5,8,13';
  const response = await axios.get(urlAPI);
  const members = response.data.map((element) => element.name);

  return members;
}

async function getConfig() {
  return {
    eventKeys,
    listEvents,
    daysWeek: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    time: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
    members: await getMembers(),
  };
}

export default getConfig;

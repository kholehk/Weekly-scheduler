import axios from 'axios';

export default async function getMembers() {
  const urlAPI = 'https://rickandmortyapi.com/api/character/2,3,5,8,13';
  const response = await axios.get(urlAPI);
  const members = response.data.map((element) => element.name);

  return members;
}

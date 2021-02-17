import { Template } from '../utils/template';
import startHTML from './start.html';

function Start(links) {
  return Template(startHTML, { links });
}

export default Start;

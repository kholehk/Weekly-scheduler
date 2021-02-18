import { Template } from '../utils/template';
import markHTML from './mark.html';
import './mark.scss';

function Mark(event) {
  return Template(markHTML, { event });
}

export default Mark;

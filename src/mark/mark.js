import { Template } from '../utils/template';
import markHTML from './mark.html';
import './mark.scss';

function Mark(event, days, time) {
  return Template(markHTML, { event, days, time });
}

export default Mark;

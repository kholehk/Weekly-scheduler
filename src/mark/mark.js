import { Template } from '../utils/template';
import markHTML from './mark.html';
import './mark.scss';

function Mark(event, days, time) {
  const data = `${days}_${time}`;
  return Template(markHTML, {
    event, days, time, data,
  });
}

export default Mark;

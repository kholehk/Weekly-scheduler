import alertHTML from './alert.html';
import { Template } from '../utils/template';

function Alert(message) {
  return Template(alertHTML, { message });
}

export default Alert;

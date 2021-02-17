import alertHTML from './alert.html';
import { Template } from '../utils/template';

function Alert(message) {
  const tmpl = Template(alertHTML, { message });
  const render = tmpl.getRender().querySelector('.alert');

  render.addEventListener('click', (e) => {
    if (e.target.dataset.dismiss !== 'close') return;

    e.currentTarget.remove();
  });

  return tmpl;
}

export default Alert;

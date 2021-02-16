import template from './error.html';
import renderTemplate from '../utils/template-utils';

class CreateEventError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'CreateEventError';
  }

  alert() {
    const root = document.querySelector('#root');
    const existAlerts = root.querySelectorAll('.alert');
    [...existAlerts].forEach((alert) => alert.remove());

    const { message } = this;
    const newAlert = renderTemplate(template, { message });
    root.prepend(newAlert);

    const closeButton = newAlert.querySelector('[data-bs-dismiss="alert"]');
    closeButton.addEventListener('click', () => { newAlert.remove(); });

    setTimeout(() => {
      if (newAlert) { newAlert.remove(); }
    }, 3000);
  }
}

export default CreateEventError;

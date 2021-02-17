import Alert from '../alert/alert';

class CreateEventError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'CreateEventError';
  }

  alert() {
    const root = document.querySelector('#root');
    if (!root) return;

    const { message } = this;
    const newAlert = Alert(message);
    newAlert.addTo(root, newAlert.method.prepend);

    setTimeout(() => {
      const alertTimeOut = root.querySelector('.alert');
      if (alertTimeOut) { alertTimeOut.remove(); }
    }, 3000);
  }
}

export default CreateEventError;

import template from 'lodash.template';

function clearNode(parent) {
  [...parent.children].forEach((element) => element.remove());
}

function Template(html, data) {
  const htmlString = template(html)(data);

  const wrapper = document.createElement('div');
  wrapper.innerHTML = htmlString;

  return {
    method: Object.freeze({ append: 'append', prepend: 'prepend' }),

    getRender() {
      return wrapper;
    },

    addTo(parent, method = this.method.append) {
      if (!(parent && (method in this.method))) return;

      parent[method](...wrapper.childNodes);
    },
  };
}

export { Template, clearNode };

import renderTemplate from '../utils/template-utils';
import template from './start.html';

function Start(links) {
  const start = renderTemplate(template, { links });

  return start.innerHTML;
}

export default Start;

import renderTemplate from '../utils/template-utils';
import template from './start.html';

function Start(links) {
  return renderTemplate(template, { links });
}

export default Start;

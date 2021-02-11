import template from './start.html';

export default function Start(links) {
  return {
    template,
    data: { links },
  };
}

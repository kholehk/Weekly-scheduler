import { getLinks } from '../utils/router';
import template from './start.html';

export default function Start() {
    return {
        template,
        data: { links: { ...getLinks() } },
    }
}
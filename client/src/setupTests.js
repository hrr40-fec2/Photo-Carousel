import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {jsdom} from 'jsdom';

configure({  adapter: new Adapter() });



// const documentHTML = '<!doctype html><html><body><div id="root"></div></body></html>';
// global.document = jsdom(documentHTML);
// global.window = document.parentWindow;

// global.window.resizeTo = (width, height) => {
//   global.window.innerWidth = width || global.window.innerWidth;
//   global.window.innerHeight = width || global.window.innerHeight;
//   global.window.dispatchEvent(new Event('resize'));
// };
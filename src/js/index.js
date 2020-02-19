import '../scss/app.scss';
import './../plugins/navigation-menu';

import { TypeIt } from './../plugins/text-manipulation';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

const typeOptions = ['Teri Fash ', '.text .content', 300];
const type = new TypeIt(...typeOptions );

type.run();

UIkit.use(Icons);

// Run your page code here.

console.log('hello index.html');

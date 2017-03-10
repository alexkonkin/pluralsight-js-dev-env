import './index.css'

import numeral from 'numeral';

const courceValue = numeral(1000).format('$0.00');
//debugger;
console.log(`I would pay ${courceValue} for this awesome cource!`); // eslint-disable-line no-console


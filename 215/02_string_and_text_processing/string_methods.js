// indexOf
let language = 'JavaScript';

language.indexOf('S');    // 4
language.indexOf('s');    // -1
language.indexOf('ipt');  // 7

// lastIndexOf
let state = 'Mississippi';

state.lastIndexOf('i');    // 10
state.lastIndexOf('s');    // 6
state.lastIndexOf('sp');   // -1

// replace
let state = 'Mississippi';

state.replace('s', 'q');   // "Miqsissippi"
state.replace(/s/g, 'q');  // "Miqqiqqippi"

// split
let state = 'Mississippi';

state.split('');   // ["M", "i", "s", "s", "i", "s", "s", "i", "p", "p", "i"]
state.split('s');  // ["Mi", "", "i", "", "ippi"]
'1, 2, 3, 4, 5, 6'.split(', ');  // ["1", "2", "3", "4", "5", "6"]

// substr
let state = 'Mississippi';

state.substr(6);     // "sippi"
state.substr(-5);    // "sippi"
state.substr(6, 3);  // "sip"

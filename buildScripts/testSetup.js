//This file is not transpiled, so mush use CommonJS and ES5

//Register babel to transpile before our rests run.
require('babel-register')();

// Disable webpack freatures that Mocha doesn't understand.
require.extensions['.css'] = function(){};

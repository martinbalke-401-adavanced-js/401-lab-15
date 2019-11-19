'use strict';
//Requiring in the alterfile function
const {alterFile} = require('./src/file-changer');
//Getting the filepath from the console arguments
let file = process.argv.slice(2).shift();
//Calling the function with the specified filepath
alterFile(file);

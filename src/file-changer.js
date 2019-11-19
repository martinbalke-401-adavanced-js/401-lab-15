'use strict';
//IMPORTS
module.exports = exports = {};
const fs = require('fs');
const faker = require('faker');
const util = require('util');
const emitter = require('./emitter');
//Requiring the event handlers and listeners from logger
require('./logger');

//Promisifying write and read file
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

/**
 * Load file uses the promisified version of readfile to read the contents of that file
 * @param {String} file - The path to the file we want to read
 * @returns {Buffer} - The contents of the file 
 */
exports.loadFile = async (file) => {
  let fileContents = await readFile(file);
  return fileContents;
};

/**
 * Save file takes in a filepath and writes some dumby lorem ipsum over the files contents
 * @param {String} file - The path to the file you would like to overwrite
 */
exports.saveFile = async (file) => {
  let loremText = faker.lorem.sentence();
  await writeFile(file, loremText);
};

/**
 * Alter file takes in a file path , attempts to read that file and then overwrites it
 * @param {String} file - The path to the file you would like to overwrite
 * @fires #file-saved - Event for a successful file save
 * @fires #file-error - Event for an erorr in the file saving process
 */
exports.alterFile = async (file) => {
  try {
    if(!file) throw {message: 'Please provide a file'};
    await exports.loadFile(file);
    await exports.saveFile(file);
    emitter.emit('file-saved', {status: 1, file, text: 'saved'});
    console.log(emitter);
  } catch (error) {
    if(error) emitter.emit('file-error', {satus: 0, file, text: error.message});
  }
};


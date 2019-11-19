'use strict';

const emitter = require('./emitter');

/**
 * Success handler takes in the event object and console logs the filepath on a successfull save
 * @param {Object} event - An object containing information about what triggered the event
 */
const successHandler = (event) => {
  console.log(`SUCCESS: Changing file ${event.file} succeeded`);
};

/**
 * Error handler takes in the event object and console logs information about why it failed
 * @param {Object} event - An object containing information about what triggered the event
 */
const errorHandler = (event) => {
  console.log(`ERROR: Changing file ${event.file} failed with error ${event.text}`);
};
/**
 * File-Saved event
 * @event #file-saved
 * @property {Object} event - Contains the status, filepath, and message about the event that fired it
 */
emitter.on('file-saved', successHandler);

/**
 * File-Error event
 * @event #file-error
 * @property {Object} event - Contains the status, filepath, and message about the event that fired it
 */
emitter.on('file-error', errorHandler);
'use strict';
//Setting up the event emitter which can be shared acrossed multiple files
const EventEmitter = require('events');
const emitter = new EventEmitter();

module.exports = emitter;
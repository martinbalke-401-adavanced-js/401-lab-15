'use strict';

jest.mock('fs');

require('../src/logger');
const {alterFile, loadFile, saveFile} = require('../src/file-changer');

describe('File changer tests', () => {
  it('Causes a file-error event when missing file', () => {
    const spy = jest.spyOn(console, 'log');
    alterFile();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
  it('loadFile returns an error when given bad filepath', () => {
    try {
      loadFile('bad.txt');
    } catch (error) {
      expect(error).toBe('Invalid file');
    }
  });
  it('saveFile returns an error when given bad filepath', () => {
    try {
      saveFile('bad.txt');
    } catch (error) {
      expect(error).toBe('Invalid file');
    }
  });
  it('Causes a file-error event when the filepath is bad', () => {
  });
  it('Can alter a file succesfully and emits a file-saved event', () => {});
});


describe('Logger tests', () => {
  it('Does nothing when missing object arguments from a file-error event', () => { });
  it('Does nothing when missing object arguments from a file-saved event', () => { });
  it('Will console log an error message when file-error is emitted', () => { });
  it('Will console log an error message when file-saved is emitted', () => { });
});
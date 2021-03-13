import sudokuChecker from './../src/person.js';

describe('sudokuChecker', () => {

  test('Test should return a boolean that is true', () => {
    expect(sudokuChecker()).toEqual(true);
  });
});
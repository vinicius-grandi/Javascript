const { faker } = require('@faker-js/faker');
const sqrt = require('./maths');

describe('square root', () => {
  Array.from(Array(100)).forEach(() => {
    const num = faker.datatype.number({ min: 0 });
    const squareRoot = sqrt(num);
    it(`returns the square root of ${num}`, () => {
      expect(squareRoot * squareRoot).toBeCloseTo(num, 7)
    });
  });
  Array.from(Array(100)).forEach(() => {
    const num = faker.datatype.number({ min: 0, max: 1, precision: 0.0000001 });
    const squareRoot = sqrt(num);
    it(`returns the square root of ${num}`, () => {
      expect(squareRoot * squareRoot).toBeCloseTo(num, 7)
    });
  })
});

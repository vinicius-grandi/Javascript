const coollib = require('../Jest/index');

jest.mock('../Jest/index');

test('Encontrar o arquivo', () => {
  const result = coollib.findTestTXT();
  expect(result).toBeTruthy();
})

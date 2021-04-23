const randomNumber = require("./getrandomNumber");

test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
  randomNumber = jest.fn().mockReturnValue(10);

  expect(randomNumber).toBe(10);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
});

test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
  randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(randomNumber(10, 2)).toBe(5);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber).toHaveBeenCalledWith(10, 2);
});

describe("testando implementações", () => {
  test("mockando função para receber 3 parâmetros e retornar sua multiplicação", () => {
    randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(randomNumber(2, 3, 4)).toBe(24);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(2, 3, 4);
  });

  test("mockando função que recebe um parâmetro e retorna seu dobro", () => {
    randomNumber.mockReset();
    expect(randomNumber).toHaveBeenCalledTimes(0);

    randomNumber.mockImplementation((a) => a * 2);

    expect(randomNumber(5)).toBe(10);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(5);
  });
});

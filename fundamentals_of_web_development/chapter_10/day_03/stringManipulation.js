const firstFunction = (str) => str.toUpperCase();
const secondFunction = (str) => str.charAt(0);
const thirdFunction = (str1, str2) => str1.concat(str2);

export default {
  firstFunction,
  secondFunction,
  thirdFunction,
};

function fetchDog() {
  return fetch("https://dog.ceo/api/breeds/image/random").then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  );
}
export default { fetchDog };

const service = require("./service");
describe("testando a requisição", () => {
  service.fetchDog = jest.fn();
  afterEach(service.fetchDog.mockReset);

  test("testando requisição caso a promisse resolva", async () => {
    service.fetchDog.mockResolvedValue("request sucess");

    service.fetchDog();
    expect(service.fetchDog).toHaveBeenCalled();
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
    expect(service.fetchDog()).resolves.toBe("request sucess");
    expect(service.fetchDog).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promisse seja rejeitada", async () => {
    service.fetchDog.mockRejectedValue("request failed");

    expect(service.fetchDog).toHaveBeenCalledTimes(0);
    expect(service.fetchDog()).rejects.toMatch("request failed");
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
  });
});

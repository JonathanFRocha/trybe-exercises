const { encode, decode } = require("./encode-decode");

describe("Testa a função encode e decode", () => {
  it("encode é uma função", () => {
    expect(typeof encode).toEqual("function");
  });

  it("decode é uma função", () => {
    expect(typeof decode).toEqual("function");
  });

  it("passando a,e,i,o,u retorna 1,2,3,4,5", () => {
    expect(encode("a,e,i,o,u")).toEqual("1,2,3,4,5");
  });

  it("passando 1,2,3,4,5 retorna a,e,i,o,u", () => {
    expect(decode("1,2,3,4,5")).toEqual("a,e,i,o,u");
  });

  it("passando jonathan retorna j4n1th1n", () => {
    expect(encode("jonathan")).toEqual("j4n1th1n");
  });

  it("passando j4n1th1n retorna jonathan", () => {
    expect(decode("j4n1th1n")).toEqual("jonathan");
  });

  it("quantidade de caractered do jonathan tem de ser 8", () => {
    expect(encode("jonathan").length).toEqual(8);
  });
});

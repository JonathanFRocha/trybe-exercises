const uppercase = require("./upperCase");

describe("Testing uppercase return", () => {
  it("if pass jonathan, must return JONATHAN", (done) => {
    uppercase("jonathan", (word) => {
      expect(word).toBe("JONATHAN");
      done();
    });
  });
});

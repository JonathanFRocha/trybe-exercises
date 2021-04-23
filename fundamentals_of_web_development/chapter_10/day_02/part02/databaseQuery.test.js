const { getUserName } = require("./databaseQuery");

describe("test getUsername function, its a promise", () => {
  it("should return Mark if parameter is 4", () => {
    expect.assertions(1);
    return getUserName(4).then((userName) => expect(userName).toBe("Mark"));
  });
  it("should return an error 'User with 1 not found.'", () => {
    expect.assertions(1);
    return getUserName(1).catch((err) => expect(err).toEqual({ error: "User with 1 not found." }));
  });
});

describe("test getUserName using async Await", () => {
  it("should return Paul if parameter 5 is given", async () => {
    const name = await getUserName(5);
    expect(name).toEqual("Paul");
  });

  it("should return error if parameter 1 is given", async () => {
    try {
      const name = await getUserName(1);
    } catch (error) {
      expect(error).toEqual({ error: "User with 1 not found." });
    }
  });
});

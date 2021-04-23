const getRepos = require("./getRepos");

describe("Test if getRepos return a repository name", () => {
  it("should contain sd-01-week4-5-project-todo-list if a url to Tryber repo is given", async () => {
    const name = await getRepos("https://api.github.com/orgs/tryber/repos");
    expect(name).toContain("sd-01-week4-5-project-todo-list");
  });

  it("should contain sd-01-week4-5-project-meme-generator if a url to Tryber repo is given", async () => {
    const name = await getRepos("https://api.github.com/orgs/tryber/repos");
    expect(name).toContain("sd-01-week4-5-project-meme-generator");
  });
});

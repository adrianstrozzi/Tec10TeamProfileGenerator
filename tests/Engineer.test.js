const Engineer = require("../lib/Engineer");

test("Test github creation.", () => {
  const reviewGitHubProfile = "adrianstrozzi";
  const newEmployeeCreation = new Engineer("Adrian", 1, "adrianstrozzi@gamil.com", reviewGitHubProfile);
  expect(newEmployeeCreation.github).toBe(reviewGitHubProfile);
});

test("Testing getGithub will return github.", () => {
  const reviewGitHubProfile = "adrianstrozzi";
  const newEmployeeCreation = new Engineer("Adrian", 1, "adrianstrozzi@gamil.com", reviewGitHubProfile);
  expect(newEmployeeCreation.getGithub()).toBe(reviewGitHubProfile);
});

test("Testing role.", () => {
  const returnValue = "Engineer";
  const newEmployeeCreation = new Engineer("Adrian", 1, "adrianstrozzi@gamil.com", "adrianstrozzi");
  expect(newEmployeeCreation.getRole()).toBe(returnValue);
});
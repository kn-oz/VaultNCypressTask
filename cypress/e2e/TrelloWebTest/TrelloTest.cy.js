import HomePage from "../Pages/HomePage.cy";
import LoginPage from "../Pages/LoginPage.cy";
import UserDashBoardPage from "../Pages/UserDashBoardPage.cy";

describe("Trello Case Study", () => {
  const dashboardPage = new UserDashBoardPage();
  const homePage = new HomePage();
  const loginPage = new LoginPage();

  after(() => {
    // I use this close and delete methods to close and removal of board
    dashboardPage.getCloseBoard();
    dashboardPage.getDeleteBoard();
  });
  it("Trello Adding Board,List,Cards & Moving Cards", () => {
    cy.visit("https://trello.com/");
    homePage.getLoginButton().click();

    // I use cy.origin to handle cross-origin domains
    cy.origin("https://id.atlassian.com", () => {
      cy.get('[id="username"]').type("kaanQAtesting@gmail.com")
      cy.get('[id="login-submit"]').click()
      cy.get('[type="password"]').type("Kaantest1234{enter}")
    });

    dashboardPage.getAddBoard("VaultN");
    // I use method to create List Dynamically
    dashboardPage.getAddList("Backlog");
    dashboardPage.getAddList("Todo");
    dashboardPage.getAddList("Doing");
    dashboardPage.getAddList("Testing");
    dashboardPage.getAddList("Done");

    // I use method to create Card Dynamically by List indexes
    dashboardPage.getAddCardtoList("Sign up for Trello", 1);
    dashboardPage.getAddCardtoList("Get key and token", 1);
    dashboardPage.getAddCardtoList("Build a collection", 1);
    dashboardPage.getAddCardtoList("Working on Task", 1);
    dashboardPage.getAddCardtoList("UI Automation", 0);
    dashboardPage.getAddCardtoList("Writing Test Scenarios", 0);

    // I use method to move card to target status dynamically
    dashboardPage.getListMove("Sign up for Trello", "Done");
    dashboardPage.getListMove("Get key and token", "Testing");
    dashboardPage.getListMove("Build a collection", "Doing");
    dashboardPage.getListMove("Working on Task", "Doing");
  });
});

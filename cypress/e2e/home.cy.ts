/// <reference types="cypress" />

describe("home page", () => {
  beforeEach(() => {
    cy.visit(" http://127.0.0.1:5173/");
  });

  context("language", () => {
    it("should change languages successfully", () => {
      cy.getByData("lang-button").click();
      cy.getByData("lang-bm").click();
      cy.getByData("header-home").contains("Utama");
      cy.getByData("footer-copyright")
        .should("exist")
        .contains("Hak Cipta Terpelihara");
    });
  });

  context("navigation", () => {
    it("navigates to login", () => {
      cy.getByData("header-logo").find("a").eq(3).click();
      cy.location("pathname").should("eq", "/login");
    });
    it("navigates to the search results", () => {
      cy.getByData("header-logo").find("a").eq(0).click();
      cy.getByData("search-box").type("japanese");
      cy.getByData("search-button").click();
      cy.location("pathname").should("eq", "/search/japanese");
      cy.get("h1").contains("Showing results for");
    });
  });
});

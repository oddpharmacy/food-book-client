/// <reference types="cypress" />

describe("home page", () => {
  beforeEach(() => {
    cy.visit(" http://127.0.0.1:5173/");
  });

  context("language", () => {
    it.only("should change languages successfully", () => {
      cy.getByData("lang-button").click();
      cy.getByData("lang-bm").click();
      cy.getByData("header-home").should("exist").contains("Utama");
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
  });
});

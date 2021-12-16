const BASE_URL = process.env.BACKEND_URL || "localhost:3001";

describe("index", () => {
  beforeEach(() => {
    cy.visit(BASE_URL);
  });
  it("renders", () => {
    cy.findAllByText("CompressURL").should("exist");
    cy.findByTestId("form-input").should("exist");
  });

  context("valid url", () => {
    it("allows user to create a short url", () => {
      cy.intercept("/short_urls.json", { fixture: "createURL" }).as(
        "createShortURL"
      );
      cy.findByTestId("form-input").type("http://www.testsite.com");
      cy.findByTestId("submit-btn").click();
      cy.wait(["@createShortURL"]).then((intercept) => {
        assert.isNotNull(intercept.response.body);
      });
      cy.findAllByTestId("short-code").should("have.text", "Short URL: 9");
    });
  });
});

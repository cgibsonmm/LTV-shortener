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
      cy.findByTestId("form-input").type("http://www.testsite.com");
    });
  });
});

describe("index", () => {
  beforeEach(() => {
    cy.visit("localhost:3001");
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

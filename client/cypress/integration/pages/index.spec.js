describe("index", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });
  it("renders", () => {
    cy.findAllByText("CompressRL").should("exist");
  });
});

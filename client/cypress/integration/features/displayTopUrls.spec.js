import { BASE_URL } from "../../../services/endpoint";

describe("Top100", () => {
  beforeEach(() => {
    cy.visit(BASE_URL);
    cy.viewport(500, 1000);
  });

  it("renders", () => {
    cy.findByTestId("top-100-heading").should("be.visible");
  });

  it("displays a list of the top 100 urls", () => {
    cy.intercept("/", { fixture: "top100" }).as("getTop100");
    cy.wait(["@getTop100"]).then((intercept) => {
      assert.isNotNull(intercept.response.body.urls);
    });
    cy.findAllByTestId("top-item").should("have.length.above", 1);
  });
});

describe('testing my app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy=ToggleLikeMe]').find('input').as('checkbox');
  });

  it('can toggle a checkbox', () => {
    // cy.visit('http://localhost:3000/'); // no longer needed as set up in before each

    cy.get('@checkbox').check().uncheck().check().should('be.checked');
  });

  it('can toggle the checkbox by clicking the label', () => {
    // cy.visit('http://localhost:3000/'); // no longer needed as set up in before each

    //find and click DOM element that contains the string 'please like me'
    cy.contains('please like me').click();

    //assert that this input should not be checked
    cy.get('@checkbox').should('be.checked');
  });
});

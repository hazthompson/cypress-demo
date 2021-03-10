describe('Testing my project', () => {
  // beforeEach(() => {
  //    cy.visit('http://localhost:3000/');
  // cy.get('[data-cy=ToggleLikeMe]').find('input').as('checkbox');
  // });

  it('can toggle a checkbox', () => {
    cy.visit('http://localhost:3000/'); //before we can do anything all test are separate - do not rely on eachother
    //.get this uses jquery under the hood so any CSS identifyers you can get in that way
    // cy.get('div.content');
    // cy.get('#id');
    // cy.get('.Toggle-like-me')

    cy.get('[data-cy=ToggleLikeMe]')
      .find('input')
      .check()
      .uncheck()
      .check()
      .should('be.checked'); //this is optional (if not.be.checked it will throw an error here)
  });

  //check if it works by clicking on the label (HTML thing - accessibility)
  it('can toggle the checkbox by clicking the label', () => {
    cy.visit('http://localhost:3000/');

    cy.contains('please like me').click();

    cy.get('[data-cy=ToggleLikeMe]').find('input').should('be.checked');
  });
});
// you can also see how this would be perfect for Hackers/bots
//you do not have to describe - it is nice and neat and a way to clearly group test BUT it is optional

// https://docs.cypress.io/guides/references/best-practices.html

//advantages of data- (
//   don't need to add extra classes with no styles attached,
//   it explicitly tells developers what this is doing
//   if classnNames changes this won't be affected
// )

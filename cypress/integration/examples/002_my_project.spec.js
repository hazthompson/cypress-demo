describe('Testing my project', () => {
  it('can toggle a checkbox', () => {
    cy.visit('http://localhost:3000/'); //before we can do anything all test are separate - do not rely on eachother
    //.get this uses jquery under the hood so any CSS identifyers you can get in that way
    // cy.get('div.content');
    // cy.get('#id');

    cy.get('.toggle-like-me').find('input').check().uncheck().check().uncheck();
  });
});

// you can also see how this would be perfect for Hackers/bots
//you do not have to describe - it is nice and neat and a way to clearly group test BUT it is optional
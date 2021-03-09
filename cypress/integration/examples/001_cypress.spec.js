describe('cypress tests', () => {
  // it('is working', () => {
  //   expect(true).to.equal(true);
  // });

  it('can visit a website', () => {
    cy.visit('http://www.google.com');
  });
});

//show that this is built on Chai by change toEqual and seeing Chai error. You don't need to install chai ! all comes with Cypress

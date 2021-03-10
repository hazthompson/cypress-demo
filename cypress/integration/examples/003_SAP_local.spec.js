describe('Testing local SAP', () => {
  it('can login', () => {
    cy.visit('http://localhost:3001/'); //before we can do anything all test are separate - do not rely on eachother

    //type in username
    cy.get('.login__username').type(process.env.REACT_APP_USER_LOGIN, {
      delay: 100,
    });

    //type in password
    cy.get('.login__password').type(process.env.REACT_APP_USER_PASSWORD, {
      delay: 100,
    });

    //click login button
    cy.get('.login__login-button').click();

    cy.location('pathname', { timeout: 50000 }).should(
      'include',
      '/patient-list'
    );
    // cy.wait(5000);

    //navigate to patient details page

    cy.get('.patient-list__first_name').first().click();
    cy.location('pathname', { timeout: 30000 }).should('include', '/details');
    // cy.wait(3000);
    cy.get('.PatientView');

    //check if tab displays patients nickname
    cy.get('.PatientTabs__tab').first().find('span').contains('ANNA');
  });
});

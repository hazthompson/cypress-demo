describe('Testing local SAP', () => {
  it('can login', () => {
    cy.visit('http://localhost:3001/');

    //type in username
    cy.get('.login__username').type(process.env.REACT_APP_USER_LOGIN, {
      delay: 100, //slow down this action by stated delay number - either to test for slow typing! or to see you test running more slowly/clearly
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

    //click first patient in list
    cy.get('.patient-list__first_name').first().click();

    //redirect to different pathename and clarify this
    cy.location('pathname', { timeout: 30000 }).should('include', '/details');
    // cy.wait(3000);  - this is not recommended - if you commment out this line the link to docs explains why
    cy.get('.PatientView');

    //check if tab displays patients nickname
    cy.get('.PatientTabs__tab').first().find('span').contains('ANNA'); //could adapt hardcoded Anna to be dynamic example of nickname for better test
  });
});

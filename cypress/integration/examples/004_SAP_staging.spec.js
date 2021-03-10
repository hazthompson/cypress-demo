//SAME TEST AS 003 BUT POINTING TO STAGING INSTEAD OF LOCAL - IN CURRENT STATE THIS WILL FAIL WHEREAS THE LOCAL WILL PASS

describe('Testing local SAP', () => {
  it('can login', () => {
    cy.visit('https://sap.bcchdigital.ca/');

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

    cy.location('pathname', { timeout: 80000 }).should(
      'include',
      '/patient-list'
    );

    cy.get('.patient-list__first_name').first().click();
    cy.location('pathname', { timeout: 30000 }).should('include', '/details');
    // cy.wait(3000);
    cy.get('.PatientView');

    //check if tab displays patients nickname
    cy.get('.PatientTabs__tab').first().find('span').contains('ANNA');
  });
});

describe('Testing production SAP', () => {
  it('can login', () => {
    cy.visit('https://sap.bcchdigital.ca/'); //before we can do anything all test are separate - do not rely on eachother

    //type in username
    cy.get('.login__username').type(process.env.REACT_APP_USER_LOGIN);

    //type in password
    cy.get('.login__password').type(process.env.REACT_APP_USER_PASSWORD);

    //click login button
    cy.get('.login__login-button').click();
    cy.wait(5000);
    cy.log('finished login');
    //navigate to patient details page
    cy.get('.patient-list__first_name').first().click();
    cy.wait(3000);
    cy.get('.PatientView');

    //check if tab displays patients nickname
    cy.get('.PatientTabs__tab').first().find('span').contains('ANNA');
    //then check that the tabs include patient's nickname - rather than the word patient
  });
});

# CYRESS DEMO

## Useful Cypress Links

- [Cypress Docs](https://docs.cypress.io/api/api/table-of-contents.html)
- [Cypress Best Practices (Official)](https://docs.cypress.io/guides/references/best-practices.html)
- [Continuous Integration With Netlifly](https://docs.cypress.io/guides/continuous-integration/introduction.html#Netlify)
- [Cypress Linter: eslint-plugin-cypress](https://stackoverflow.com/questions/58982852/eslint-cy-is-not-defined-cypress)
- [Cyprus with React - Component Testing](https://docs.cypress.io/guides/component-testing/introduction.html#Getting-Started)

## Jest vs Cypress

Jest

- Command line test runner
- Based around testing assertions
- Used for unit and integration testing (mostly)

Cypress

- Runs its own browser to execute the tests in
  Performs operations and interacts with the site the way that a user would (eg. typing into input fields, clicking on buttons, adding users to DB)
- Used for integration and E2E testing (mostly)

## Cypress configuration tips

Some useful option to include in the cypress.json file in the main directory to configure Cypress

```{
  "baseUrl": "http://localhost:3000",
  "viewportWidth": 1280,
  "viewportHeight": 1200,
  "defaultCommandTimeout": 10000
}

- baseUrl tells Cypress where our application is hosted and what port it's listening on. Allowing you do cy.visit('/') rather than having to write the full path each time.
- viewportWidth and viewportHeight specify the dimensions for Cypress' browser to use. Great for testing on mobile/desktop specific.
- defaultCommandTimeout can be extended if connection is slow.


## Create react app setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
```

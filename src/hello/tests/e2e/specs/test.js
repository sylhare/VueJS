// https://docs.cypress.io/api/introduction/api.html

describe('Get around the app', () => {
  it('Visits Home', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Vue JS')
  })
})

describe('Get to the Update profile page', () => {
  it('Visits the update page', () => {
    cy.visit('/about')
    cy.contains('h1', 'This is an about page')
  })
})

Feature: Smoke Gherkin
  Scenario: Verifico que el runner funciona
    Given que abro "https://example.cypress.io"
    Then debería ver el texto "Kitchen Sink"

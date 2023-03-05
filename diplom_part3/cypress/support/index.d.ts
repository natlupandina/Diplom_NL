/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    getIframeBody(xpath: string): Chainable<any>;
  }
}
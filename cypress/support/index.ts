import Loggable = Cypress.Loggable;
import Timeoutable = Cypress.Timeoutable;
import Withinable = Cypress.Withinable;

Cypress.Commands.add('dataCy', (value: string, options?: Partial<Loggable & Timeoutable & Withinable>) => {
	return cy.get(`[data-cy=${ value }]`, options);
});

Cypress.Commands.add('dataId', (value: string, options?: Partial<Loggable & Timeoutable & Withinable>) => {
	return cy.get(`[data-testid=${ value }]`, options);
});

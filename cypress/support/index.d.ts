declare namespace Cypress {
	interface Chainable<Subject> {
		/**
		 * Custom command to select DOM element by data-cy attribute.
		 * @example cy.dataCy('greeting')
		 */
		dataCy<E extends Node = HTMLElement>(value: string, options?: Partial<Loggable & Timeoutable & Withinable>): Chainable<JQuery<E>>

		/**
		 * Custom command to select DOM element by data-testid attribute.
		 * @example cy.dataCy('greeting')
		 */
		dataId<E extends Node = HTMLElement>(value: string, options?: Partial<Loggable & Timeoutable & Withinable>): Chainable<JQuery<E>>
	}
}

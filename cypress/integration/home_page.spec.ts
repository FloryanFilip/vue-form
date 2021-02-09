describe('HomePage', () => {
	it('should click on [navigateToForm] button and succeed', () => {
		cy.visit('/');

		cy.dataCy('navigateToFormButton').should('be.visible').click();

		cy.url().should('include', '/form');
	});
});

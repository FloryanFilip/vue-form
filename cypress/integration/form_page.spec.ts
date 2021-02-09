describe('FormPage', () => {
	beforeEach(() => cy.visit('/form'));

	it('should submit the form without filled data and validation errors should be shown', () => {
		cy.dataId('button-submit').should('be.visible').click().as('submitButton');
		cy.dataId('fullName').should('have.class', 'error');
		cy.get('@submitButton').should('be.disabled');
	});

	it('should submit the form, then fill out the data and submit it again successfully', () => {
		cy.dataId('button-submit').should('be.visible').click().as('submitButton');

		cy.dataId('fullName').should('be.visible').within(() => {
			cy.get('input').type('Filip Floryan').should('not.have.class', 'error');
		});
		cy.dataId('email').should('be.visible').within(() => {
			cy.get('input').type('floryan@floryan.com').should('not.have.class', 'error');
		});

		cy.dataId('phoneNumber').should('be.visible').within(() => {
			cy.get('input').type('+48533353353').should('not.have.class', 'error');
		});

		cy.get('@submitButton').should('not.be', 'disabled').click();

		cy.url().should('contain', '/success');
	});
});

export default {
	common: {
		navigateToForm: 'Navigate to form',
		confirm: 'Confirm',
		cancel: 'Cancel',
		success: 'Success',
	},
	buttons: {
		defaultLabel: 'Default label',
		confirm: '@:common.confirm',
		cancel: '@:common.cancel',
	},
	createNewPersonForm: {
		title: 'Add new person',
		labels: {
			fullName: 'First and last name',
			email: 'Email address',
			phone: 'Contact number',
		},
		placeholders: {
			fullName: 'John Wick',
			email: 'John.wick@excommunicado.com',
			phone: '+100 1-1-1',
		},
	},
	validations: {
		minLength: 'Minimal length is: {count}',
		maxLength: 'Maximal length is: {count}',
		required: '{value} is required | {value} is required',
		invalidPattern: 'Wrong format',
	},
};

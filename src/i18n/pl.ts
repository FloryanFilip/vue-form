export default {
	common: {
		navigateToForm: 'Przejdź do formularza',
		confirm: 'Potwierdź',
		cancel: 'Anuluj',
		success: 'Sukces',
	},
	buttons: {
		defaultLabel: 'Domyślna etykieta',
		confirm: '@:common.confirm',
		cancel: '@:common.cancel',
	},
	createNewPersonForm: {
		title: 'Dodaj nową osobę',
		labels: {
			fullName: 'Imię i nazwisko',
			email: 'Adres Email',
			phone: 'Telefon kontaktowy',
		},
		placeholders: {
			fullName: 'Jan Kowalski',
			email: 'jan.kowalski@gmail.com',
			phone: '+48 533-533-533',
		},
	},
	validations: {
		minLength: 'Minimalna dopuszczalna długość wynosi: {count}',
		maxLength: 'Maksymalna dopuszczalna długość wynosi: {count}',
		required: '{value} jest wymagane | {value} jest wymagany',
		invalidPattern: 'Zły format',
	},
};

import useI18nGlobally from '../__utils__/i18n';

const i18n = useI18nGlobally();

describe('i18n', () => {
	it('should return a translation for a given phrase', () => {
		expect(i18n.t('common.navigateToForm')).toBe('Przejdź do formularza');
	});

	it('should be possible to switch languages', () => {
		expect(i18n.t('common.navigateToForm', 'it-IT')).toBe('Vai al modulo');
	});
});

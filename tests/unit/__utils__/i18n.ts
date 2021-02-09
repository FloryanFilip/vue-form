import Vue from 'vue';
import VueI18n from 'vue-i18n';

import pl from '@/i18n/pl';

const locale = 'pl';

const useI18n = (vue: any) => {
	vue.use(VueI18n);

	return new VueI18n({
		silentTranslationWarn: true,
		locale,
		fallbackLocale: locale,
		messages: {
			[locale]: pl,
			'it-IT': {
				common: {
					navigateToForm: 'Vai al modulo',
				},
			},
		},
	});
};

const useI18nGlobally = () => {
	return useI18n(Vue);
};

export { locale, useI18n, useI18nGlobally };
export default useI18nGlobally;

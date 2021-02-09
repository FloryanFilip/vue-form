import { createLocalVue, mount, Wrapper } from '@vue/test-utils';
import AppButtonComponent from '@/core/components/app-button/app-button.component.vue';
import { useI18n } from '../../../../../tests/unit/__utils__/i18n';

describe('AppButtonComponent', () => {
	let wrapper!: Wrapper<AppButtonComponent>;
	const localVue = createLocalVue();
	const i18n = useI18n(localVue);
	const factory = (slots?: any) => {
		return mount(AppButtonComponent, {
			localVue,
			i18n,
			slots: { ...slots },
		});
	};

	beforeEach(() => wrapper = factory());
	afterEach(() => wrapper.destroy());

	it('should render default slot default content', () => {
		const defaultSlot = wrapper.find('button');

		expect(defaultSlot.text()).toBe('Domyślna etykieta');
	});

	it('should render provided default slot content', () => {
		wrapper = factory({ default: '<span>Zatwierdź</span>'});

		const defaultSlot = wrapper.find('button');

		expect(defaultSlot.text()).toBe('Zatwierdź');
	});
});

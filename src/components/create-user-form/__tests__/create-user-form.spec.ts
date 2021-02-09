import CreateUserFormComponent from '@/components/create-user-form/create-user-form.component.vue';
import { createLocalVue, shallowMount, Wrapper } from '@vue/test-utils';
import { useI18n } from '../../../../tests/unit/__utils__/i18n';

describe('CreateUserFormComponent', () => {
	let wrapper!: Wrapper<CreateUserFormComponent>;
	const localVue = createLocalVue();
	const i18n = useI18n(localVue);

	const factory = (props?: object) => {
		return shallowMount(CreateUserFormComponent, {
			localVue,
			i18n,
			propsData: {
				fullName: {
					value: '',
					error: undefined,
				},
				email: {
					value: '',
					error: undefined,
				},
				phoneNumber: {
					value: '',
					error: undefined,
				},
				loading: false,
				...props,
			},
			stubs: {
				'app-input': true,
				'app-button': true,
			},
		});
	};

	beforeEach(() => wrapper = factory());
	afterEach(() => wrapper.destroy());

	it('should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should display fullName label', () => {
		const fullNameLabel = wrapper.find('[data-testid="fullName"]');

		expect(fullNameLabel.text()).toBe('Imię i nazwisko');
	});

	it('should display email label', () => {
		const fullNameLabel = wrapper.find('[data-testid="email"]');

		expect(fullNameLabel.text()).toBe('Adres Email');
	});

	it('should display phoneNumber label', () => {
		const fullNameLabel = wrapper.find('[data-testid="phoneNumber"]');

		expect(fullNameLabel.text()).toBe('Telefon kontaktowy');
	});

	it('should emit [submitForm] event on form submit', async () => {
		await wrapper.find('form').trigger('submit');

		expect(wrapper.emitted().submitForm).toBeTruthy();
		expect(wrapper.emitted().submitForm).toHaveLength(1);
		expect(wrapper.emitted().submitForm![0]).toEqual([]);
	});

	it('should emit [cancel] event on cancel button click', () => {
		wrapper.find('[data-testid="button-cancel"]').vm.$emit('click');

		expect(wrapper.emitted().cancel).toBeTruthy();
		expect(wrapper.emitted().cancel).toHaveLength(1);
		expect(wrapper.emitted().cancel![0]).toEqual([]);
	});

	it('should emit [setFullName] event on fullName input change', () => {
		wrapper.find('[data-testid="fullName"]').vm.$emit('input', { target: { value: 'Jan'} });

		expect(wrapper.emitted().setFullName).toBeTruthy();
		expect(wrapper.emitted().setFullName).toHaveLength(1);
		expect(wrapper.emitted().setFullName![0]).toEqual(['Jan']);
	});

	it('should emit [setEmail] event on email input change', () => {
		wrapper.find('[data-testid="email"]').vm.$emit('input', { target: { value: 'kowalski@wp.pl'} });

		expect(wrapper.emitted().setEmail).toBeTruthy();
		expect(wrapper.emitted().setEmail).toHaveLength(1);
		expect(wrapper.emitted().setEmail![0]).toEqual(['kowalski@wp.pl']);
	});

	it('should emit [setPhoneNumber] event on phoneNumber input change', () => {
		wrapper.find('[data-testid="phoneNumber"]').vm.$emit('input', { target: { value: '+48533533533'} });

		expect(wrapper.emitted().setPhoneNumber).toBeTruthy();
		expect(wrapper.emitted().setPhoneNumber).toHaveLength(1);
		expect(wrapper.emitted().setPhoneNumber![0]).toEqual(['+48533533533']);
	});
});

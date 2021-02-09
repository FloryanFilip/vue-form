import AppInputComponent from '@/core/components/app-input/app-input.component.vue';
import { mount, Wrapper } from '@vue/test-utils';

describe('AppInputComponent', () => {
	let wrapper!: Wrapper<AppInputComponent>;
	const factory = (slots?: any): Wrapper<AppInputComponent> => {
		return mount(AppInputComponent, {
			slots: {
				...slots,
			},
		});
	};

	beforeEach(() => wrapper = factory());
	afterEach(() => wrapper.destroy());

	it('should not render any label by default', () => {
		const label = wrapper.find('[data-testid="label"]');

		expect(label.text()).toBe('');
	});

	it('should render provided label slot', () => {
		wrapper = factory({ default: '<div>Custom label</div>'});

		const label = wrapper.find('[data-testid="label"]');

		expect(label.text()).toBe('Custom label');
	});
});

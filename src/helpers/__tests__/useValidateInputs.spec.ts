import useValidateInputs from '@/helpers/useValidateInputs';

describe('UseValidateInputs', () => {
	const { minLengthValid, maxLengthValid, patternValid } = useValidateInputs();

	it('should fail for [2] minLength and [a] value', () => {
		const result = minLengthValid('a', 2);

		expect(result).toBe(false);
	});

	it('should pass for [2] minLength and [ab] value', () => {
		const result = minLengthValid('ab', 2);

		expect(result).toBe(true);
	});

	it('should pass for [2] minLength and [abc] value', () => {
		const result = minLengthValid('abc', 2);

		expect(result).toBe(true);
	});

	it('should fail for [5] maxLength and [abcdef] value', () => {
		const result = maxLengthValid('abcdef', 5);

		expect(result).toBe(false);
	});

	it('should pass for [5] maxLength and [abcde] value', () => {
		const result = maxLengthValid('abcde', 5);

		expect(result).toBe(true);
	});

	it('should pass for [5] maxLength and [abcd] value', () => {
		const result = maxLengthValid('abcd', 5);

		expect(result).toBe(true);
	});

	it('should fail for provided email regex pattern and value', () => {
		const regexp = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/, 'i');

		const result = patternValid('toemail@pl', regexp);

		expect(result).toBe(false);
	});

	it('should pass for provided email regex pattern and value', () => {
		const regexp = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/, 'i');

		const result = patternValid('toemail@wp.pl', regexp);

		expect(result).toBe(true);
	});

	it('should fail for provided phone number regex pattern and value', () => {
		const regexp = new RegExp(/^\+?[1-9]\d{5,14}$/);

		const result = patternValid('+48', regexp);

		expect(result).toBe(false);
	});

	it('should pass for provided phone number regex pattern and value', () => {
		const regexp = new RegExp(/^\+?[1-9]\d{5,14}$/);

		const result = patternValid('+48533533533', regexp);

		expect(result).toBe(true);
	});
});

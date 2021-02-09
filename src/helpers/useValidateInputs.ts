export default function useValidateInputs(): any {
	const minLengthValid = (value: string, minLength: number): boolean => {
		return value.length >= minLength;
	};

	const maxLengthValid = (value: string, maxLength: number): boolean => {
		return value.length <= maxLength;
	};

	const patternValid = (value: string, pattern: RegExp): boolean => {
		return pattern.test(value);
	};

	return {
		minLengthValid,
		maxLengthValid,
		patternValid,
	};
}

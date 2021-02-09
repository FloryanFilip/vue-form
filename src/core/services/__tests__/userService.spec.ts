import UserService from '@/core/services/userService';

describe('UserService', () => {
	const userService = new UserService();

	it('should make a post request to users endpoint', async () => {
		const result = await userService.createUser('Filip', 'floryan@gmail.com', '+488533533533');

		expect(result.data).toEqual({
			person: {
				email: 'floryan@gmail.com',
				fullName: 'Filip',
				id: 1,
				phoneNumber: '+48533533533',
			},
		});
	});
});

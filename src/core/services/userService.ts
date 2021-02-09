import axios, { AxiosResponse } from 'axios';

const USERS_ENDPOINT = 'api/v1/users';

export default class UserService {
	createUser(fullName: string, email: string, phoneNumber: string): Promise<AxiosResponse> {
		return axios.post(`${ USERS_ENDPOINT }`, {
			fullName,
			email,
			phoneNumber,
		});
	}
}

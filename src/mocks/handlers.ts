import { ResponseComposition, rest, RestContext } from 'msw';
import { MockedRequest } from 'msw/lib/types/utils/handlers/requestHandler';

export const handlers = [
	rest.post('/api/v1/users', ((req: MockedRequest, res: ResponseComposition, ctx: RestContext) => {
		return res(
			ctx.delay(2000),
			ctx.status(200),
			ctx.json({
				person: {
					id: 1,
					fullName: 'Filip',
					email: 'floryan@gmail.com',
					phoneNumber: '+48533533533',
				},
			}),
		);
	})),
];

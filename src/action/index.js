export const getRandomUser = {
	request: count => {
		return {
			type: 'GET_RANDOM_USER.REQUEST',
			payload: {
				count
			}
		};
	},
	success: (randomUser, count) => {
		return {
			type: 'GET_RANDOM_USER.SUCCESS',
			payload: {
				randomUser,
				count
			}
		};
	},
	failure: error => {
		return {
			type: 'GET_RANDOM_USER.FAILURE',
			payload: {
				error
			}
		};
	}
};

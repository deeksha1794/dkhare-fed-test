export const getRandomUser = {
    request: () => {
        return {
            type: "GET_RANDOM_USER.REQUEST",
            payload: {},
        };
    },
    success: (randomUser) => {
        return {
            type: "GET_RANDOM_USER.SUCCESS",
            payload: {
                randomUser,
            },
        };
    },
    failure: (error) => {
        return {
            type: "GET_RANDOM_USER.FAILURE",
            payload: {
                error,
            },
        };
    },
};

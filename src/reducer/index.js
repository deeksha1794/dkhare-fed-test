import { combineReducers } from 'redux';

const randomUserState = (state = {}, action) => {
	switch (action.type) {
		case 'GET_RANDOM_USER.REQUEST':
			return { ...state, inProgress: true };
		case 'GET_RANDOM_USER.SUCCESS':
			return { ...state, ...action.payload, inProgress: false, error: undefined };
		case 'GET_RANDOM_USER.FAILURE':
			return { ...state, ...action.payload, inProgress: false };
		default:
			return state;
	}
};
export default combineReducers({
	randomUserState
});

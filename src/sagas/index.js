import { put, all, fork, takeLatest } from 'redux-saga/effects';
import { getRandomUser } from '../action';

export function* fetchRandomUser(action) {
	try {
		const serviceUrl = encodeURI(`https://randomuser.me/api/?results=${action.payload.count}`);
		const json = yield fetch(serviceUrl).then(response => response.json());

		yield put(getRandomUser.success(json, action.payload.count));
	} catch (err) {
		yield put(getRandomUser.failure(err));
	}
}

function* actionWatcher() {
	yield takeLatest('GET_RANDOM_USER.REQUEST', fetchRandomUser);
}
export default function* rootSaga() {
	yield all([fork(actionWatcher)]);
}

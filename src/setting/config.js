import { PAGE, ACTION } from './constant';

export const initialState = {
	page: PAGE.landing,
};

export const reducer = (state, action) => {
	switch (action.type) {
		case ACTION.page:
			return { ...state, ...action.state };

		default:
			return state;
	}
};

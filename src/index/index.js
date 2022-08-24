import { useEffect, useMemo, useReducer } from 'react';
import { initialState, reducer } from '../setting/config';
import { ACTION, PAGE } from '../setting/constant';
import { Context } from './context';
import './index.less';
import Demo from './demo';

const Index = () => {
	const [state, setState] = useReducer(reducer, initialState);
	const value = useMemo(() => [state, setState], [state]);

	useEffect(() => {
		setState({ type: ACTION.page, state: { ...state, page: PAGE.home } });
	}, []);

	return (
		<div className='Index'>
			<Context.Provider {...{ value }}>
				<div className='absolute w-full h-full'>
					<Demo />
				</div>
			</Context.Provider>
		</div>
	);
};
export default Index;

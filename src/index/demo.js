import { useEffect, useContext } from 'react';
import { Context } from './context';

const Demo = () => {
	const context = useContext(Context);

	useEffect(() => {
		const [state] = context;
		console.log(state);
	}, [context]);

	return <div />;
};
export default Demo;

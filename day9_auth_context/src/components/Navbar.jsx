import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
	const { isAuth, toggleAuth } = useContext(AuthContext);
	return (
		<nav
			style={{
				margin: 'auto',
				height: '50px',
				padding: '1rem',
				display: 'flex',
				alignItems: 'center',
				background:'yellogreen',
				
			}}
		>
			{isAuth ? 
				<button
					onClick={() => {
						toggleAuth();
					}}
				>
					logout
				</button>
			 : 
				<button >login</button>
			}
		</nav>
	);
};

export default Navbar;
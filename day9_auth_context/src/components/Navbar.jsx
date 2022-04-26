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
				background:'yellowgreen',
				
			}}
		>
			{isAuth ? 
				<button style={{background:'red'}}
					onClick={() => {
						toggleAuth();
					}}
				>
					logout
				</button>
			 : 
				<button style={{background:'white'}}>login</button>
			}
		</nav>
	);
};

export default Navbar;

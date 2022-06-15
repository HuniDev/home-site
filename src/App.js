import { Link, Outlet } from 'react-router-dom';

import './App.css';

function App() {
	return (
		<>
			<div className='App'>
				<h1>Welcome to React Router</h1>
			</div>
			<nav>
				<Link to='/about'>About</Link>
				<Link to='/listings'>Listings</Link>
			</nav>
			<Outlet />
		</>
	);
}

export default App;

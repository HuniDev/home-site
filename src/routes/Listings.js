import { Outlet } from 'react-router-dom';

function Listings() {
	return (
		<div>
			<main>
				<h2>Who are we?</h2>
				<p>That feels like an existential question, don't you think?</p>
			</main>
			<nav>
				<Outlet />
			</nav>
		</div>
	);
}

export default Listings;

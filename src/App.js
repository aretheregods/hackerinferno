import { Link, IndexLink } from 'inferno-router';

export function App({ children }) {

	return (
		<div id="tabs-layout-container">
			<nav id="tabs-container">
				<IndexLink className="tab" activeClassName="active">
					<svg
						version="1.0"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 320 320"
						width="2em"
						height="2em"
						preserveAspectRatio="xMidYMid meet"
					>
						<g fill="#494949" stroke="none">
							<path id="fire"
								fill="#ff3232"
								d="m144.9 258.5c-43.4-6.1-78.3-46.3-79.2-90-0.7-25.3 8.3-51.7 27-69.1-2 10-8.4 22.4-6.5 34.1 0 14.4 13.7 28.5 28.5 24.6 13.3-3.2 18.3-18.8 14.7-30.8-3.6-16.3-12.1-31.8-9.6-49 2.4-32.4 26.9-58 53.9-73.3 5.5-4 3.6-0.7 1.1 3.2-9.2 14.9-10.5 34-2.6 49.7 11.5 27 34 50.4 35.3 81 0.3 6.3-1.9 22.4 7.3 12 14.6-13.6 13.5-36.2 6.9-53.5-1.8-9.7 9.9 6.6 12.8 9.4 25.3 31.7 26.7 79.9 2.7 112.8-20.1 29.2-57.2 44.9-92.1 38.9z"
							/>
							<path id="circle"
								fill="#555"
								d="M139.3 315.4C82.4 307.7 34.8 268.1 16.4 213.1 10.7 196 9.1 185.5 9 165.5c0-12.5 0.4-19.6 1.8-27 11-59.3 54.6-106 112.4-120.6 6.3-1.6 12-2.9 12.8-2.9 2.5 0 1.5 2.1-3.5 7.6-10.7 11.7-19.3 27.7-22.8 42.3l-1.7 7.4-7 4.8C77.3 93 61.3 117.3 56 145.1c-1.9 9.8-2.1 29-0.5 38.1 7.9 43.8 41.7 78.1 85 86.3 16.8 3.2 38.6 1.5 54.3-4.1 31.8-11.4 56-36.3 66-67.9 3.7-11.8 4.8-19.2 4.8-32.3 0-24.5-7-45.2-21.8-64.9-12.9-17.1-28.6-27.9-54.5-37.5-3.3-1.2-7.3-9.7-9.4-19.8-1.6-7.8-0.9-15.2 2.1-22.7 1.5-3.7 2.1-4.2 4.8-4.2 4.9 0 20.8 4.6 31.5 9 45.6 19 79.3 59.9 89.9 109 3.3 15.1 3.7 43.1 0.9 58-14.9 80.2-89.5 134.4-169.9 123.5z"
							/>
						</g>
					</svg>&nbsp;<h3>Top</h3>
				</IndexLink>
				<Link to="/newest/1" className="tab" activeClassName="active"><h3>New</h3></Link>
				<Link to="/show/1" className="tab" activeClassName="active"><h3>Show</h3></Link>
				<Link to="/ask/1" className="tab" activeClassName="active"><h3>Ask</h3></Link>
				<Link to="/jobs/1" className="tab" activeClassName="active"><h3>Jobs</h3></Link>
			</nav>
			<div id="data-container">{children}</div>
		</div>
	)

}

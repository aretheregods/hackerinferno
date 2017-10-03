import { Route, IndexRoute } from 'inferno-router';
import {App} from './App';
import {
	Top,
	Newest,
	Show,
	Ask,
	Jobs,
	User,
	Item
} from './components/rendering/Views/Index';
import { Error } from './components/rendering/Error';

// Simplest Route Configuration.
// Inferno makes it seemingly impossible
// To have virtually all functional components
// & highlighted tabs on dynamic routing
export const routes = (
	<Route component={App}>
        <IndexRoute component={Top} onEnter={() => window.scrollTo(0, 0)}></IndexRoute>
		<Route path="/:page" component={Top} onEnter={() => window.scrollTo(0, 0)}></Route>
		<Route path="/newest/:page" component={Newest} onEnter={() => window.scrollTo(0, 0)}></Route>
		<Route path="/show/:page" component={Show} onEnter={() => window.scrollTo(0, 0)}></Route>
		<Route path="/jobs/:page" component={Jobs} onEnter={() => window.scrollTo(0, 0)}></Route>
		<Route path="/ask/:page" component={Ask} onEnter={() => window.scrollTo(0, 0)}></Route>
		<Route path="/user/:page" component={User}></Route>
		<Route path="/item/:page" component={Item} onEnter={() => window.scrollTo(0, 0)}></Route>
		<Route path="*" component={Error}></Route>
	</Route>
)

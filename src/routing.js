import { Route, IndexRoute } from 'inferno-router';
import {App} from './App';
import {
	Top,
	Newest,
	Show,
	Ask,
	Jobs,
} from './components/rendering/Views/Index';
import { Error } from './components/rendering/Error';

// Load Code to be split
const Comments_Hacker = (props, cb) => import('./components/rendering/Comments.js').then(component => cb(null, component.default))

const User_Hacker = (props, cb) => import('./components/rendering/User.js').then(component => cb(null, component.default))

// Simplest Route Configuration.
// Inferno makes it seemingly impossible
// To have highlighted tabs on dynamic routing
export const routes = (
	<Route component={App}>
        <IndexRoute component={Top} onEnter={() => window.scrollTo(0, 0)}></IndexRoute>
		<Route path="/:page" component={Top} onEnter={() => window.scrollTo(0, 0)}></Route>
		<Route path="/newest/:page" component={Newest} onEnter={() => window.scrollTo(0, 0)}></Route>
		<Route path="/show/:page" component={Show} onEnter={() => window.scrollTo(0, 0)}></Route>
		<Route path="/jobs/:page" component={Jobs} onEnter={() => window.scrollTo(0, 0)}></Route>
		<Route path="/ask/:page" component={Ask} onEnter={() => window.scrollTo(0, 0)}></Route>
		<Route path="/user/:page" getComponent={User_Hacker}></Route>
		<Route path="/item/:page" getComponent={Comments_Hacker} onEnter={() => window.scrollTo(0, 0)}></Route>
		<Route path="*" component={Error}></Route>
	</Route>
)

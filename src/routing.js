import { Route, IndexRoute } from 'inferno-router';
import {App} from './App';
import {
	News_Hacker,
	Newest_Hacker,
	Show_Hacker,
	Ask_Hacker,
	Jobs_Hacker
} from './components/rendering/Lists';
import { User_Hacker } from './components/rendering/User';
import { Comments_Hacker } from './components/rendering/Comments';
import { Error } from './components/rendering/Error';

// Simplest Route Configuration.
// Inferno makes it seemingly impossible
// To have virtually all functional components
// & highlighted tabs on dynamic routing
export const routes = (
	<Route component={App}>
        <IndexRoute component={News_Hacker} onEnter={() => window.scrollTo(0, 0)}></IndexRoute>
		<Route path="/:page" component={News_Hacker} onEnter={() => window.scrollTo(0, 0)}></Route>
		<Route path="/newest/:page" component={Newest_Hacker} onEnter={() => window.scrollTo(0, 0)}></Route>
		<Route path="/show/:page" component={Show_Hacker} onEnter={() => window.scrollTo(0, 0)}></Route>
		<Route path="/jobs/:page" component={Jobs_Hacker} onEnter={() => window.scrollTo(0, 0)}></Route>
		<Route path="/ask/:page" component={Ask_Hacker} onEnter={() => window.scrollTo(0, 0)}></Route>
		<Route path="/user/:page" component={User_Hacker}></Route>
		<Route path="/item/:page" component={Comments_Hacker} onEnter={() => window.scrollTo(0, 0)}></Route>
		<Route path="*" component={Error}></Route>
	</Route>
)

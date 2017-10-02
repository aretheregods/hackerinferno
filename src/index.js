import { render } from 'inferno';
import { Router } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { routes } from './routing';

render(<Router history={createBrowserHistory()}>{routes}</Router>, document.getElementById('app'));

import { render } from 'inferno';
// import { icv } from './components/constants/Constants';
import { Router } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { routes } from './Routing';
// import App from './App';
// import './index.css';

render(<Router history={createBrowserHistory()}>{routes}</Router>, document.getElementById('app'));

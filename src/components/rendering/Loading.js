import { icv } from '../constants/Constants';
import { logo } from '../../logo.js';

export function HackerLoading() {
	return icv(2, 'div', null,
        icv(8, logo, null, null, {style: "text-align: center", width: 320, height: 320, repeat: "indefinite"}),
        {style: "display: flex; height: 100vh; width: 100vw; justify-content: center; align-items: center"}
	)
}

import { icv, he } from '../constants/Constants';

export function Error() {
    return icv(he, 'div', null, [
        icv(he, 'h3', null, "Something Went Wrong..."),
        icv(he, 'h3', null, "We Couldn't Find That Data."),
        icv(he, 'h3', null, "Maybe Try Again.")
    ], {id: 'error-container'}
    );
}
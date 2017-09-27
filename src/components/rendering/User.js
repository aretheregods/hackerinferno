import { icv, he, DC } from '../constants/Constants';
import { hn_api_pages } from '../constants/API';
import './User.css'

function Hacker_User(props) {

    const data = props.component_data;
    const hacker_submitted = 'https://news.ycombinator.com/submitted?id=';
    const hacker_commented = 'https://news.ycombinator.com/threads?id=';
    const hacker_favourites = 'https://news.ycombinator.com/favorites?id='

    const user_data = icv(he, 'div', null, [
        icv(he, 'h3', null, data.id, {id: 'user-id'}),
        icv(he, 'div', null, [
            icv(he, 'div', null, null, {dangerouslySetInnerHTML: {__html: data.about}, id: 'about-container'}),
            icv(he, 'div', null, [
                icv(he, 'p', null, `joined: ${data.created} | karma: ${data.karma}`)
            ], {id: 'user-data-container'}),
            icv(he, 'div', null, [
                icv(he, 'a', null, 'submitted | ', {id: 'hacker-submitted', href: `${hacker_submitted}${data.id}`}),
                icv(he, 'a', null, 'commented | ', {id: 'hacker-commented', href: `${hacker_commented}${data.id}`}),
                icv(he, 'a', null, 'favourites', {id: 'hacker-favourites', href: `${hacker_favourites}${data.id}`})
            ], {id: 'hacker-links'})
        ], {id: 'user-info'})
    ], {id: 'user-container'})

    return user_data;

}

export const User_Hacker = DC(Hacker_User)(hn_api_pages)('user');

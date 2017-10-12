import { DataContainer } from '../data/Data-Container';
import { hn_api_pages } from '../constants/API';

function HackerUser(props) {

    const data = props.component_data;
    const hacker_submitted = 'https://news.ycombinator.com/submitted?id=';
    const hacker_commented = 'https://news.ycombinator.com/threads?id=';
    const hacker_favourites = 'https://news.ycombinator.com/favorites?id='


    const user_data = (
        <div id="user-container">
            <h3 id="user-id">{data.id}</h3>
            <div id="user-info">
                <div id="about-container" dangerouslySetInnerHTML={{__html: data.about}}></div>
                <div id="user-data-container">
                    <p>joined: {data.created} | karma: {data.karma}</p>
                </div>
                <div id="hacker-links">
                    <a id="hacker-submitted" href={`${hacker_submitted}${data.id}`}>submitted | </a>
                    <a id="hacker-commented" href={`${hacker_commented}${data.id}`}>commented | </a>
                    <a id="hacker-favourites" href={`${hacker_favourites}${data.id}`}>favourites</a>
                </div>
            </div>
        </div>
    )

    return user_data;

}

export default function User({params}) {

    return (
        <DataContainer urlobj={hn_api_pages} endpoint="user" page={params.page}>
            {({component_data}) => <HackerUser component_data={component_data}/>}
        </DataContainer>
    )
}

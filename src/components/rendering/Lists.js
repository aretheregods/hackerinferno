import { DC } from '../constants/Constants';
import { hn_api_pages } from '../constants/API';
import { Link } from 'inferno-router';

// The Pure Functional Component Format that all main list pages follow
function Hacker_List(props) {

    // Data received from props
    const data = props.component_data
    const page_endpoint = props.component
    const page_number = props.page ? ~~props.page : 1
    const more_pages = data.length === 30; // Whether to show forward pagination arrow
    const forward_path = !page_number ? 2 : page_number + 1;
    const endpoint_path = page_endpoint !==  'news' ? page_endpoint + '/' : '';


    // Basiic List Item Template
    const list_items = data.map(function(item, index) {
        return (
            <li key={item.id} className="list-item">
                <div className="item-number">{(index + 1) + ((page_number - 1) * 30)}</div>
                <div className="detail-box">
                    {item.type === 'ask' || item.type === 'show' ?
                    <Link to={'/item/' + item.id} className="detail-child story-link"> {item.title} </Link> :
                    <a href={item.url} className="detail-child story-link"> {item.title} </a>
                    }
                    {item.user &&
                        <Link to={'/user/' + item.user} className="detail-child user-link">by <span className="user-id">{item.user}</span></Link>
                    }
                    <p className="detail-child detail-box-bottom">
                    {item.points || "0"}
                    <span className="score-star">{String.fromCharCode(9734)}&nbsp;</span>
                    {item.time_ago}&nbsp;
                    <Link to={'/item/'  + item.id} className="bottom-child item-comments"> {!item.comments_count ?
                        <span className="item-comments-span">Discuss</span> :
                        <span className="item-comments-span">{item.comments_count} comments</span>
                    }</Link>
                    </p>
                </div>
            </li>
        )
    });

    //  The List of paginated Stories
    return (
        <ul id="hacker-list">
            <div id="items">{list_items}</div>
            <div id="pager">
                <h4>
                    <span id="pager-span">
                        {more_pages &&
                            <a href={`/${endpoint_path}${forward_path}`}>More {String.fromCharCode(8594)}</a>
                        }
                    </span>
                </h4>
            </div>
        </ul>
    )
}

// Partially Apply DataContainer Function with Hacker_List component
// Then apply the url object to be used to fetch endpoint urls
const Basic_List = DC(Hacker_List)(hn_api_pages);

// Call DataContainer with its final parameter, the endpoint
// That pertains to each specific component

const News_Hacker = Basic_List('news')
const Newest_Hacker = Basic_List('newest')
const Show_Hacker = Basic_List('show')
const Ask_Hacker = Basic_List('ask')
const Jobs_Hacker = Basic_List('jobs')


export {
    News_Hacker,
    Newest_Hacker,
    Show_Hacker,
    Ask_Hacker,
    Jobs_Hacker
}

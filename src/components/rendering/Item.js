import { Link } from 'inferno-router';

export function Item(props) {

    const item = props.item


    return (
        <div key={item.id} className="list-item">
            <div className="item-number">{(props.index + 1) + ((props.page_number - 1) * 30)}</div>
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
        </div>
    )
    
}

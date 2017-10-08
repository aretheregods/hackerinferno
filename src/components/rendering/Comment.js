export function Comment(props) {
    
    const obj = props.obj
    const more_comments = props.nested_comments

    return (
        <div>
            <div className="comment">
                <div className="comment-details">
                    <a href={`/user/${obj["user"]}`}>
                        <p>{obj["user"]}</p>
                    </a>
                    <p className="comment-detaiil-child">&nbsp;{obj["time_ago"]}</p>
                </div>
                <div className="the-comment" dangerouslySetInnerHTML={{__html:obj["content"]}}></div>
            </div>
            {more_comments(obj)}
        </div>
    )
}

export function Story(props) {

    const data = props.story


    return (
        <div id="story-info">
            <a id="story-url" href={data.url}>{data.title}</a>
            <div>
                <p>{data.user && `by ${data.user} ${data.time_ago} | ${data.points || "0"} ${String.fromCharCode(9734)}`}</p>
            </div>
        </div>
    )
}

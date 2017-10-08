import { Comment } from './Comment';
import { Story } from './Story';

export function make_comments_list(hacker_obj) {

    // Get the values of the data object
    const j = Object.values(hacker_obj).map(function find_comments(i, k) {

        // What will be returned inside each list
        var response = [];

        // Check each data object to see if it's an array with stuff inside
        // If it is, it's the one we want
        if(typeof i === 'object' && i !== []) {
            for(let obj of i) {
                response.push(<Comment obj={obj} nested_comments={make_comments_list}/>)
            }
        }

        // The margin of each comment sub-list is
        // The amount of the index of that sub-array plus 2 in pixels
        return <div className="comments-list" style={{"margin-left":`${k + 2}px`}}>{response}</div>

    })

    return j;

};

export function HackerComments(props) {

    const data = props.component_data;
    const comments_state = data.comments_count


    const story_data = (
        <div id="comments-container">
            <Story story={data}/>
            <div id="comments-list">
                <div>
                    <hr id="comments-hr"/>
                    <h4>{data.comments ? comments_state : "Loading..."} Comments</h4>
                </div>
                {make_comments_list(data)}
            </div>
        </div>
    )

    return story_data;

}

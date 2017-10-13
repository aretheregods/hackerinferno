import { Comment } from './Comment';
import { Story } from './Story';
import { DataContainer } from '../data/Data-Container';
import { hn_api_pages } from '../constants/API';

export function make_comments_list(hacker_obj) {

    // Get the values of the data object
    const j = Object.values(hacker_obj).map(function find_comments(i, k) {

        // What will be returned inside each list
        let response = [];
        let elements_to_render;
        let chosen_one = typeof i === 'object' && i !== [];

        // Check each data object to see if it's an array with stuff inside
        // If it is, it's the one we want
        if(chosen_one) {
            for(let obj of i) {
                response.push(<Comment obj={obj} nested_comments={make_comments_list}/>)
            }
            elements_to_render = <div className="comments-list" style={{ "margin-left": `${k + 2}px` }}>{response}</div>;
        } else { elements_to_render = '' }

        // The margin of each comment sub-list is
        // The amount of the index of that sub-array plus 2 in pixels
        return elements_to_render;

    })

    return j;

};

function HackerComments(props) {

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

export default function Comments({params}) {

    return (
        <DataContainer urlobj={hn_api_pages} endpoint="item" page={params.page}>
            {({component_data}) => <HackerComments component_data={component_data}/>}
        </DataContainer>
    )
}

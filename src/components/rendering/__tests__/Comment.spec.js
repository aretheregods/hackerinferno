import { render } from 'inferno';
import { renderToSnapshot } from 'inferno-test-utils';
import { Comment } from '../Comment';
import { make_comments_list } from '../Comments.js';
import { Story } from '../Story';
import { HackerComments } from '../Comments';

const comment = {
    id: 1,
    user: "me",
    time_ago: "2 hours ago",
    points: 5,
    comments_count: 3,
    comments: [
        {
            user: "a",
            time_ago: "1 hour ago",
            content: "<p>A</p>",
            comments_count: 2,
            comments: [
                {
                    id: 2,
                    user: "b",
                    time_ago: "45 minutes ago",
                    content: "<p>B</p>",
                    comments_count: 0,
                    comments: []
                },
                {
                    id: 3,
                    user: "c",
                    time_ago: "30 minutes ago",
                    content: "<p>C</p>",
                    comments_count: 0,
                    comments: []
                }
            ]
        }
    ]
}

it('should render the top level comment and indent the nested comments', () => {
    const snapshot = renderToSnapshot(<Comment obj={comment} nested_comments={make_comments_list}/>);
    expect(snapshot).toMatchSnapshot();
})

it('should render the Story info and the list of associated comments', () => {
    const snapshot = renderToSnapshot(<HackerComments component_data={comment}/>);
    expect(snapshot).toMatchSnapshot();
})

it('should return an array of comments with a subarray of subcomments', () => {
    const snapshot = renderToSnapshot(<HackerComments component_data={comment}/>);
    expect(snapshot).toMatchSnapshot()
})


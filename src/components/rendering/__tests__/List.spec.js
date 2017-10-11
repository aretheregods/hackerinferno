import { render } from 'inferno';
import { renderToSnapshot } from 'inferno-test-utils';
import { HackerList, Pager } from '../List.js';
import { Item } from '../Item';

const some_items = [{
    id: 1,
    user: "a",
    title: "something",
    url: "https://whateverblah.com/123456",
    points: 1000,
    time_ago: "8 hours ago",
    comments_count: 200,
    type: "news"
},{
    id: 2,
    user: "b",
    title: "somethingelse",
    url: "https://whateverfuck.com/654321",
    points: 500,
    time_ago: "4 hours ago",
    comments_count: 100,
    type: "ask",
},{
    id: 3,
    user: "c",
    title: "somethingelseagain",
    url: "https://whateverblahfuck.com/1234567",
    points: 250,
    time_ago: "2 hours ago",
    comments_count: 50,
    type: "news"
}];

it('should render info about 3 stories in a div with a greyed out pager', () => {
    const snapshot = renderToSnapshot(<HackerList component_data={some_items} component="news" page={1}/>);
    expect(snapshot).toMatchSnapshot();
})

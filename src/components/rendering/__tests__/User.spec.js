import { render } from 'inferno';
import { renderToSnapshot } from 'inferno-test-utils';
import { HackerUser } from '../User';

const data = {
    id: "something_whatever",
    about: "<p>It doesn't matter.</p>",
    created: "2 years ago",
    karma: 98302
};

it('should render "div" tag with information supplied by an object with user data', () => {
    const snapshot = renderToSnapshot(
        <HackerUser component_data={data} />
    )
    expect(snapshot).toMatchSnapshot();
})

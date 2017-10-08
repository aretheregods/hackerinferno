import { render } from 'inferno';
import { renderToSnapshot } from 'inferno-test-utils';
import { Pager } from '../List.js';


it('should render More as active and Back as inactive anchor tags when there are 30 items on page 1', () => {
    const snapshot = renderToSnapshot(
        <Pager list="news/" page={1} length={30} max_length={30}></Pager>
    )

    expect(snapshot).toMatchSnapshot();

})

it('should render both Back and More as active when there are 30 items on page 2', () => {
    const snapshot = renderToSnapshot(
        <Pager list="news/" page={2} length={30} max_length={30}></Pager>
    )

    expect(snapshot).toMatchSnapshot();

})

it('should render both Back and More as inactive anchor tags when there are fewer than 30 items on page 1', () => {
    const snapshot = renderToSnapshot(
        <Pager list="news/" page={1} length={17} max_length={30}></Pager>
    )

    expect(snapshot).toMatchSnapshot();

})

it('should render Back as active and More as inactive anchor tags when there are fewer than 30 items on page 2', () => {
    const snapshot = renderToSnapshot(
        <Pager list="news/" page={2} length={17} max_length={30}></Pager>
    )

    expect(snapshot).toMatchSnapshot()
})

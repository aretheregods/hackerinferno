import { Link } from 'inferno-router';
import { Item } from './Item'

function Pager(props) {
    const endpoint_path = props.list;
    const page_number = props.page;
    const more_pages = props.more;
    const forward_path = !page_number ? 2 : page_number + 1;
    return (
        <span id="pager-span" style={{display:"flex","justify-content":"space-around"}}>
            {page_number > 1 ?
                <Link to={`/${endpoint_path}${page_number - 1}`}> {String.fromCharCode(8592)}Back</Link> :
                <a href={`/${endpoint_path}${page_number}`} style={{"pointer-events":"none",cursor:"default",color:"#D3D3D3"}}>{String.fromCharCode(8592)}Back</a>
            }
            {page_number}
            {more_pages ?
                <Link to={`/${endpoint_path}${forward_path}`}>More {String.fromCharCode(8594)}</Link> :
                <a href={`/${endpoint_path}${page_number}`} style={{"pointer-events":"none",cursor:"default",color:"#D3D3D3"}}>More {String.fromCharCode(8594)}</a>
            }
        </span>
    )
}

// The Pure Functional Component Format that all main list pages follow
export function HackerList(props) {

    // Data received from props
    const data = props.component_data
    const page_endpoint = props.component
    const page_number = props.page ? ~~props.page : 1;
    const endpoint_path = page_endpoint !==  'news' ? page_endpoint + '/' : '';


    // Basiic List Item Template
    const list_items = data.map(function(listobject, index) {
        return <Item item={listobject} index={index} page_number={page_number}/>
    });

    //  The List of paginated Stories
    return (
        <div id="hacker-list">
            <div id="items">{list_items}</div>
            <div id="pager">
                <h4>
                    <Pager list={endpoint_path} page={page_number} more={data.length === 30} />
                    {/* <span id="pager-span" style={{display:"flex","justify-content":"space-around"}}>
                        {page_number > 1 ?
                            <Link to={`/${endpoint_path}${page_number - 1}`}> {String.fromCharCode(8592)}Back</Link> :
                            <a href={`/${endpoint_path}${page_number}`} style={{"pointer-events":"none",cursor:"default",color:"#D3D3D3"}}>{String.fromCharCode(8592)}Back</a>
                        }
                        {page_number}
                        {more_pages ?
                            <Link to={`/${endpoint_path}${forward_path}`}>More {String.fromCharCode(8594)}</Link> :
                            <a href={`/${endpoint_path}${page_number}`} style={{"pointer-events":"none",cursor:"default",color:"#D3D3D3"}}>More {String.fromCharCode(8594)}</a>
                        }
                    </span> */}
                </h4>
            </div>
        </div>
    )
}

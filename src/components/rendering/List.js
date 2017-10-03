import { Item } from './Item'

// The Pure Functional Component Format that all main list pages follow
export function Hacker_List(props) {

    // Data received from props
    const data = props.component_data
    const page_endpoint = props.component
    const page_number = props.params.page ? ~~props.params.page : 1
    const more_pages = data.length === 30; // Whether to show forward pagination arrow
    const forward_path = !page_number ? 2 : page_number + 1;
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
                    <span id="pager-span" style={{display:"flex","justify-content":"space-around"}}>
                        {page_number > 1 ?
                            <a href={`/${endpoint_path}${page_number - 1}`}> {String.fromCharCode(8592)}Back</a> :
                            <a href={`/${endpoint_path}${page_number}`} style={{"pointer-events":"none",cursor:"default",color:"#D3D3D3"}}>{String.fromCharCode(8592)}Back</a>
                        }
                        {page_number}
                        {more_pages ?
                            <a href={`/${endpoint_path}${forward_path}`}>More {String.fromCharCode(8594)}</a> :
                            <a href={`/${endpoint_path}${page_number}`} style={{"pointer-events":"none",cursor:"default",color:"#D3D3D3"}}>More {String.fromCharCode(8594)}</a>
                        }
                    </span>
                </h4>
            </div>
        </div>
    )
}

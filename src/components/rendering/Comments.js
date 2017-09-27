import { icv, he, DC } from '../constants/Constants';
import { hn_api_pages } from '../constants/API';
import './Comments.css';


function Hacker_Comments(props) {

    const data = props.component_data;
    const comments_state = data.comments_count

	function make_comments_list(hacker_obj) {

		// Get the values of the data object
		const j = Object.values(hacker_obj).map(function find_comments(i, k) {

			// What will be returned inside each list
			var response = [];

			// Check each data object to see if it's an array with stuff inside
			// If it is, it's the one we want
			if(typeof i === 'object' && i !== null) {

				// Recursively check each object in the array in the same fashion
				// And make list items out of the data
				for(let obj of i) {
					response.push(icv(he, 'div', null, [
						icv(he, 'div', 'comment', [
							icv(he, 'div', 'comment-details', [
								icv(he, 'a', 'comment-detail-child', icv(he, 'p', null, `${obj["user"]}`), {href: `/user/${obj["user"]}`}),
								icv(he, 'p', 'comment-detail-child',`${obj["time_ago"]}`)
							]),
							icv(he, 'div', 'the-comment', null, {dangerouslySetInnerHTML: {__html: obj["content"]}})
						]),
						make_comments_list(obj)])
					)
				}
			}

			return icv(he, 'div', 'comments-list', response, {style: `margin-left: ${k + 1}`})

		})

		return j;

	};

    const story_data = icv(he, 'div', null, [
            icv(he, 'div', null, [
            	icv(he, 'a', null, data.title, {href: data.url, id: "story-url"}),
            	icv(he, 'div', null, [
                    icv(he, 'p', null, [
                    	data.user && "by " + data.user + " ",
                    	data.time_ago + " | ",
                    	`${data.points || "0"} ${String.fromCharCode(9734)}`
                    ])
            	])
            ], {id: 'story-info'}),
            icv(he, 'div', null, [
            	    icv(he, 'div', null, [
            	    	icv(he, 'hr', null, null, {id: 'comments-hr'}),
            	    	icv(he, 'h4', null, `${data.comments ? comments_state : "Loading..."} Comments`)
            	    ]),
            	    make_comments_list(data)
            	], {id: 'comments-list'}
            )
        ], {id: 'comments-container'}
    )

    return story_data;

}

export const Comments_Hacker = DC(Hacker_Comments)(hn_api_pages)('item');

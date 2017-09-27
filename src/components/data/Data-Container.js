import Component from 'inferno-component';
import { icv } from '../constants/Constants';
import { HackerLoading } from '../rendering/Loading';


// Fetch is hot garbage in some browsers,
// Therefore, this tiny xhr based polyfill
window.fetch = function(url) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onerror = reject;
        xhr.onload = function() {
            return resolve({
                json: function() {
                    return Promise.resolve(xhr.responseText).then(JSON.parse);
                }
            })
        }
        xhr.open('get', url);
        xhr.send();
    })
}

// Just handle all of the data in one HOC state container because "Why not?".
function DataContainer(type) {
    return function(urlobj) {
        return function(endpoint) {
            return class extends Component {
                constructor(props) {
                    super(props)
                    this.state = {
                        component_data: [],
                        component: 'news',
                        page: 1,
                        loadingComponent: true
                    }
                }

                componentDidMount() {
                    const data_url = urlobj[endpoint](this.props.params.page);
                    fetch(data_url)
                    .then(data => data.json())
                    .then(data => {
                        this.setState({
                            component_data: data,
                            component: endpoint,
                            page: this.props.params.page,
                            loadingComponent: false
                        });
                        console.log(data)
                    })
                }

                componentWillReceiveProps(nextProps) {
                    if(nextProps.params.page !== this.props.params.page){
                        const data_url = urlobj[endpoint](this.props.params.page);
                        fetch(data_url)
                        .then(data => {
                            data.json();
                        })
                        .then(data => {
                            this.setState({
                                component_data: data,
                                component: endpoint,
                                page: nextProps.params.page,
                                loadingComponent: false
                            });
                            console.log(data)
                        })
                    }
                }

                render({params}) {
                    return !this.state.loadingComponent ?
                        icv(16, type, null, null, { ...this.state, ...this.props }) :
                        icv(8, HackerLoading)
                }
            }
        }
    }
};

export { DataContainer }

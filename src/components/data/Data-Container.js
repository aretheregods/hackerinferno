import Component from 'inferno-component';
import { icv } from '../constants/Constants';
import { HackerLoading } from '../rendering/Loading';
import { Error } from '../rendering/Error';


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

// Just handle all of the data in one HOC because "Why not?".
function DataContainer(type) {
    return function(urlobj) {
        return function(endpoint) {
            return class extends Component {
                constructor(props) {
                    super(props)
                    this.state = {
                        component_data: [],
                        error_data: [],
                        component: 'news',
                        page: 1,
                        loadingComponent: true,
                        error: false
                    }
                }

                componentWillMount() {
                    const data_url = urlobj[endpoint](this.props.params.page);
                    fetch(data_url)
                    .then(data => data.json())
                    .catch(() => {
                        this.setState({
                            loadingComponent: false,
                            error: true
                        })
                    })
                    .then(data => {
                        this.setState({
                            component_data: data,
                            component: endpoint,
                            page: this.props.params.page || 1,
                            loadingComponent: false,
                            error: false
                        });
                    })
                    .catch(() => {
                        this.setState({
                            loadingComponent: false,
                            error: true
                        })
                    })
                }

                componentWillReceiveProps(nextProps) {
                    if(nextProps.params.page !== this.props.params.page){
                        const data_url = urlobj[endpoint](this.props.params.page);
                        fetch(data_url)
                        .then(data => data.json())
                        .catch(() => {
                            this.setState({
                                loadingComponent: false,
                                error: true
                            })
                        })
                        .then(data => {
                            this.setState({
                                component_data: data,
                                component: endpoint,
                                page: nextProps.params.page || 1,
                                loadingComponent: false,
                                error: false
                            });
                        })
                        .catch(() => {
                            this.setState({
                                loadingComponent: false,
                                error: true
                            })
                        })
                    }
                }

                render({ params }) {
                    var the_view;

                    
                    if(this.state.loadingComponent){
                        the_view = icv(8, HackerLoading)
                    } else if(this.state.error) {
                        the_view = icv(8, Error)
                    } else {
                        the_view = icv(8, type, null, null, {...this.state, ...this.props})
                    }

                    return the_view;
                    
                }
            }
        }
    }
};

export { DataContainer }

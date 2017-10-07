import Component from 'inferno-component';
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


// Just handle all of thte data in one "render props" component
// Because, why not?

class DataContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            component_data: [],
            component: "",
            page: 1,
            loadingComponent: true,
            error: false
        }
    }

    componentDidMount() {
        const data_url = this.props.urlobj[this.props.endpoint](this.props.page);
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
                component: this.props.endpoint,
                page: this.props.page,
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
        if(nextProps.page !== this.props.page){
            const data_url = nextProps.urlobj[nextProps.endpoint](nextProps.page);
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
                    component: nextProps.endpoint,
                    page: nextProps.page,
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

    render() {
        var the_view;

        if(this.state.loadingComponent){
            the_view = <HackerLoading/>
        } else if(this.state.error) {
            the_view = <Error/>
        } else {
            the_view = this.props.children({...this.props, ...this.state})
        }

        return the_view;
    }

}


export { DataContainer }

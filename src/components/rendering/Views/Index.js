import {DataContainer} from '../../data/Data-Container';
import { HackerList } from '../List';
import { hn_api_endpoints } from '../../constants/API';

const list_endpoints = ["news","newest","show","ask","jobs"];


const [ Top, Newest, Show, Ask, Jobs ] = list_endpoints.map(function(endpoint) {
    return function({params}) {

        return (
            <DataContainer urlobj={hn_api_endpoints} endpoint={endpoint} page={params.page}>
                {({component_data}) => <HackerList component_data={component_data} component={endpoint} page={params.page}/>}
            </DataContainer>
        )
    }
})


export {
    Top,
    Newest,
    Show,
    Ask,
    Jobs
}

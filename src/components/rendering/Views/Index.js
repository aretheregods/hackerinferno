// import Component from 'inferno-component';
import {DataContainer} from '../../data/Data-Container';
import { HackerList } from '../List';
import { HackerComments } from '../Comments';
import { HackerUser } from '../User';
import { hn_api_pages } from '../../constants/API';

const list_endpoints = ["news","newest","show","ask","jobs"];


const [ Top, Newest, Show, Ask, Jobs ] = list_endpoints.map(function(endpoint) {
    return function({params}) {

        return (
            <DataContainer urlobj={hn_api_pages} endpoint={endpoint} page={params.page}>
                {({component_data}) => <HackerList component_data={component_data} component={endpoint} page={params.page}/>}
            </DataContainer>
        )
    }
})

function User({params}) {

    return (
        <DataContainer urlobj={hn_api_pages} endpoint="user" page={params.page}>
            {({component_data}) => <HackerUser component_data={component_data}/>}
        </DataContainer>
    )
}

function Comments({params}) {
    
    return (
        <DataContainer urlobj={hn_api_pages} endpoint="item" page={params.page}>
            {({component_data}) => <HackerComments component_data={component_data}/>}
        </DataContainer>
    )
}


export {
    Top,
    Newest,
    Show,
    Ask,
    Jobs,
    User,
    Comments
}

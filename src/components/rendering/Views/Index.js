import {DataContainer} from '../../data/Data-Container';
import { Hacker_List } from '../Lists';
import { Hacker_Comments } from '../Comments';
import { Hacker_User } from '../User';
import { hn_api_pages } from '../../constants/API';

const list_endpoints = ["news","newest","show","ask","jobs"];

const [ Top, Newest, Show, Ask, Jobs ] = list_endpoints.map(function(endpoint) {
    return DataContainer(Hacker_List)(hn_api_pages)(endpoint)
})

const User = DataContainer(Hacker_User)(hn_api_pages)("user")

const Item = DataContainer(Hacker_Comments)(hn_api_pages)("item")


export {
    Top,
    Newest,
    Show,
    Ask,
    Jobs,
    User,
    Item
}

// Hacker News api locations
// Use these in development
// export const  hn_api_endpoints = {
//     news: (parameter = 1) => `https://node-hnapi.herokuapp.com/news?page=${parameter}`,
//     newest: (parameter) => `https://node-hnapi.herokuapp.com/newest?page=${parameter}`,
//     show: (parameter) => `https://node-hnapi.herokuapp.com/show?page=${parameter}`,
//     ask: (parameter) => `https://node-hnapi.herokuapp.com/ask?page=${parameter}`,
//     jobs: (parameter) => `https://node-hnapi.herokuapp.com/jobs?page=${parameter}`,
//     user: (parameter) => `https://node-hnapi.herokuapp.com/user/${parameter}`,
//     item: (parameter) => `https://node-hnapi.herokuapp.com/item/${parameter}`
// }



// Use these in production
export const hn_api_endpoints = {
    news: (parameter = 1) => `/api/news?page=${parameter}`,
    newest: (parameter) => `/api/newest?page=${parameter}`,
    show: (parameter) => `/api/show?page=${parameter}`,
    ask: (parameter) => `/api/ask?page=${parameter}`,
    jobs: (parameter) => `/api/jobs?page=${parameter}`,
    user: (parameter) => `/api/user/${parameter}`,
    item: (parameter) => `/api/item/${parameter}`
}

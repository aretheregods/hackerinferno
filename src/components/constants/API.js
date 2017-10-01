// Hacker News api locations
// export const hn_api_pages = {
//     news: (parameter) => `https://hnpwa.com/api/v0/news.json?page=${parameter}`,
//     newest: (parameter) => `https://hnpwa.com/api/v0/newest.json?page=${parameter}`,
//     show: (parameter) => `https://hnpwa.com/api/v0/show.json?page=${parameter}`,
//     ask: (parameter) => `https://hnpwa.com/api/v0/ask.json?page=${parameter}`,
//     jobs: (parameter) => `https://hnpwa.com/api/v0/jobs.json?page=${parameter}`,
//     user: (parameter) => `https://hnpwa.com/api/v0/user/${parameter}.json`,
//     item: (parameter) => `https://hnpwa.com/api/v0/item/${parameter}.json`
// }



export const hn_api_pages = {
    news: (parameter) => `/api/news.json?page=${parameter}`,
    newest: (parameter) => `/api/newest.json?page=${parameter}`,
    show: (parameter) => `/api/show.json?page=${parameter}`,
    ask: (parameter) => `/api/ask.json?page=${parameter}`,
    jobs: (parameter) => `/api/jobs.json?page=${parameter}`,
    user: (parameter) => `/api/user/${parameter}.json`,
    item: (parameter) => `/api/item/${parameter}.json`
}


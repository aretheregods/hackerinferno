const functions = require('firebase-functions');
const fetch = require('node-fetch');

// exports.api = hnapi.trigger({
//     staleWhileRevalidate: 120,
//     routerPath: "/api"
// })

exports.api = functions.https.onRequest((req, res) => {
    let path = req.path.slice(5);
    let query = '';
    for(let p in req.query) {
        query = query || '?';
        query += `${p}=${req.query[p]}`;
    }
    let url = `https://node-hnapi.herokuapp.com/${path}${query}`;
    fetch(url).then(resp => {
        resp.json().then(json => {
            res.set('Cache-Control', 'public, max-age=600, s-maxage=600');
            res.send(json);
        })
    })
})

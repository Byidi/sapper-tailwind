const fetch = require('node-fetch')

export async function post(req, res) {
    var credential = JSON.stringify(req.body);
    let status;
    fetch(
        'http://127.0.0.1:8000/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: credential
        }
    )
    .then(r => {
        status = r.status;
        return r.text();
    })
    .then(json => {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = status;
        let response;
        if(status === 200){
            req.session.user = JSON.parse(json)
        }
        res.end(json);
    });

}

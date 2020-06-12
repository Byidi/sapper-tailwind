const fetch = require('node-fetch')

export async function post(req, res) {
    var credential = JSON.stringify(req.body);
    let status;
    let response;
    fetch(
        'http://127.0.0.1:8000/users',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: credential
        }
    )
    .then(r => {
        status = r.status;
        return r.json();
    })
    .then( json => {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = status;
        if(status === 201){
            response = {};
        }else{
            response = json.violations;
        }
        res.end(JSON.stringify(response));
    });

}

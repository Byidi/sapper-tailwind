const fetch = require('node-fetch')

export async function post(req, res) {
    res.setHeader('Content-Type', 'application/json');
    req.session.destroy();
    res.end();
}

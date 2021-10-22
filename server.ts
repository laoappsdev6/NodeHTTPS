import * as https from 'https';
import * as fs from 'fs';

const port = 45389;
const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

https.createServer(options, function (req, res) {
    console.log("message", req)
    res.writeHead(200);
    res.end("hello world\n");
}).listen(port, '0.0.0.0', () => {
    console.log("HTTPS Server is running on port " + port);
});
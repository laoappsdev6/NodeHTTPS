import * as https from 'https';
import * as fs from 'fs';

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

https.createServer(options, function (req, res) {
    res.writeHead(200);
    res.end("hello world\n");
}).listen(8000, '0.0.0.0', () => {
    console.log("HTTPS Server is running on port 8000");

});
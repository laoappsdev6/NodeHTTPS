import * as https from 'https';
import * as fs from 'fs';
import * as express from 'express';
import * as http from 'http'

const app = express();
const httpPort = 45688;
const httpsPort = 45689;



const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

https.createServer(options, function (req, res) {
    console.log("message", req)
    res.writeHead(200);
    res.end("HTTPS say hello world\n");
}).listen(httpsPort, '0.0.0.0', () => {
    console.log("HTTPS Server is running on port " + httpsPort);
});


app.post("/", (req, res) => {
    res.send("hello world")
})
http.createServer(app)
    .listen(httpPort, '0.0.0.0', () => {
        console.log("My Server is running on port " + httpPort);
    });
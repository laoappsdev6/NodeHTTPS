import * as https from 'https';
import * as fs from 'fs';
import express from 'express';
import * as http from 'http'

const app = express();
const httpPort = 45688;
const httpsPort = 45689;



const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

https.createServer(options, function (req, res) {
    console.log("HTTPS MESSAGE", req)
    res.writeHead(200);
    res.end("HTTPS SAY HELLO WORLD!");
}).listen(httpsPort, '0.0.0.0', () => {
    console.log("HTTPS SERVER IS RUNNIN ON PORT " + httpsPort);
});


app.get("/", (req, res) => {
    console.log("http message", req.body)
    res.send("http say hello world")
})
http.createServer(app)
    .listen(httpPort, '0.0.0.0', () => {
        console.log("http server is running on port " + httpPort);
    });
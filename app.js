const logger = require('./log');
const http = require('http');
const port = 5000;
const hostname = 'localhost';

const server = http.createServer((req,res) => {
    res.statusCode = 404;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World!');
});

//logger = 12;

console.log(logger);

logger.logF('Hello World!');
console.log(logger.testData);


server.listen(port, () => {
    console.log(`Server is running at https://${hostname}:${port}`);
}); 
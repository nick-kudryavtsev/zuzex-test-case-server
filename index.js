const app = require('express')();
const http = require('http').createServer(app);

//  constants
const PORT = 3001

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

http.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
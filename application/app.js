const express = require('express')

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(process.env.APP_PORT, process.env.APP_HOST);
console.log(`Running on http://${process.env.APP_HOST}:${process.env.APP_PORT}`);

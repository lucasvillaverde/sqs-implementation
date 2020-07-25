const express = require('express')
const paymentController = require('./controllers/paymentController');
const orderController = require('./controllers/orderController');
const queueController = require('./controllers/queueController');

// App
const app = express();

app.post('/queue/order/:id', orderController.store);
app.post('/queue/payment/:id', paymentController.store);
app.delete('/queue/', queueController.deleteMessages);

app.listen(process.env.APP_PORT, process.env.APP_HOST);
console.log(`Running on http://${process.env.APP_HOST}:${process.env.APP_PORT}`);

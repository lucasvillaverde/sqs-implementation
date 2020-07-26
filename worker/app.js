const QueueService = require('./services/queueService');
const { Consumer } = require('sqs-consumer');

const app = Consumer.create({
    queueUrl: QueueService.params.QueueUrl,
    handleMessage: async (message) => {
        console.log(`Message receveid:  ${JSON.stringify(message.Body)}`)
    },
    sqs: QueueService.SQS
});

app.on('error', (err) => {
    console.error(err.message);
});

app.on('processing_error', (err) => {
    console.error(err.message);
});

app.on('timeout_error', (err) => {
    console.error(err.message);
});

app.start();

const AWS = require('aws-sdk');

AWS.config.update({ region: process.env.AWS_REGION });
const SQS = new AWS.SQS({ apiVersion: `${process.env.AWS_SQS_API_VERSION}` });

const accountId = '540767156515';
const queueName = 'sqs_implementation';

const params = {
    QueueUrl: `${process.env.AWS_SQS_URL}/${accountId}/${queueName}`
};

module.exports = {
    SQS,
    accountId,
    queueName,
    params
}

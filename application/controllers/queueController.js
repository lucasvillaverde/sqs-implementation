const QueueService = require('../services/queueService');

const deleteMessages = async (req, res) => {
    const params = {
        QueueUrl: `${process.env.AWS_SQS_URL}/${QueueService.accountId}/${QueueService.queueName}`
    };

    try {
        await QueueService.SQS.purgeQueue(params).promise();
        return res.status(200).send("Successfully deleted all queue messages.");
    } catch (er) {
        return res.status(500).send(er);
    }
}

module.exports = {
    deleteMessages
}

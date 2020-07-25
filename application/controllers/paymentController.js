const QueueService = require('../services/queueService');

const store = async (req, res) => {
    // Sending payment message to Queue.
    // Setting parameters before send message to queue.
    let params = QueueService.params;
    params.MessageBody = JSON.stringify({
        payment_id: req.params.id,
        ...req.body,
        date: (new Date()).toISOString()
    });

    try {
        await QueueService.SQS.sendMessage(params).promise();
        return res.status(200).send("Successfully Payment Message in queue.");
    } catch (er) {
        return res.status(500).send(er);
    }
}

module.exports = {
    store
}

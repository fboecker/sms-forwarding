const got = require('got');

exports.handler = function(context, event, callback) {
  const requestBody = {
    text: event.Body
  };
  
  //https://docs.microsoft.com/de-de/microsoftteams/platform/webhooks-and-connectors/how-to/connectors-using
  webhook_url = ''
  got.post(webhook_url, {
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })
  .then(response => {
    let twiml = new Twilio.twiml.MessagingResponse();
    callback(null, twiml);
  })
  .catch(err => {
    callback(err);
  });
};
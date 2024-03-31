// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secset TWILIO_ACCOUNT_SID=ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXure
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);
var client = require('twilio')('AC4e17c64437a07d363b79ae967150848f', 'cf943d7da3523fab096468ce48c34a09');

async function deleteAllMessages() {
      const messages = await client.messages.list();
      for (message of messages) {
            console.warn(`Delete ${message.sid}`);
            await message.remove();
      }     
}

console.log("Starting program");
deleteAllMessages()
    .then(() => console.log("Done"))
    .catch((err) => console.error(err));
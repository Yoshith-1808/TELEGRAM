const TelegramBot = require('node-telegram-bot-api');
const token = '6540618797:AAE87QdiBoXQvCf1I0Hp8wRuJz_GITGxCeA';
const bot = new TelegramBot(token, { polling: true });

// Event listener for '/start' command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Hello! I am your Telegram bot. How can I assist you?');
});

// Event listener for '/echo' command
bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const echoMessage = match[1];
  bot.sendMessage(chatId, echoMessage);
});

// Event listener for incoming messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'You said: ' + msg.text);
});

// Handle errors
bot.on('polling_error', (error) => {
  console.log(error);
});

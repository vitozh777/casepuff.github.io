const TelegramBot = require('node-telegram-bot-api');
const request = require('request');
const token = '6311077393:AAGEGc7ByWsP1KewwprCK8zWxwUCzN6tYEg'; // Замените на ваш токен

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = tg.initDataUnsafe.user.id;
  const imageUrl = 'https://raw.githubusercontent.com/vitozh777/casepuff.github.io/main/HI.PNG';

  // Загрузка изображения
  request.get({ url: imageUrl, encoding: null }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const photo = { source: Buffer.from(body) };
      bot.sendPhoto(chatId, photo);
    } else {
      bot.sendMessage(chatId, 'Не удалось загрузить изображение');
    }
  });
});

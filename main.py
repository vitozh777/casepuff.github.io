import telebot
from io import BytesIO
import requests

bot = telebot.TeleBot('6311077393:AAGEGc7ByWsP1KewwprCK8zWxwUCzN6tYEg')


@bot.message_handler(commands=['start'])
def main(message):
    bot.send_message(message.chat.id, 'Hi')
    image_url = 'https://raw.githubusercontent.com/vitozh777/casepuff.github.io/main/HI.PNG'
    response = requests.get(image_url)

    if response.status_code == 200:
        # Отправка изображения
        image_bytes = BytesIO(response.content)
        bot.send_photo(message.chat.id, image_bytes)
    else:
        bot.send_message(message.chat.id, "Не удалось загрузить изображение")


bot.polling(none_stop=True)


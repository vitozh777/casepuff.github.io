import logging
from telegram import Update, InlineKeyboardMarkup, InlineKeyboardButton
from telegram.ext import Updater, CommandHandler, CallbackContext, MessageHandler, Filters, CallbackQueryHandler

# Ваш токен от BotFather
TOKEN = '6311077393:AAGEGc7ByWsP1KewwprCK8zWxwUCzN6tYEg'

logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                     level=logging.INFO)

def start(update: Update, context: CallbackContext) -> None:
    keyboard = [[InlineKeyboardButton("Open Form", callback_data='open_form')]]
    reply_markup = InlineKeyboardMarkup(keyboard)
    update.message.reply_text('Welcome to the Main Menu!', reply_markup=reply_markup)

def open_form(update: Update, context: CallbackContext) -> None:
    query = update.callback_query
    query.answer()
    keyboard = [[InlineKeyboardButton("Back to Main Menu", callback_data='back_to_main')]]
    reply_markup = InlineKeyboardMarkup(keyboard)
    query.message.edit_text('This is the Form!', reply_markup=reply_markup)

def back_to_main(update: Update, context: CallbackContext) -> None:
    query = update.callback_query
    query.answer()
    keyboard = [[InlineKeyboardButton("Open Form", callback_data='open_form')]]
    reply_markup = InlineKeyboardMarkup(keyboard)
    query.message.edit_text('Welcome to the Main Menu!', reply_markup=reply_markup)

def main() -> None:
    updater = Updater(TOKEN)

    dispatcher = updater.dispatcher

    dispatcher.add_handler(CommandHandler("start", start))
    dispatcher.add_handler(CallbackQueryHandler(open_form, pattern='^open_form$'))
    dispatcher.add_handler(CallbackQueryHandler(back_to_main, pattern='^back_to_main$'))

    updater.start_polling()

    updater.idle()

if __name__ == '__main__':
    main()

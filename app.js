let tg = window.Telegram.WebApp;
let sizes = document.querySelectorAll(".size");
let model1 = document.querySelectorAll(".model1");
let model2 = document.querySelectorAll(".model2");
let priceElement = document.querySelector(".price");
let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let homeContent = document.getElementById("home");
let order1 = document.getElementById("order1");
let order2 = document.getElementById("order2");
let selectedModel = ""; // Для хранения выбранной модели
let selectedPrice = ""; // Для хранения выбранной цены
let priceElementForm1 = document.querySelector(".price2");
let priceElementForm2 = document.querySelector(".price3");



const backButton = Telegram.WebApp.BackButton;

const allSection = document.getElementById("all");
const pufferSection = document.getElementById("puffer");
const soapSection = document.getElementById("soap");
const airpodsSection = document.getElementById("airpods");
const tpcItems = document.querySelectorAll(".item#TPC");
const tspItems = document.querySelectorAll(".item#TSC");
const tacItems = document.querySelectorAll(".item#TAC");

allSection.addEventListener("click", () => {
    toggleItemsVisibility(tpcItems, true);
    toggleItemsVisibility(tspItems, true);
    toggleItemsVisibility(tacItems, true);
});

pufferSection.addEventListener("click", () => {
    toggleItemsVisibility(tpcItems, true);
    toggleItemsVisibility(tspItems, false);
    toggleItemsVisibility(tacItems, false);
});

soapSection.addEventListener("click", () => {
    toggleItemsVisibility(tpcItems, false);
    toggleItemsVisibility(tspItems, true);
    toggleItemsVisibility(tacItems, false);
});

airpodsSection.addEventListener("click", () => {
    toggleItemsVisibility(tpcItems, false);
    toggleItemsVisibility(tspItems, false);
    toggleItemsVisibility(tacItems, true);
});

function toggleItemsVisibility(items, isVisible) {
    items.forEach(item => {
        item.style.display = isVisible ? "block" : "none";
    });
}

const sections = document.querySelectorAll(".section");

let activeSection = null; // Переменная для хранения активного раздела

sections.forEach(section => {
    section.addEventListener("click", () => {
        // Снимаем выделение с предыдущего раздела
        if (activeSection) {
            activeSection.classList.remove("active");
        }

        // Добавляем выделение текущему разделу
        section.classList.add("active");
        activeSection = section; // Обновляем активный раздел
    });
});








         
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn1.addEventListener("click", () => {
    document.getElementById("home").style.display = "none"
    document.getElementById("form1").style.display = "block"


    // Делаем кнопку "order1" неактивной
    order1.disabled = true;
    order1.classList.add("disabled");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("home").style.display = "block";
        document.getElementById("form1").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });


});



model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo1[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        order1.disabled = false;
        order1.classList.remove("disabled");

        priceElement.textContent = selectedPrice;
        priceElementForm1.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



const modelInfo1 = {
    "iPhone 14 Pro Max": "2099₽",
    "iPhone 14 Pro": "1899₽",
    "iPhone 14 Plus": "2099₽",
    "iPhone 14": "1899₽",
    "iPhone 13 Pro Max": "2099₽",
    "iPhone 13 Pro": "1899₽",
    "iPhone 13": "1899₽",
    "iPhone 13 mini": "1899₽",
    "iPhone 12 Pro Max": "2099₽",
    "iPhone 12/12 Pro": "1899₽",
    "iPhone 12 mini": "1899₽",
    "iPhone 11 Pro Max": "2099₽",
    "iPhone 11 Pro": "1899₽",
    "iPhone 11": "1899₽",
    "iPhone Xs Max": "2099₽",
    "iPhone Xr": "1899₽",
    "iPhone X/Xs": "1899₽",
    "iPhone 8 Plus/7 Plus": "1699₽",
    "iPhone 6/7/8/SE20": "1699₽",
};


// Добавьте обработчик события click для кнопки "Add to Bag"
order1.disabled = false;
order1.addEventListener("click", (event) => {
    if (!order1.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model1.selected").textContent;
        const selectedPrice = modelInfo1[selectedModel];
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить " + selectedPrice;
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE PUFFER CASE-BLACK";
        const message = `Заказ: ${itemName}\nМодель телефона: ${selectedModel}\nЦена: ${selectedPrice}`;
        
        
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(() => {
            sendMessageToBotWithKeyboard(message, keyboard);
        });
    }   
});



// Функция для отправки сообщения в бота
async function sendMessageToBotWithKeyboard(message, keyboard) {
    const botToken = "6311077393:AAGEGc7ByWsP1KewwprCK8zWxwUCzN6tYEg"; // Замените на ваш токен бота
    const chatId = "730712368"; // Замените на ваш ID чата
                
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const data = new URLSearchParams({
        chat_id: chatId,
        text: message,
        reply_markup: JSON.stringify(keyboard),
    });

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: data,
        });
                    
        const result = await response.json();
        console.log('Message sent with keyboard:', result);
    } catch (error) {
        console.error('Error sending message:', error);
    }
}
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn2.addEventListener("click", () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("form2").style.display = "block";

    // Делаем кнопку "order1" неактивной
    order2.disabled = true;
    order2.classList.add("disabled");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("home").style.display = "block";
        document.getElementById("form2").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


model2.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo2[selectedModel];

        // Удаляем границу у всех кнопок
        model2.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        order2.disabled = false;
        order2.classList.remove("disabled");

        priceElement.textContent = selectedPrice;
        priceElementForm2.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});


const modelInfo2 = {
    "iPhone 14 Pro Max": "1099₽",
    "iPhone 14 Pro": "999₽",
    "iPhone 14 Plus": "1099₽",
    "iPhone 14": "999₽",
    "iPhone 13 Pro Max": "1099₽",
    "iPhone 13 Pro": "999₽",
    "iPhone 13": "999₽",
    "iPhone 12 Pro Max": "1099₽",
    "iPhone 12/12 Pro": "999₽",
    "iPhone 11 Pro Max": "1099₽",
    "iPhone 11 Pro": "999₽",
    "iPhone 11": "999₽",
    "iPhone Xs Max": "1099₽",
    "iPhone Xr": "999₽",
    "iPhone X/Xs": "999₽",
};


// Добавьте обработчик события click для кнопки "Add to Bag"
order2.disabled = false;
order2.addEventListener("click", (event) => {
    if (!order2.disabled) {
        event.preventDefault();
        const itemName = "THE PUFFER CASE-TINTED AIR";
        const selectedModel = document.querySelector(".model2.selected").textContent; // Получаем выбранную модель
        const itemPrice = modelInfo2[selectedModel];
        
        const message = `Заказ: ${itemName}\nМодель телефона: ${selectedModel}\nЦена: ${itemPrice}`;
        
        sendMessageToBot(message); // Вызов функции для отправки сообщения в бота
        
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        }
        else {
            tg.MainButton.text = "Оплатить";
            tg.MainButton.show();
        }
    }   
});



// Функция для отправки сообщения в бота
async function sendMessageToBot(message) {
    const botToken = "6311077393:AAGEGc7ByWsP1KewwprCK8zWxwUCzN6tYEg"; // Замените на ваш токен бота
    const chatId = "730712368"; // Замените на ваш ID чата
                
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const data = new URLSearchParams({
        chat_id: chatId,
        text: message,
    });

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: data,
        });
                    
        const result = await response.json();
        console.log('Message sent:', result);
    } catch (error) {
        console.error('Error sending message:', error);
    }
}
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//


const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    centeredSlides: true,
});

// Создаем инлайн клавиатуру с кнопкой "Связаться с оператором"
const keyboard = {
    inline_keyboard: [
        [
            { text: "Оплатить", callback_data: "contact_operator" }
        ]
    ]
};



// Добавьте кнопку "Связаться с оператором"
const contactOperatorButton = new tg.InlineKeyboardMarkup({
    text: "Оплатить через оператора",
    onClick: () => {
        // Здесь можно добавить код для открытия чата с оператором
        // Например, можно открыть ссылку на Telegram с предзаполненным сообщением
        const message = encodeURIComponent("Здравствуйте, я хотел бы задать вопрос о заказе.");

        const botUsername = "casepuff_bot"; // Замените на имя вашего бота
        const operatorUsername = "ccelaryy";
        const encodedMessage = encodeURIComponent(message);
        const url = `https://t.me/${botUsername}?start=${operatorUsername}&text=${encodedMessage}`;

        window.open(url, "_blank");
    }
});



tg.expand();
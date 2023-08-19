let tg = window.Telegram.WebApp;
let sizes = document.querySelectorAll(".size");
let models = document.querySelectorAll(".model1");
let priceElement = document.querySelector(".price");
let form1 = document.getElementById("form1");
let homeContent = document.getElementById("home");
let addToBagBtn = document.getElementById("order1");
let selectedModel = ""; // Для хранения выбранной модели
let selectedPrice = ""; // Для хранения выбранной цены
let priceElementForm = document.querySelector(".price2");



            

btn1.addEventListener("click", () => {
    document.getElementById("home").style.display = "none"
    document.getElementById("form1").style.display = "block"

    // Делаем кнопку "order1" неактивной
    addToBagBtn.disabled = true;
    addToBagBtn.classList.add("disabled");


    tg.BackButton.show();

    tg.onBackButtonClick(() => {
        document.getElementById("home").style.display = "block";
        document.getElementById("form1").style.display = "none";
        tg.BackButton.hide();
    });

});



          


models.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo[selectedModel];

        // Удаляем границу у всех кнопок
        models.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        addToBagBtn.disabled = false;
        addToBagBtn.classList.remove("disabled");

        priceElement.textContent = selectedPrice;
        priceElementForm.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



const modelInfo = {
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
addToBagBtn.disabled = false;
addToBagBtn.addEventListener("click", (event) => {
    if (!addToBagBtn.disabled) {
        event.preventDefault();
        const itemName = "The Puffer Case - Black";
        const selectedModel = document.querySelector(".model1.selected").textContent; // Получаем выбранную модель
        const itemPrice = modelInfo[selectedModel];
        
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



const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    centeredSlides: true,
});





Telegram.WebApp.onEvent("mainButtonClicked", function(){

})


tg.expand();
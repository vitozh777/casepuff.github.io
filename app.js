let tg = window.Telegram.WebApp;
let sizes = document.querySelectorAll(".size");
let model1 = document.querySelectorAll(".model1");
let model2 = document.querySelectorAll(".model2");
let model3 = document.querySelectorAll(".model3");
let model4 = document.querySelectorAll(".model4");
let priceElement = document.querySelector(".price");
let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let form3 = document.getElementById("form3");
let form4 = document.getElementById("form4");
let form5 = document.getElementById("form5");
let form6 = document.getElementById("form6");
let form7 = document.getElementById("form7");
let form8 = document.getElementById("form8");
let form9 = document.getElementById("form9");
let form10 = document.getElementById("form10");
let form11 = document.getElementById("form11");
let form12 = document.getElementById("form12");
let form13 = document.getElementById("form13");
let form14 = document.getElementById("form14");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn10 = document.getElementById("btn10");
let btn11 = document.getElementById("btn11");
let btn12 = document.getElementById("btn12");
let btn13 = document.getElementById("btn13");
let btn14 = document.getElementById("btn14");
let homeContent = document.getElementById("home");
let order1 = document.getElementById("order1");
let order2 = document.getElementById("order2");
let order3 = document.getElementById("order3");
let order4 = document.getElementById("order4");
let order5 = document.getElementById("order5");
let order6 = document.getElementById("order6");
let order7 = document.getElementById("order7");
let order8 = document.getElementById("order8");
let order9 = document.getElementById("order9");
let order10 = document.getElementById("order10");
let order11 = document.getElementById("order11");
let order12 = document.getElementById("order12");
let order13 = document.getElementById("order13");
let order14 = document.getElementById("order14");
let selectedModel = ""; // Для хранения выбранной модели
let selectedPrice = ""; // Для хранения выбранной цены
let priceElementForm1 = document.querySelector(".price1");
let priceElementForm2 = document.querySelector(".price2");
let priceElementForm3 = document.querySelector(".price3");
let priceElementForm4 = document.querySelector(".price4");
let priceElementForm5 = document.querySelector(".price5");
let priceElementForm50 = document.querySelector(".price50");
let priceElementForm6 = document.querySelector(".price6");
let priceElementForm7 = document.querySelector(".price7");
let priceElementForm8 = document.querySelector(".price8");
let priceElementForm9 = document.querySelector(".price9");
let priceElementForm10 = document.querySelector(".price10");
let priceElementForm11 = document.querySelector(".price11");
let priceElementForm12 = document.querySelector(".price12");
let priceElementForm13 = document.querySelector(".price13");
let priceElementForm14 = document.querySelector(".price14");


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








         
//товар1zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
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



console.log(tg)
// Добавьте обработчик события click для кнопки "Add"
order1.disabled = false;
order1.addEventListener("click", (event) => {
    if (!order1.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model1.selected").textContent;
        const selectedPrice = modelInfo1[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "250₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE PUFFER CASE-BLACK";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Модель телефона: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(() => {
            sendMessageToBot(instructionMessage);
            sendMessageToBotWithKeyboard(message, keyboard);

            tg.close();
        });
    }   
});

// Функция для вычисления общей цены
function calculateTotalPrice(price1, price2) {
    const price1Numeric = parseInt(price1.replace("₽", "").replace(",", ""));
    const price2Numeric = parseInt(price2.replace("₽", "").replace(",", ""));
    const total = price1Numeric + price2Numeric;
    return total + "₽";
}

async function sendMessageToBot(instructionMessage) {
    const botToken = "6311077393:AAGEGc7ByWsP1KewwprCK8zWxwUCzN6tYEg";
    const chatId = tg.initDataUnsafe.user.id;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const data = new URLSearchParams({
        chat_id: chatId,
        text: instructionMessage,
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

// Функция для отправки сообщения в бота
async function sendMessageToBotWithKeyboard(message, keyboard) {
    const botToken = "6311077393:AAGEGc7ByWsP1KewwprCK8zWxwUCzN6tYEg"; // Замените на ваш токен бота
    const chatId = tg.initDataUnsafe.user.id; // Замените на ваш ID чата
                
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
//товар2zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn2.addEventListener("click", () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("form2").style.display = "block";

    // Делаем кнопку "order2" неактивной
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



// Добавьте обработчик события click для кнопки "Add"
order2.disabled = false;
order2.addEventListener("click", (event) => {
    if (!order2.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model2.selected").textContent;
        const selectedPrice = modelInfo2[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "250₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE PUFFER CASE-TINTED AIR";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Модель телефона: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(() => {
            sendMessageToBot(instructionMessage);
            sendMessageToBotWithKeyboard(message, keyboard);

            tg.close();
        });
    }   
});
//товар3zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn3.addEventListener("click", () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("form3").style.display = "block";

    // Делаем кнопку "order3" неактивной
    order3.disabled = true;
    order3.classList.add("disabled");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("home").style.display = "block";
        document.getElementById("form3").style.display = "none";
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

        order3.disabled = false;
        order3.classList.remove("disabled");

        priceElement.textContent = selectedPrice;
        priceElementForm3.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



order3.disabled = false;
order3.addEventListener("click", (event) => {
    if (!order3.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model1.selected").textContent;
        const selectedPrice = modelInfo1[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "250₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора ";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE PUFFER CASE-CERULEAN";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Модель телефона: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(() => {
            sendMessageToBot(instructionMessage);
            sendMessageToBotWithKeyboard(message, keyboard);

            tg.close();
        });
    }   
});
//товар4zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn4.addEventListener("click", () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("form4").style.display = "block";

    // Делаем кнопку "order4" неактивной
    order4.disabled = true;
    order4.classList.add("disabled");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("home").style.display = "block";
        document.getElementById("form4").style.display = "none";
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

        order4.disabled = false;
        order4.classList.remove("disabled");

        priceElement.textContent = selectedPrice;
        priceElementForm4.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



// Добавьте обработчик события click для кнопки "Add"
order4.disabled = false;
order4.addEventListener("click", (event) => {
    if (!order4.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model2.selected").textContent;
        const selectedPrice = modelInfo2[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "250₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE PUFFER CASE-AIR";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Модель телефона: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(() => {
            sendMessageToBot(instructionMessage);
            sendMessageToBotWithKeyboard(message, keyboard);

            tg.close();
        });
    }   
});
//товар5zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn5.addEventListener("click", () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("form5").style.display = "block";

    // Делаем кнопку "order3" неактивной
    order5.disabled = true;
    order5.classList.add("disabled");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("home").style.display = "block";
        document.getElementById("form5").style.display = "none";
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

        priceElement.textContent = selectedPrice;
        priceElementForm5.textContent = selectedPrice;
                    
        selectedModel = model.textContent;

        updateOrder5ButtonState(); // Проверка состояния кнопки order5
    });
});


model4.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModelAir = model.textContent;
        selectedPrice = modelInfo4[selectedModelAir];

        // Удаляем границу у всех кнопок
        model4.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        priceElement.textContent = selectedPrice;
        priceElementForm50.textContent = selectedPrice;
                    
        selectedModelAir = model.textContent;

        updateOrder5ButtonState(); // Проверка состояния кнопки order5
    });
});


function updateOrder5ButtonState() {
    if (selectedModel && selectedModelAir) {
        order5.disabled = false;
        order5.classList.remove("disabled");
    } else {
        order5.disabled = true;
        order5.classList.add("disabled");
    }
}


order5.disabled = false;
order5.addEventListener("click", (event) => {
    if (!order5.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model1.selected").textContent;
        const selectedModelAir = document.querySelector(".model4.selected").textContent;
        const selectedPrice = modelInfo1[selectedModel];
        const selectedPriceAir = modelInfo4[selectedModelAir];

        // Вычисляем общую цену
        const deliveryPrice = "250₽";
        const totalPriceCompl = calculateTotalComplPrice(selectedPrice, selectedPriceAir, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора ";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE PUFFER CASE-КОМПЛЕКТ";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Модель телефона: ${selectedModel}
            Цена: ${selectedPrice}
            Модель наушников: ${selectedModelAir}
            Цена: ${selectedPriceAir}
            Доставка: ${deliveryPrice}
            Общая цена: ${totalPriceCompl}
        `;
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(() => {
            sendMessageToBot(instructionMessage);
            sendMessageToBotWithKeyboard(message, keyboard);

            tg.close();
        });
    }   
});

// Функция для вычисления общей цены
function calculateTotalComplPrice(price1, price2, price3) {
    const price1Numeric = parseInt(price1.replace("₽", "").replace(",", ""));
    const price2Numeric = parseInt(price2.replace("₽", "").replace(",", ""));
    const price3Numeric = parseInt(price3.replace("₽", "").replace(",", ""));
    const total = price1Numeric + price2Numeric + price3Numeric;
    return total + "₽";
}
//товар6zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn6.addEventListener("click", () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("form6").style.display = "block";

    // Делаем кнопку "order3" неактивной
    order6.disabled = true;
    order6.classList.add("disabled");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("home").style.display = "block";
        document.getElementById("form6").style.display = "none";
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

        order6.disabled = false;
        order6.classList.remove("disabled");

        priceElement.textContent = selectedPrice;
        priceElementForm6.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



order6.disabled = false;
order6.addEventListener("click", (event) => {
    if (!order6.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model1.selected").textContent;
        const selectedPrice = modelInfo1[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "250₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE PUFFER CASE-MARSHMALLOW";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Модель телефона: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(() => {
            sendMessageToBot(instructionMessage);
            sendMessageToBotWithKeyboard(message, keyboard);

            tg.close();
        });
    }   
});
//товар7zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn7.addEventListener("click", () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("form7").style.display = "block";

    // Делаем кнопку "order2" неактивной
    order7.disabled = true;
    order7.classList.add("disabled");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("home").style.display = "block";
        document.getElementById("form7").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


model3.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo3[selectedModel];

        // Удаляем границу у всех кнопок
        model3.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        order7.disabled = false;
        order7.classList.remove("disabled");

        priceElement.textContent = selectedPrice;
        priceElementForm7.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



// Добавьте обработчик события click для кнопки "Add"
order7.disabled = false;
order7.addEventListener("click", (event) => {
    if (!order7.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model3.selected").textContent;
        const selectedPrice = modelInfo3[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "250₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE SOAP CASE-BLACK MANHATTAN";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Модель телефона: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(() => {
            sendMessageToBot(instructionMessage);
            sendMessageToBotWithKeyboard(message, keyboard);

            tg.close();
        });
    }   
});
//товар8zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn8.addEventListener("click", () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("form8").style.display = "block";

    // Делаем кнопку "order3" неактивной
    order8.disabled = true;
    order8.classList.add("disabled");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("home").style.display = "block";
        document.getElementById("form8").style.display = "none";
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

        order8.disabled = false;
        order8.classList.remove("disabled");

        priceElement.textContent = selectedPrice;
        priceElementForm8.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



order8.disabled = false;
order8.addEventListener("click", (event) => {
    if (!order8.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model1.selected").textContent;
        const selectedPrice = modelInfo1[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "250₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE PUFFER CASE-LAVENDER";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Модель телефона: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(() => {
            sendMessageToBot(instructionMessage);
            sendMessageToBotWithKeyboard(message, keyboard);

            tg.close();
        });
    }   
});
//товар9zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn9.addEventListener("click", () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("form9").style.display = "block";

    // Делаем кнопку "order3" неактивной
    order9.disabled = true;
    order9.classList.add("disabled");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("home").style.display = "block";
        document.getElementById("form9").style.display = "none";
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

        order9.disabled = false;
        order9.classList.remove("disabled");

        priceElement.textContent = selectedPrice;
        priceElementForm9.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



order9.disabled = false;
order9.addEventListener("click", (event) => {
    if (!order9.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model1.selected").textContent;
        const selectedPrice = modelInfo1[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "250₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE PUFFER CASE-RED";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Модель телефона: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(() => {
            sendMessageToBot(instructionMessage);
            sendMessageToBotWithKeyboard(message, keyboard);

            tg.close();
        });
    }   
});
//товар10zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn10.addEventListener("click", () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("form10").style.display = "block";

    // Делаем кнопку "order2" неактивной
    order10.disabled = true;
    order10.classList.add("disabled");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("home").style.display = "block";
        document.getElementById("form10").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


model3.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo3[selectedModel];

        // Удаляем границу у всех кнопок
        model3.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        order10.disabled = false;
        order10.classList.remove("disabled");

        priceElement.textContent = selectedPrice;
        priceElementForm10.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



// Добавьте обработчик события click для кнопки "Add"
order10.disabled = false;
order10.addEventListener("click", (event) => {
    if (!order10.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model3.selected").textContent;
        const selectedPrice = modelInfo3[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "250₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE SOAP CASE-MILK";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Модель телефона: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(() => {
            sendMessageToBot(instructionMessage);
            sendMessageToBotWithKeyboard(message, keyboard);

            tg.close();
        });
    }   
});
//товар11zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn11.addEventListener("click", () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("form11").style.display = "block";

    // Делаем кнопку "order3" неактивной
    order11.disabled = true;
    order11.classList.add("disabled");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("home").style.display = "block";
        document.getElementById("form11").style.display = "none";
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

        order11.disabled = false;
        order11.classList.remove("disabled");

        priceElement.textContent = selectedPrice;
        priceElementForm11.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



order11.disabled = false;
order11.addEventListener("click", (event) => {
    if (!order11.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model1.selected").textContent;
        const selectedPrice = modelInfo1[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "250₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE PUFFER CASE-RED HEARTS";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Модель телефона: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(() => {
            sendMessageToBot(instructionMessage);
            sendMessageToBotWithKeyboard(message, keyboard);

            tg.close();
        });
    }   
});
//товар12zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn12.addEventListener("click", () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("form12").style.display = "block";

    // Делаем кнопку "order3" неактивной
    order12.disabled = true;
    order12.classList.add("disabled");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("home").style.display = "block";
        document.getElementById("form12").style.display = "none";
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

        order12.disabled = false;
        order12.classList.remove("disabled");

        priceElement.textContent = selectedPrice;
        priceElementForm12.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



order12.disabled = false;
order12.addEventListener("click", (event) => {
    if (!order12.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model1.selected").textContent;
        const selectedPrice = modelInfo1[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "250₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE PUFFER CASE-GREEN";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Модель телефона: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(() => {
            sendMessageToBot(instructionMessage);
            sendMessageToBotWithKeyboard(message, keyboard);

            tg.close();
        });
    }   
});
//товар13zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn13.addEventListener("click", () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("form13").style.display = "block";

    // Делаем кнопку "order2" неактивной
    order13.disabled = true;
    order13.classList.add("disabled");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("home").style.display = "block";
        document.getElementById("form13").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


model4.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo4[selectedModel];

        // Удаляем границу у всех кнопок
        model4.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        order13.disabled = false;
        order13.classList.remove("disabled");

        priceElement.textContent = selectedPrice;
        priceElementForm13.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



// Добавьте обработчик события click для кнопки "Add"
order13.disabled = false;
order13.addEventListener("click", (event) => {
    if (!order13.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model4.selected").textContent;
        const selectedPrice = modelInfo4[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "250₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE AIRPODS CASE-BLACK";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Модель наушников: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(() => {
            sendMessageToBot(instructionMessage);
            sendMessageToBotWithKeyboard(message, keyboard);

            tg.close();
        });
    }   
});
//товар14zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn14.addEventListener("click", () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("form14").style.display = "block";

    // Делаем кнопку "order2" неактивной
    order14.disabled = true;
    order14.classList.add("disabled");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("home").style.display = "block";
        document.getElementById("form14").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


model4.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo4[selectedModel];

        // Удаляем границу у всех кнопок
        model4.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        order14.disabled = false;
        order14.classList.remove("disabled");

        priceElement.textContent = selectedPrice;
        priceElementForm14.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



// Добавьте обработчик события click для кнопки "Add"
order14.disabled = false;
order14.addEventListener("click", (event) => {
    if (!order14.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model4.selected").textContent;
        const selectedPrice = modelInfo4[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "250₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE AIRPODS CASE-GREY";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Модель наушников: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(() => {
            sendMessageToBot(instructionMessage);
            sendMessageToBotWithKeyboard(message, keyboard);

            tg.close();
        });
    }   
});
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//

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


const modelInfo3 = {
    "iPhone 13 Pro Max": "1899₽",
    "iPhone 13 Pro": "1699₽",
    "iPhone 13": "1699₽",
    "iPhone 12 Pro Max": "1899₽",
    "iPhone 12/12 Pro": "1699₽",
    "iPhone 11": "1699₽",
};


const modelInfo4 = {
    "AirPods 1/2": "999₽",
    "AirPods Pro": "999₽",
    "AirPods 3": "999₽",
    "AirPods Pro(2)": "999₽",
};



const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    centeredSlides: true,
});

// Создаем инлайн клавиатуру с кнопкой "Открыть чат с оператором"
const keyboard = {
    inline_keyboard: [
        [
            {
                text: "Открыть чат с оператором",
                url: "https://t.me/operpuff",
            }
        ]
    ]
};


tg.expand();
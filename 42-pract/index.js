"use strict";
const formElement = document.querySelectorAll('form');
const titleInput = document.querySelector('#title');
const emailInput = document.querySelector('#email');
const textArea = document.querySelector('#text');
const checkBox = document.querySelector('#checkbox');
const btnElement = document.querySelectorAll('button');
const formData = {
    email: "",
    title: "",
    text: "",
    checkbox: false,
};
addEventListener("submit", function (event) {
    event.preventDefault();
});
checkBox === null || checkBox === void 0 ? void 0 : checkBox.addEventListener('change', (e) => {
    formData.checkbox = checkBox.checked;
});
btnElement === null || btnElement === void 0 ? void 0 : btnElement.forEach(btnElement => {
    btnElement.addEventListener("click", function (event) {
        formData.email = emailInput === null || emailInput === void 0 ? void 0 : emailInput.value;
        formData.title = titleInput === null || titleInput === void 0 ? void 0 : titleInput.value;
        formData.text = textArea === null || textArea === void 0 ? void 0 : textArea.value;
        emailInput.value = "";
        titleInput.value = "";
        textArea.value = "";
        checkBox.checked = false;
        console.log(formData);
        validateFormData(formData);
    });
});
// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом
function validateFormData(data) {
    // Если каждое из свойств объекта data правдиво...
    if (data.email && data.text && data.title && data.checkbox) {
        console.log("Submit");
        checkFormData(data);
        return true;
    }
    else {
        console.log("Please, complete all fields");
        return false;
    }
}
function checkFormData(data) {
    const { email } = data;
    const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com", "everylands@gmail.com"];
    const existEmail = emails.filter((e) => e == email).join("");
    console.log(existEmail);
    if (email === existEmail) {
        console.log("This email is already exist");
    }
    else {
        console.log("Posting data...");
    }
}

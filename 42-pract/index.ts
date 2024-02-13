const formElement = document.querySelectorAll('form')
const titleInput = document.querySelector<HTMLInputElement>('#title')
const emailInput = document.querySelector<HTMLInputElement>('#email')
const textArea = document.querySelector<HTMLTextAreaElement>('#text')
const checkBox = document.querySelector<HTMLInputElement>('#checkbox')
const btnElement = document.querySelectorAll('button')

type validateValue = string | undefined

interface FormDataValue {
  email: validateValue
  title: validateValue
  text: validateValue
  checkbox: boolean
}

const formData: FormDataValue = {
	email: "",
	title: "",
	text: "",
	checkbox: false,
};

addEventListener("submit", function(event){
  event.preventDefault()
});

checkBox?.addEventListener('change', (e) => {
  formData.checkbox = checkBox.checked
})

btnElement?.forEach(btnElement => {
  btnElement.addEventListener("click", function(event){
    formData.email = emailInput?.value
    formData.title = titleInput?.value
    formData.text = textArea?.value
    emailInput!.value = ""
    titleInput!.value = ""
    textArea!.value = ""
    checkBox!.checked = false
    console.log(formData);
    validateFormData(formData)
  });
});



// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом

function validateFormData(data: FormDataValue): boolean {
	// Если каждое из свойств объекта data правдиво...
	if (data.email && data.text && data.title && data.checkbox) {
		console.log("Submit");
    checkFormData(data)
		return true;
	} else {
		console.log("Please, complete all fields");
		return false;
	}
}

function checkFormData(data: FormDataValue) {
	const { email } = data;
	const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com", "everylands@gmail.com"];
  const existEmail = emails.filter((e) => e == email).join("")
  console.log(existEmail);
	if (email === existEmail) {
		console.log("This email is already exist");
	} else {
		console.log("Posting data...");
	}
}

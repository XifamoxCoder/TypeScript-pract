interface IForm {
	login: {
		isValid: boolean
		errorMsg?: string
	}
	password: {
		isValid: boolean
		errorMsg?: string
	}
}

// Необходимо типизировать объект валидации
// Учтите, что данные в форме могут расширяться и эти поля
// должны появиться и в объекте валидации

const validationData: IForm = {
	login: { isValid: false, errorMsg: "At least 3 characters" },
	password: { isValid: true },
};

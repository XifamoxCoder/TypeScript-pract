"use strict";
class UserForm {
    constructor() {
        this.valid = false;
    }
    isValid(login) {
        return login.length > 3;
    }
}

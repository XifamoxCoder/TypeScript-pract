"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Player_login;
function setName() {
    return 'COD';
}
class Player {
    constructor(login) {
        _Player_login.set(this, void 0);
        this.logIn = () => {
            return `Player ${__classPrivateFieldGet(this, _Player_login, "f")} online!`;
        };
        __classPrivateFieldSet(this, _Player_login, login, "f");
    }
    get password() {
        return this._password;
    }
    set password(newPass) {
        // Validation
        this._password = newPass;
    }
    static getGameName() {
        return Player.game;
    }
    connect() {
        // Do something
        return this;
    }
    isPro() {
        return this instanceof CompetitivePlayer;
    }
}
_Player_login = new WeakMap();
Player.game = 'COD';
(() => {
    Player.game = setName();
})();
// const test = player.logIn
// test()
console.log(Player.getGameName());
// Math.random()
//
class CompetitivePlayer extends Player {
    checkLogin() {
        return this.logIn();
    }
    isConsented() {
        this.consent ? 'Yes' : 'No';
    }
}
const player = new Player('test');
console.log(player.connect().logIn());
const player2 = new CompetitivePlayer('test2');
console.log(player2.connect().logIn());
const somePlayer = new CompetitivePlayer('test3');
somePlayer.isPro() ? console.log(somePlayer) : console.log(somePlayer);

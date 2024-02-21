"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Box {
    constructor(width, volume, content) {
        this.height = 500;
        this.width = width;
        this.volume = volume;
        this._content = content;
    }
    calculateVolume() {
        if (!this.volume) {
            this.volume = this.width * this.height;
            console.log(`Объем посылки: ${this.volume}`);
        }
        else {
            console.log(`Объем посылки: ${this.volume}`);
        }
    }
    checkBoxSize(transport) {
        if (typeof transport === 'number') {
            return transport >= this.width ? 'Ok' : 'Not ok';
        }
        else {
            return transport.some(t => t >= this.width) ? 'Ok' : 'Not ok';
        }
    }
    // get content() {
    //   return this._content
    // }
    //
    // set content(value) {
    //   this._content = `Date: ${new Date().toTimeString()}, Content: ${value}`
    // }
    content(value) {
        return __awaiter(this, void 0, void 0, function* () {
            const date = yield new Date().toTimeString();
            this._content = `Date: ${date}, Content: ${value}`;
            console.log(this._content);
            // return this._content
        });
    }
}
const firstBox = new Box(250);
firstBox.calculateVolume();
firstBox.volume = 5000;
class PresentBox extends Box {
    constructor(wrap, width) {
        super(width);
        this.height = 600;
        this.wrap = wrap;
    }
    content(value, text) {
        const _super = Object.create(null, {
            content: { get: () => super.content }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const date = yield new Date().toTimeString();
            if (!text) {
                _super.content.call(this, value);
            }
            else {
                this._content = `Date: ${date}, Content: ${value}, Text: ${text ? text : 'No text'}`;
            }
            console.log(this._content);
            // return this._content
        });
    }
}
new PresentBox('red', 500).content('TV', 'Gift');

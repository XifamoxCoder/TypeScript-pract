"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
let ShippingContainer = class ShippingContainer {
    constructor(width, length, height) {
        this.width = width;
        this.length = length;
        this.height = height;
        validate(this, 'width', width);
        validate(this, 'length', length);
        validate(this, 'height', height);
    }
    calcArea(multiply) {
        return this.width * this.length * (multiply ? multiply : 1);
    }
    calcVolume(multiply) {
        return this.width * this.length * this.height * (multiply ? multiply : 1);
    }
};
__decorate([
    IsInt(),
    Min(1)
], ShippingContainer.prototype, "width", void 0);
__decorate([
    IsInt(),
    Min(1)
], ShippingContainer.prototype, "length", void 0);
__decorate([
    IsInt(),
    Min(1),
    Max(8)
], ShippingContainer.prototype, "height", void 0);
__decorate([
    fixLastCalculation('calcArea')
], ShippingContainer.prototype, "calcArea", null);
__decorate([
    fixLastCalculation('calcVolume')
], ShippingContainer.prototype, "calcVolume", null);
ShippingContainer = __decorate([
    createdAt
], ShippingContainer);
// 1. Необходимо создать декоратор класса, который будет записывать дату создания контейнера
// Простыми словами - создавать в нем новое свойство createdAt с датой создания экземпляра
// 2. Необходимо создать декораторы IsInt, Min и Max, которые будут валидировать свойства класса
// Применение смотрите в самом классе. При ошибке выполняйте throw new Error
// IsInt проверяет на то, что было передано целое число
// 3. Необходимо создать декоратор метода, который при каждом запуске метода будет создавать
// ИЛИ менять содержимое свойства самого класса lastCalculation
// Как значение записывать в него строку "Последний подсчет ${method} был ${Дата}",
// Где method - это название подсчета, который передается при вызове декоратора (площадь или объем)
const container = new ShippingContainer(10, 100, 7);
container.width = 10;
container.height = 5;
console.log(container.calcArea());
console.log(container.lastCalculation);
console.log(container.calcVolume());
console.log(container.lastCalculation);
finalValidate(container);
function createdAt(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.createdAt = new Date();
        }
    };
}
function fixLastCalculation(method) {
    return (target, propertyKey, descriptor) => {
        const oldValue = descriptor.value;
        descriptor.value = function (...args) {
            this.lastCalculation = `Последний подсчет ${method} был ${new Date()}`;
            return oldValue.apply(this, args);
        };
    };
}
function IsInt() {
    return function (target, propertyKey) {
        Reflect.defineMetadata('IsInt', true, target, propertyKey);
    };
}
function Min(limit) {
    return function (target, propertyKey) {
        Reflect.defineMetadata('Min', limit, target, propertyKey);
    };
}
function Max(limit) {
    return function (target, propertyKey) {
        Reflect.defineMetadata('Max', limit, target, propertyKey);
    };
}
function validate(target, propertyKey, value) {
    if (Reflect.getMetadata('IsInt', target, propertyKey) &&
        (!Number.isInteger(value) || value !== parseInt(value))) {
        throw new Error(`свойство ${propertyKey} - Не целое число`);
    }
    if (Reflect.hasMetadata('Min', target, propertyKey) &&
        value < Reflect.getMetadata('Min', target, propertyKey)) {
        throw new Error(`Минимальное значение для свойства ${propertyKey} - должно быть: ${Reflect.getMetadata('Min', target, propertyKey)}}`);
    }
    if (Reflect.hasMetadata('Max', target, propertyKey) &&
        value > Reflect.getMetadata('Max', target, propertyKey)) {
        throw new Error(`Максимальное значение для свойства ${propertyKey} - должно быть: ${Reflect.getMetadata('Max', target, propertyKey)}}`);
    }
}
function finalValidate(obj) {
    if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
        for (let key in obj) {
            validate(obj, key, obj[key]);
        }
    }
}

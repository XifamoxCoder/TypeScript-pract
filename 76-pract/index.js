"use strict";
// Реализация очереди через массив
// Класс ArrayQueue должен имплементировать интерфейс Queue
// Класс может работать с любым типом данных, то есть помещать любые данные в массив  <-- Важно
// Очередь - это структура данных, которая выглядит как реальная очередь в магазине
// Первый, кто подошел к прилавку, первым и уйдет. Так же и в коде при выполнении задач
// Чуть подробнее можно найти в википедии или на других сайтах по поиску "Очередь структура данных"
class ArrayQueue {
    constructor() {
        this.queue = [];
        // Создать приватное свойство queue, которое по умолчанию массив и содержит массив любого типа
        // Подсказка по методам:
        // при добавлении в очередь можно выполнить метод push
        // при удалении - shift, так как нужно удалить первый элемент.
        // Обратите внимание на возвращаемое значение
        // isEmpty может использоваться в других методах
    }
    enqueue(item) {
        this.queue.push(item);
    }
    ;
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        else {
            return this.queue[0];
        }
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    length() {
        return this.queue.length;
    }
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue Underflow");
        }
        return this.queue.shift();
    }
}
const arrTest1 = new ArrayQueue();
arrTest1.enqueue(5);
// arrTest1.enqueue(10);
// console.log(arrTest1.peek());
// console.log(arrTest1.dequeue());
// console.log(arrTest1.length());
// console.log(arrTest1)
//
// const arrTest2 = new ArrayQueue<string>();
// arrTest2.enqueue("5");
// arrTest2.enqueue("10");
// console.log(arrTest2.peek());
// console.log(arrTest2.dequeue());
// console.log(arrTest2.length());
// console.log(arrTest2)
// console.log(array.enqueue(testItem))
// Стэк - это еще одна структура данных. Проще всего её представить как стопку листов на столе
// Последний, который вы положите сверху, вы и первым потом возьмете.
// Чуть подробнее можно найти в википедии или на других сайтах по поиску "Стэк структура данных"
// Класс Stack содержит другие методы, так что ничего имплементировать не нужно
// Класс может работать с любым типом данных, то есть помещать любые данные в массив и содержит массив любого типа  <-- Важно
class Stack {
    // Создать приватное свойство stack, которое по умолчанию массив и содержит массив любого типа.
    // Создать приватное свойство limit, которое будет типом number
    // Здесь мы установим лимит на стопку листов.
    // При переполнении стэка программа зависает, а очень высокая стопка листов падает
    // Так что лимит всегда должен быть
    constructor(limit = Number.MAX_VALUE) {
        this.stack = [];
        this.limit = limit;
    }
    push(value) {
        if (this.stack.length === this.limit) {
            throw new Error('Full stack');
        }
        this.stack.push(value);
        // Добавляет элемент в стэк
        // Если стэк переполнен - выбрасывает ошибку (throw new Error)
    }
    pop() {
        if (this.isEmpty()) {
            throw new Error('Full stack');
        }
        return this.stack.pop();
        // Удаляет последний элемент массива
        // Если в стеке пусто - выбрасывает ошибку (throw new Error)
        // При удалении элемента возвращает его
        // Простыми словами: вы берете верхний лист в стопке и используете его
        // Если на столе нет листов - получается ошибка, брать нечего
    }
    length() {
        if (this.isEmpty()) {
            return 'Stack is empty';
        }
        return `Length: ${this.stack.length}`;
        // Возвращает кол-во элементов в стэке
    }
    isEmpty() {
        if (!this.stack.length) {
            return true;
        }
        // Проверяет стэк на "пустоту"
    }
    top() {
        if (this.isEmpty()) {
            return null;
        }
        return this.stack[this.stack.length - 1];
        // Возвращает последний (верхний) элемент стэка, но не удаляет его
        // Вы просто читаете, что написано на верхнем листе
        // Если стэк пуст - вернется null
    }
}
// Для тестов
const stackTest1 = new Stack(10);
stackTest1.push(20);
stackTest1.push(50);
stackTest1.push(50);
stackTest1.push(50);
stackTest1.push(30);
console.log(stackTest1.top());
console.log(stackTest1.pop());
console.log(stackTest1.length());
console.log(stackTest1);
const stackTest2 = new Stack(10);
stackTest2.push("20");
stackTest2.push("50");
console.log(stackTest2.top());
console.log(stackTest2.pop());
console.log(stackTest2.length());

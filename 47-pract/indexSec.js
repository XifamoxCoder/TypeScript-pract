"use strict";
// Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:
const player1 = {
    game: "CS:GO",
    hours: 300,
    server: "basic",
};
const player2 = {
    game: 2048,
    hours: "300 h.",
    server: "arcade",
};
const player3 = {
    game: "Chess",
    hours: {
        total: 500,
        inMenu: 50,
    },
    server: "chess",
};
// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }
var FigureName;
(function (FigureName) {
    FigureName["Rect"] = "rect";
    FigureName["Triangle"] = "triangle";
    FigureName["Circle"] = "circle";
    FigureName["Line"] = "line";
})(FigureName || (FigureName = {}));
function calculateAmountOfFigures(figure) {
    const amount = {
        squares: 0,
        circles: 0,
        triangles: 0,
        others: 0,
    };
    figure.forEach(fig => {
        if (fig.name === FigureName.Rect) {
            amount.squares++;
        }
        else if (fig.name === FigureName.Circle) {
            amount.circles++;
        }
        else if (fig.name === FigureName.Triangle) {
            amount.triangles++;
        }
        else {
            amount.others++;
        }
    });
    return amount;
}
const data = [
    {
        name: FigureName.Rect,
        data: { a: 5, b: 10 },
    },
    {
        name: FigureName.Rect,
        data: { a: 6, b: 11 },
    },
    {
        name: FigureName.Triangle,
        data: { a: 5, b: 10, c: 14 },
    },
    {
        name: FigureName.Line,
        data: { l: 15 },
    },
    {
        name: FigureName.Circle,
        data: { r: 10 },
    },
    {
        name: FigureName.Circle,
        data: { r: 5 },
    },
    {
        name: FigureName.Rect,
        data: { a: 15, b: 7 },
    },
    {
        name: FigureName.Triangle,
    },
];
console.log(calculateAmountOfFigures(data));

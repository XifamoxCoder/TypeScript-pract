"use strict";
// // структура данных склада с одеждой
// type emptyOrNum = "empty" | number
// type emptyOrBoolean = "empty" | boolean
// interface IClothesWarehouse {
// 	jackets: emptyOrNum;
// 	hats: emptyOrNum;
// 	socks: emptyOrNum;
// 	pants: emptyOrNum;
// }
// // структура данных склада с канцтоварами
// interface IStationeryWarehouse {
// 	scissors: emptyOrNum;
// 	paper: emptyOrBoolean
// }
// // структура данных склада с бытовой техникой
// interface IAppliancesWarehouse {
// 	dishwashers: emptyOrNum;
// 	cookers: emptyOrNum;
// 	mixers: emptyOrNum;
// }
// // общая структура данных, наследует все данные из трех выше
// // + добавляет свои
// interface ITotalWarehouse extends IClothesWarehouse, IStationeryWarehouse, IAppliancesWarehouse {
// 	deficit: boolean;
// 	date: Date;
// }
// // главный объект со всеми данными, должен подходить под формат TotalWarehouse
// const totalData: ITotalWarehouse = {
// 	jackets: 5,
// 	hats: "empty",
// 	socks: "empty",
// 	pants: 15,
// 	scissors: 15,
// 	paper: true,
// 	dishwashers: 3,
// 	cookers: "empty",
// 	mixers: 14,
//   deficit: true,
//   date: new Date()
// };
// // Реализуйте функцию, которая принимает в себя главный объект totalData нужного формата
// // и возвращает всегда строку
// // Функция должна отфильтровать данные из объекта и оставить только те названия товаров, у которых значение "empty"
// // и поместить их в эту строку. Если таких товаров нет - возвращается другая строка (см ниже)
// // С данным объектом totalData строка будет выглядеть:
// // "We need this items: hats, socks, cookers"
// // Товары через запятую, в конце её не должно быть. Пробел после двоеточия, в конце строки его нет.
// const totalDataArr: string[] = []
// const createArray = (el: {}) => {
//   totalDataArr.push(`${el}`)
//   console.log(totalDataArr);
// }
// createArray(totalData)
// const printReport = ({
//   jackets,
//   hats,
//   socks,
//   pants,
//   scissors,
//   paper,
//   dishwashers,
//   cookers,
//   mixers,
//   deficit,
//   date}: ITotalWarehouse): string => {
// 	return `We need this items: ${hats}`;
// 	// или
// 	return "Everything fine";
// }
//  console.log(printReport(totalData));

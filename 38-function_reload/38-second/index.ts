function getLength(arg: string): number
function getLength(arg: any[]): number
function getLength(arg: any): number {
  return arg.length
}

console.log(getLength([1, 2 ,3, 4, 5, 6]))
console.log(getLength('fdasfasfasf'))
console.log(getLength('123'))

function sum(a: number, b: number): number
function sum(a: string, b: string): string
function sum(a: any, b: any): any {
  return a + b
}

console.log(sum(1, 2))
console.log(sum('1', '2'))
// console.log(sum(1, 'a'))
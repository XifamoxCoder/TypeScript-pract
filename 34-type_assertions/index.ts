const fetchData = (url: string, method: "GET" | "POST"): void => {
  console.log(method);
  
}

const reqOptions = {
  url: 'https://someurl.com',
  method: 'GET'
}

const str = 'str'
const method = 'GET'

fetchData('qqq', 'GET')
// fetchData(reqOptions.url, reqOptions.method as "GET")
fetchData(reqOptions.url, <"GET">reqOptions.method)

const box = document.querySelector('.box') as HTMLElement
const input = <HTMLInputElement>document.querySelector('input')

const someNumber: number = input.value as any as number
console.log(someNumber * 3);
 
let a = 'value' as const

let b = {f: 100} as const
let c = [] as const

let value = 'value' as const
let arr = ['sb', 'sdd']
let obj = {f: 100}

let T0 = value

// let T5 = (Math.round(Math.random() * 1) ? 'yes' : 'no') as const
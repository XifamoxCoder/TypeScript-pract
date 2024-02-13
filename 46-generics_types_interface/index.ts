function processing<T>(data: T): T {
  return data
}

interface ProcessingFn {
  <T>(data: T): T
}

let newFunc: ProcessingFn = processing

type Smth<T> = T

const num: Smth<number> = 5

interface ParentsOfUser {
  mother: string, father: string
}

interface User<ParentsData extends ParentsOfUser> {
  login: string
  age: number
  parents: ParentsData
}


const user: User<{mother: string, father: string, married: boolean, secondFather: string}> = {
  login: 'dyt',
  age: 10,
  parents: {
    mother: 'ssa',
    father: 'no papa',
    secondFather: 'no papa',
    married: true
  }
}


type OrNull<Type> = Type | null
type OneOrMany<Type> = Type | Type[]

const data2: OneOrMany<number[]> = [5]

const depositMoney = (amount: number | string): number | string => {
  console.log(`req to server with amount: ${amount}`);
  return amount
}

depositMoney(599)
depositMoney('500')
// depositMoney(true)
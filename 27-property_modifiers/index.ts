interface User {
  readonly login: string
  password: string
  age: number
  addr?: string
  parents?: {
    mother?: string
    father?: string
  }
}

const user: User = {
  login: 'yser',
  password: 'qwerty',
  age: 5,
  addr: 'faf2'
}

const userFreeze: Readonly<User> = {
  login: 'yser',
  password: 'qwerty',
  age: 5,
}

// userFreeze.age = 1418
// userFreeze.password = '14'

let dbName: string
sendUserData(user, 'sd')

function sendUserData(obj: User, db?: string): void {
  dbName = "12345"
  console.log(obj.parents!.father?.toLowerCase(), db!.toLowerCase());
  
}

const basicPorts: readonly [number, ...string[]] = [3000, '3001', '5555']
// basicPorts[0] = 5
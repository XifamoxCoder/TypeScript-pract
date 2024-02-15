// Condition ? true: false

const str:string = 'Hello'
type Example = 'string' extends typeof str ? string : number

type FromUserOfFromBase<T extends string | number> = T extends string ? IDataFromUser : IDataFromBase

interface User<T extends 'created' | Date> {
  created: T extends 'created' ? 'created' : Date
}

const user: User<'created'> = {
  created: 'created'
}

interface IDataFromUser {
  weight: string
}

interface IDataFromBase {
  calories: number
}

function calculateDailyCalories(str: string): IDataFromUser
function calculateDailyCalories(num: number): IDataFromBase
function calculateDailyCalories<T extends string | number>(numOrStr: T
): T extends string ? IDataFromUser : IDataFromBase {
  if (typeof numOrStr === 'string') {
    const obj: IDataFromUser = {
      weight: numOrStr
    }
    return obj as FromUserOfFromBase<T>
  } else {
    const obj: IDataFromBase = {
      calories: numOrStr
    }
    return obj as FromUserOfFromBase<T>
  }
}

type GetStringType<T extends 'hello' | 'world' | string> = T extends 'hello'
  ? 'hello' : T extends 'world'
  ? 'world' : string

type GetFirstType<T> = T extends Array<infer First> ? First : T

type Ex = GetFirstType<number[]>

type ToArray<Type> = Type extends any ? Type[] : never

type ExArray = ToArray<Ex>
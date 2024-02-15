// Condition ? true : false
// SomeType extends OtherType ? TrueType : FalseType

const str: string = 'Hellos'
type Example = 'string' extends typeof str ? string : number

type FromUserOfFromBase<T extends string | number> =  T extends string
  ? IDataFromUser
  : IDataFromBase

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

// function calculateDailyCalories(str: string): IDataFromUser
// function calculateDailyCalories(num: number): IDataFromBase
function calculateDailyCalories<T extends string | number>(
  numOfStr: T
) : T extends string ? IDataFromUser : IDataFromBase{
  if (typeof numOfStr === 'string') {
    const obj: IDataFromUser = {
      weight: numOfStr
    }
    return obj as FromUserOfFromBase<T>
  } else {
    const obj: IDataFromBase = {
      calories: numOfStr
    }
    return obj as FromUserOfFromBase<T>
  }
}

type GetStringType<T extends 'Hello' | 'world' | string> = T extends 'hello'
  ? 'hello' : T extends 'world'
  ? 'world' : string

type GetFirstType<T> = T extends Array<infer First> ? First : T

type Ex = GetFirstType<number[]>

type ToArray<Type> = Type extends any ? Type[] : never

type ExArray = ToArray<Ex | string>
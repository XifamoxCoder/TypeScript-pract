interface Currencies {
  usa: 'uds'
  china: 'cny'
  russia: 'rub'
  kz: 'tenge'
}

type CurrWithoutUSA = Omit<Currencies, 'usa'> // Исключение
type CurrUSAAndRussia = Pick<Currencies, 'usa' | 'russia'> // фильтрация по свойству
type CountriesWithoutUSA = Exclude<keyof Currencies, 'usa'>

type FadeType = Exclude<MyAnimation, 'swipe'> // Удаление из union type
type SwipeType = Extract<MyAnimation | Direction, 'swipe'> // Выбор подходящего типа

type CreateCustomCurr<T> = {
  [P in keyof T as `custom${Capitalize<string & P>}`] : string
}

type PlayersNames = 'alex' | 'steve'
type CustomCurrencies = CreateCustomCurr<Currencies>
type GameDataCurr = Record<PlayersNames, CustomCurrencies>

const gameData: GameDataCurr = {
  alex: {
    customChina: 'aqqa',
    customRussia: 'ww',
    customKz: 'asf',
    customUsa: 'afs'
  },
  steve: {
    customChina: 'aqqa',
    customRussia: 'ww',
    customKz: 'asf',
    customUsa: 'afs'
  }
}

type Direction = 'in' | 'out'
type MyAnimation = 'fade' | 'swipe'

type MyNewAnimation = `${MyAnimation}${Capitalize<Direction>}`
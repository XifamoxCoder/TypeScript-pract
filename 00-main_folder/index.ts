// let userName:string = 'Ivan'
// let salary
// salary = 5000

// const userData = '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}'

// const userObj: {
//   isBirthdayData:boolean
//   userNameData:string
//   ageData:number
// } = JSON.parse(userData)

const userData = {
  isBirthdayData: true,
  ageData: 15,
  userNameData: 'John',
  messages: {
    error: 'Error'
  }
}

const userDataTuple: [boolean, number, ...string[]] = [true, 40, 'John', 'Alex', 'Anna']
// userDataTuple[0] = 'true'

const res = userDataTuple.map((t) => `${t} - data`)

const [bthd, age, userName] = userDataTuple

const createError = (msg: string) => {
  throw new Error(msg);
  
}

const logBrtMsg = ({
  isBirthdayData,
  userNameData,
  ageData,
  messages: { error }
}: {
  isBirthdayData: boolean
  userNameData: string
  ageData: number
  messages: {error: string}
}): string => {
  if (isBirthdayData) {
    return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`
  } else {
    return createError(error)
  }
}
  

console.log(logBrtMsg(userData));

const departments: string[] = ['dev', 'design', 'marketing']

const department = departments[0]

// departments.push(5)
const report = departments
                      .filter((d: string) => d !== 'dev')
                      .map((d) => `${d} - done`)
console.log(report);

const nums: number[][] = [[3, 5, 6], [3, 5, 6], [3, 5, 6]]

const [first] = report
console.log(first);

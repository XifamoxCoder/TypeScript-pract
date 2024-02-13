const salary: number = 500

interface IUserData {
  isBirthdayData: boolean,
  ageData: number
  userNameData: string
}

const userData =
'{"isBirthdayData": true, "ageData": 40, "userNameData": "john"}'

const userObj: IUserData = JSON.parse(userData)
console.log(userObj);

const isOkay = true
let movement: boolean | string = false

if (isOkay) {
  movement = 'moving'
}

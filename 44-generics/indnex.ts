function proccesingData<T>(data: T): T {

  return data
}

const res1 = proccesingData(1)
const res2 = proccesingData('1')
const num = 109
const res3 = proccesingData<number>(num)

interface PrintUK {
  design: number
}

interface PrintES {
  design: string
}

interface Print<T>{
  design: T
}

const somePrint: Print<string> = {
  design: 'string'
}

const someOtherPring: Print<number> = {
  design: 10
}

// Array<T>

// RefferalSystem<UserID, UserReferrals>

// T U V S P K/V
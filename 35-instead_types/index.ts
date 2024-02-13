// let num:number = 500
// let num2:Number = new Number(500)
// let num3 = Number(5)

// num = num2
// num2 = num

const num = 5
const strNum: string = num.toString()
const str = '5'
const numStr: number = +str

interface Department {
  name: string
  budget: number
}

const department: Department = {
  name: 'web-dev',
  budget: 50000
}

interface Project {
  name: string
  projectBudget: number
}

function transformDepartment(department: Department, amount: number): Project {
  return {
    name: department.name,
    projectBudget: amount
  }
}

const mainProject: Project = transformDepartment(department, 4000)
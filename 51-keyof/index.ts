interface ICompany {
  name: string
  debts: number
  departments: Department[]
  managment: {
    owner: string
  }
}

interface Department {
  [key: string]: string
}

let debts: 'debts' = 'debts'
type CompanyDebtsType = ICompany[typeof debts]

// type CompanyDebtsType = ICompany['debts']
type CompanyOwnerType = ICompany['managment']['owner']
type CompanyDepartmentsType = ICompany['departments'][number]
type CompanyDepartmentsTypes = ICompany['departments']
type Test = ICompany[keyof ICompany]

type CompanyKeys = keyof ICompany
const keys: CompanyKeys = 'name'

function printDebts<T, K extends keyof T, S extends keyof T>(
  company: T, 
  name: K,
  debts: S
) {
  console.log(`Company ${company[name]}, debts: ${company[debts]}`);
  
}

const google: ICompany = {
  name: 'Google',
  debts: 123511,
  departments: {
    sales: 'sales',
    develor: 'dev'
  },
  managment: {
    owner: 'Jogn'
  }
}

printDebts(google, 'name', 'debts')

type GoogleKeys = keyof typeof google
const keys2: GoogleKeys = 'debts'


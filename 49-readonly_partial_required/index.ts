const arr: Array<number> = [1,2,3]
const arr1: number[] = [1, 2, 3]

const roarr: ReadonlyArray<string> = ['dadw']

interface IState {
  readonly data: {
    name: string
  }
  tag?: string
}

const state: Partial<IState> = {
  data: {
    name: 'John'
  }
}

const strictState: Required<IState> = {
  data: {
    name: 'dads'
  },
  tag: 'fa'
}

function action(state: Readonly<IState>) {
  state.data.name = 'asd'
}


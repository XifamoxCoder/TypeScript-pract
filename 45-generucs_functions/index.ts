function proccesingData<T, S>(data: T[], options: S): string {
  data.length
  switch (typeof data) {
    case "string":
      return `${data}, speed ${options}`
      break
    case "number":
      return `${data}, speed: ${options}`
      break
    default:
      return "Not valid"
  }
}

let res1 = proccesingData([1], 'fast')
let res2 = proccesingData(["1"], 'slow')
const res3 = proccesingData<number, string>([12], 'slow')

function processing<T>(data: T): T {
  return data
}

interface ProcessingFn {
  <T>(data: T): T
}

let newFunc: ProcessingFn = processing

interface DataSaver {
  processing: ProcessingFn
}

const saver: DataSaver = {
  // processing(data) {
  //   console.log(data)
  //   return data;
  // }
  processing: processing
}
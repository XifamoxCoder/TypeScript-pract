type Animal = "cat" | "dog" | "bird"

enum Status {
  Available = 'available',
  NotAvailable = 'not available'
}
// Request
interface AnimalData {
    animal: Animal,
    breed: string,
    sterilized?: string
}

// Response #1


interface AnimalAvailableData extends AnimalData {
    location: string,
    age?: number
}

// Response #2

interface AnimalNotAvailableData {
    message: string,
    nextUpdateIn: Date
}

interface AnimalAvailableResponse {
  status: Status.Available
  data: AnimalAvailableData
}

interface AnimalNotAvailableResponse {
  status: Status.NotAvailable
  data: AnimalNotAvailableData
}

type Res = AnimalAvailableResponse | AnimalNotAvailableResponse

function isAvaiable(res: Res): res is AnimalAvailableResponse {
  if (res.status === Status.Available) {
    return true
  } else {
    return false
  }
}

function checkAnimalData(animal: Res): AnimalAvailableData | string {
	if (isAvaiable(animal)) {
		return animal.data;
	} else {
		return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`;
	}
}

const animal:AnimalAvailableResponse = {
  status: Status.Available,
  data: {
    animal: 'cat',
    location: 'pisapopa',
    breed: 'yes'
  }
}
const animal2:AnimalNotAvailableResponse = {
  status: Status.NotAvailable,
  data: {
    message: 'test',
    nextUpdateIn: new Date()
  }
}

console.log(checkAnimalData(animal2));

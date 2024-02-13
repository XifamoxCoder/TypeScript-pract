function printMsg(msg: string[] | number | boolean): void {
  if (Array.isArray(msg)) {
    msg.forEach((m) => console.log(m))
  } else if (isNumber(msg)) {
    console.log(msg, 1);
  } else {
    console.log(msg, 0);
  }
  console.log(msg, 5);
  
}

printMsg(4)

// function isNumber(n: string[] | number | boolean): n is number {
//   return typeof n === 'number'
// }

function isNumber(n: unknown): n is number {
  return typeof n === 'number'
}

interface Car {
  name: 'car'
  engine: string
  wheels: {
    number: number
    type: string
  }
}

interface Ship {
  name: 'ship'
  engine: string
  sail: string
}

interface Airplane {
  name: 'airplane'
  engine: string
  wings: string
}

interface ComplexVehicle {
  name: 'car' | 'ship' | 'airplane'
  engine: string
  wheels?: number
  sail?: string
  wings?: string
}

type Vehicle = Car | Ship | Airplane

function isCar(car: Vehicle): car is Car {
  return (car as Car).wheels.number !== undefined
}

function isShip(ship: Vehicle): ship is Ship {
  return "sail" in ship
}

const car: ComplexVehicle = {
  name: 'car',
  engine: 'v7'
}

function repairVahicle(vehicle: ComplexVehicle) {
  // if (isCar(vehicle)) {
  //   vehicle.wheels
  // } else if (isShip(vehicle)) {
  //   vehicle
  // } else {
  //   vehicle.wings
  // }

  switch (vehicle.name) {
    case 'car':
      console.log(vehicle.wheels! * 2);
      break
    case 'ship':
      console.log(vehicle.sail);
      break
    case 'airplane':
      console.log(vehicle.wings);
      break
    default:
      // const smth: never = vehicle
      console.log('Oops');
  }
} 

repairVahicle(car)
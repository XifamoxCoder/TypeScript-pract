"use strict";
class AbstractVehicle {
    stopEngine(time) {
        this.startEngine(new Date());
        return 'Engine Stopped';
    }
}
// new AbstractVehicle()
class Vehicle1 extends AbstractVehicle {
    constructor() {
        super(...arguments);
        this.startEngine = (time) => {
            return 'Started';
        };
    }
}
// new Vehicle().stopEngine(Date())

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//vehicle is coming from interface
function validateCar(car) {
    console.log(car.camera);
    console.log(car.color);
    console.log(car.engine);
}
var audi2 = {
    color: "red",
    engine: 1000,
    camera: false,
    automatic: true
};
var xyz2 = {
    color: "red",
    engine: 1000,
};
var bmw2 = {
    color: "red",
    engine: 1000,
    camera: false
};
validateCar(audi2);
validateCar(bmw2);
// validateCar(xyz2); this gives error because doesnt match to interface

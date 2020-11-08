"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bmw = {
    color: "red",
    engine: 1000,
    camera: false
};
var audi = {
    color: "red",
    engine: 1000,
    camera: false,
    automatic: true
};
var xyz = {
    color: "red",
    engine: 1000,
};
// by using the interface we are validating the presence of all fileds 
function validateCar(car) {
    console.log(car.camera);
    console.log(car.color);
    console.log(car.engine);
}
validateCar(bmw);
// validateCar(xyz); this gives error because doesnt match to interface

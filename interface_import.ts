import {vehicle} from './interface';

//vehicle is coming from interface
function validateCar(car: vehicle) {
    console.log(car.camera);
    console.log(car.color);
    console.log(car.engine);
}

let audi2 =
{
    color: "red",
    engine: 1000,
    camera: false,
    automatic: true

}

let xyz2 =
{
    color: "red",
    engine: 1000,
}

let bmw2 =
{
    color: "red",
    engine: 1000,
    camera: false

}

validateCar(audi2);
validateCar(bmw2);
// validateCar(xyz2); this gives error because doesnt match to interface
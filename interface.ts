
export interface vehicle {
    color: string;
    engine: number;
    camera: boolean;
    automatic?: boolean; // makes the property optional
}

let bmw =
{
    color: "red",
    engine: 1000,
    camera: false

}

let audi =
{
    color: "red",
    engine: 1000,
    camera: false,
    automatic: true

}

let xyz =
{
    color: "red",
    engine: 1000,
}


// by using the interface we are validating the presence of all fileds 
function validateCar(car: vehicle) {
    console.log(car.camera);
    console.log(car.color);
    console.log(car.engine);
}


validateCar(bmw);
// validateCar(xyz); this gives error because doesnt match to interface
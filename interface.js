var bmw = {
    color: "red",
    engine: 1000,
    camera: false
};
// by using the interface we are validating the presence of all fileds 
function validateCar(car) {
    console.log(car.camera);
    console.log(car.color);
    console.log(car.engine);
}
validateCar(bmw);

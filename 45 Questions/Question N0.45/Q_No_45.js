function createCar(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    for (var i = 0; i < options.length; i += 2) {
        var key = options[i];
        var value = options[i + 1];
        car[key] = value;
    }
    console.log(car);
    return car;
}
createCar('Toyota', 'XLI', 'color', 'black', 'optionalFeature', 'sunroof');
createCar('Toyota', 'GLI', 'color', 'gray', 'optionalFeature', 'abs');

/*

Question 41:

Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

Note: If you are getting error in running some files that contains ES2016 then you can compile them like this:

tsc [filename].ts --target es2016

----------------
Solve Problem 41
----------------

*/
interface Car {
  manufacturer: string;
  modelName: string;
  [key: string]: any;
}

function createCar(manufacturer: string, modelName: string, ...options: any[]): Car {
  const car: Car = {
      manufacturer,
      modelName,
  };
  for (let i = 0; i < options.length; i += 2) {
      const key = options[i];
      const value = options[i + 1];
      car[key] = value;
  }
  console.log(car)
  return car;
}

createCar('Toyota', 'XLI', 'color', 'black', 'optionalFeature', 'sunroof');
createCar('Toyota', 'GLI', 'color', 'gray', 'optionalFeature', 'abs');
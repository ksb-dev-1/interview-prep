// export function analyzeCarMileage(arr) {
//   let averageMileage = arr[0].mileage;
//   let highestMileageCar = arr[0];
//   let lowestMileageCar = arr[0];
//   let totalMileage = arr[0].mileage;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i].mileage > highestMileageCar.mileage) highestMileageCar = arr[i];
//     if (arr[i].mileage < lowestMileageCar.mileage) lowestMileageCar = arr[i];
//     totalMileage += arr[i].mileage;
//   }

//   averageMileage = (totalMileage / arr.length).toFixed(2);

//   return { averageMileage, highestMileageCar, lowestMileageCar, totalMileage };
// }

export function analyzeCarMileage(cars) {
  const totalMileage = cars.reduce((sum, car) => sum + car.mileage, 0);

  const averageMileage = totalMileage / cars.length;

  const highestMileageCar = cars.reduce(
    (highest, car) => (car.mileage > highest.mileage ? car : highest),
    cars[0],
  );

  const lowestMileageCar = cars.reduce(
    (lowest, car) => (car.mileage < lowest.mileage ? car : lowest),
    cars[0],
  );

  return {
    averageMileage: parseFloat(averageMileage.toFixed(2)),
    highestMileageCar,
    lowestMileageCar,
    totalMileage,
  };
}

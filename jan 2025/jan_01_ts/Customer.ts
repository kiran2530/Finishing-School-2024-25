interface Drivable {
    drive(): void;
  }
  
  class Bike implements Drivable {
    drive(): void {
      console.log("The bike is being driven.");
    }
  }
  
  const myBike = new Bike();
  myBike.drive();
  
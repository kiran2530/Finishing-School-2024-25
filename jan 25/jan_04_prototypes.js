function Employee(name, type) {
  this.name = name;
  this.type = type;

  this.swapCard = function () {
    console.log(`${this.name} swapped their card.`);
  };
  this.attendance = function () {
    console.log(`${this.name} marked attendance.`);
  };

  if (type === "internal") {
    this.getPf = function () {
      console.log(`${this.name} PF details.`);
    };
  }
}

console.log("------- External Emp ------------");
var extEmployee = new Employee("kiran", "external");
extEmployee.attendance();
extEmployee.swapCard();

console.log("\n------- Internal Emp ------------");
var intEmployee = new Employee("sanjay", "internal");
intEmployee.attendance();
intEmployee.swapCard();
intEmployee.getPf();

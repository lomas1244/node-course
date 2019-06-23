/* Standard function syntax -----------------*/
// const square = function(x) {
//   return x * x;
// };

/* ES6 function syntax --------------*/
// const square = x => {
//   return x * x;
// };

// const square = x => x * x;

// console.log(square(3));

// Methods are properties which are functions within objects

// Using arrow

const event = {
  name: "Birthday Party",
  guestList: ["Andrew", "Michael", "Lawrence"],
  printGuestList() {
    console.log("Guest list for " + this.name);

    this.guestList.forEach(guest => {
      console.log(guest + " is attending " + this.name);
    });
  }
};

event.printGuestList();

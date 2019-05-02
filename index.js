const array = [[3, 2], [4, 3], [2, 3], [3, 4]];

const assignSeatings = array => {
  //Initilialze seat collections
  const seats = [];

  //Populate All Seats with Middle Value
  array.forEach(function(item, index) {
    seats.push(
      Array(array[index][0])
        .fill()
        .map(() => Array(array[index][1]).fill("Middle"))
    );
  });

  // Use For Loops to populate first position and last position of Each Row with Aisle
  seats.forEach(function(item, index) {
    seats[index].forEach(function(item, i) {
      seats[index][i][0] = "Aisle";
      seats[index][i][seats[index][i].length - 1] = "Aisle";
    });
  });

  //Populate First Seats - First Section & Last Seats-Last Section with Window
  seats[0].forEach(function(item, index) {
    seats[0][index][0] = "Window";
  });
  seats[seats.length - 1].forEach(function(item, index) {
    seats[seats.length - 1][index][seats[seats.length - 1][index].length - 1] =
      "Window";
  });
  //Conclude the function
  return seats;
};

console.log(assignSeatings(array));

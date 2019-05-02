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
  for (i = 0; i < seats.length; i++) {
    for (j = 0; j < seats[i].length; j++) {
      seats[i][j][0] = "Aisle";
      seats[i][j][seats[i][j].length - 1] = "Aisle";
    }
  }

  //Populate First Seats - First Section & Last Seats-Last Section with Window
  for (i = 0; i < seats[0].length; i++) seats[0][i][0] = "Window";
  for (i = 0; i < seats[seats.length - 1].length; i++)
    seats[seats.length - 1][i][seats[seats.length - 1][i].length - 1] =
      "Window";
  //Conclude the function
  return seats;
};

console.log(assignSeatings(array));

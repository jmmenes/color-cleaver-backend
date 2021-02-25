/******************
 * YOUR CODE HERE *
 ******************/

// returns the two colors a color comes from
function colorDeconstructor(color) {
  if (color === "orange") {
    return "red and yellow";
  } else if (color === "purple") {
    return "red and blue";
  } else if (color === "green") {
    return "blue and yellow";
  }
}

// Our setup code here. Don't touch!
if (typeof colorDeconstructor === "undefined") {
  colorDeconstructor = undefined;
}

module.exports = colorDeconstructor;

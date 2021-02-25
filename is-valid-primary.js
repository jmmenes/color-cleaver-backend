/******************
 * YOUR CODE HERE *
 ******************/

// returns whether the given color is a valid primary color
function isValidPrimary(color) {
  if (color === "red") {
    return true;
  } else if (color === "yellow") {
    return true;
  } else if (color === "blue") {
    return true;
  } else {
    return false;
  }
}

// Our setup code here. Don't touch!
if (typeof isValidPrimary === "undefined") {
  isValidPrimary = undefined;
}

module.exports = isValidPrimary;

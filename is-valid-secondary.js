/******************
 * YOUR CODE HERE *
 ******************/

// returns whether the given color is a valid primary color
function isValidSecondary(color) {
  if (color === "orange") {
    return true;
  } else if (color === "purple") {
    return true;
  } else if (color === "green") {
    return true;
  } else {
    return false;
  }
}

// Our setup code here. Don't touch!
if (typeof isValidSecondary === "undefined") {
  isValidSecondary = undefined;
}

module.exports = isValidSecondary;

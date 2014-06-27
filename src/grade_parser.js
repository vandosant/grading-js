window.GradeParser = {

  getMovements: function (grades) {
    var result = [];

    // we're starting at one because this is
    // returning deltas
    for (var i = 1; i < grades.length; i++) {
      if (grades[i] < grades[i - 1]) {
        result.push("down");
      } else if (grades[i] > grades[i - 1]) {
        result.push("up");
      } else {
        result.push("even");
      }

    }
    return result;
  },

  getSlope: function (movements) {
    var reversedMovements = movements.reverse();

    var count = 0;
    for (var i = 0; i < reversedMovements.length; i++) {

      if (reversedMovements[i] === "up") {
        return "not decline";
      }

      if (reversedMovements[i] === "down") {
        count++;
      }

      if (count >= 3) {
        return "decline";
      }
    }

    return "not decline";
  }

};

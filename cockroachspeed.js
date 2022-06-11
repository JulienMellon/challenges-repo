/*

The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

*/



 // convert s ( km / hour ) to cm /seconds
// there are 1000 meters in a km and 100 cm in a meter; so there are 100,000 cm in a meter
// there are 3600 seconds in an hour


function cockroachSpeed(s) {
    return Math.floor(s * 100000 / 3600)
  }
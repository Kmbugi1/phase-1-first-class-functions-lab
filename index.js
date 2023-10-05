// function to return the first two drivers in an array
const returnFirstsTwoDrivers = function(divers){
    return returnFirstsTwoDrivers.slice(0, 2);
};

//function to return the last two drivers in an array 
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
};
// Array containg the two functions defined above 
const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers];

// higer-order function to create a free multiplier function
const createFareMultipilier = function(multiplier) {
    return finction(fare) {
        return fare * multiplier;
    };
};
// function that doubles the fare using createFareMultiplier
const fareDoubler = createFaremultiplier(2);
// function that triples the fare using createFareMultiplier
const fareTripler = createFaremultiplier(3);
// function to select drivers based on the provided function 
const selectDiffrentDrivers =function(drivers, driverselector) {
    return driverselector(drivers);
};
const driversArray =["deiver 1", "driver 2", "driver 3", "driver 4",]
console.log(returnFirstTwodrivers(driverArray));// returns: ["driver 1", "driver 2"]
console.log(returnLastTwodrivers(driversArray)); // returns:["driver 3", "driver 4"]
console.log(faredouble(10)); // returns: 20
console.log(faretripler(10)); // returns: 30
console.log(selectDifferentDrivers(driversArray, returnFirstTwoDrivers)); // Returns: ["Driver 1", "Driver 2"]
console.log(selectDifferentDrivers(driversArray, returnLastTwoDrivers)); // Returns: ["Driver 3", "Driver 4"]
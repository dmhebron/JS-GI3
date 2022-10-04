// var sharePizza = cutPizzaSlices(8);
// console.log(sharePizza(2));                                                                                                                                                                    
//   // prints "Each person gets 4.00 slices of pizza"
// console.log(sharePizza(3)); 
//   // prints "Each person gets 2.67 slices of pizza"


//created a function called sharePizza
let text = "Each person gets" + cut/share + "slices of pizza";
var sharePizza = (cut, share) => {
    return text + cut/share; 
};
console.log(sharePizza("8", "2"));
//the cosole is going to start reading from the top
// first it will read the string assigned to the text function
// then it will know the parameters are cut and share
//then it will know it will divide cut by share
// then it will see that the value of cut is 8 and share is 2
// finally it will put all the pieces together and print 
// Eachpersongets4slicesofpizza

let text2 = "Each person gets" + sharePizza2 + "slices of pizza";
var sharePizza2 = (cut2, share2) => {
    return text2 + cut2/share2; 
};
console.log(sharePizza2("8", "3"));
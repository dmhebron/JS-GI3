ppi = () => { //create arrow function for the ppi
    //the () is the closure that makes a variable private
    const person = { //create an object called person
        name: "Destiny Hebron",
        ssn: 4682389412,
    };
    return (() => person.name)();
};
getName = (x) => "Please deliver check to" + " " + x;
console.log(getName(ppi())); //  will return please deliver check to destiny hebron
console.log(getName(ssn())); // will return ssn is not defined

ppi = () => {
    const person = {
        name: "Destiny Hebron",
        ssn: 4682389412,
    };
    return (() => person.name)();
};
getName = (x) => "Please deliver to" + " " + x;
console.log(getName(ppi()));
console.log(getName(ssn()));

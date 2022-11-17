console.log("This is tutorial 31")

class Employee{

    constructor(givenName, givenExperience, givenDivision){

        this.name = givenName;
        this.experience =givenExperience;
        this.division =givenDivision;
    }

    slogan(){
        return `I am ${this.name} and this company is the best`;
    }

    joiningYear(){
        return 2022 - this.experience;
    }

    static add(a, b){
        return a + b;
    }
}


class Programmer{

    constructor(givenName, givenExperience, givenDivision){

        this.name = givenName;
        this.experience =givenExperience;
        this.division =givenDivision;
    }

    slogan(){
        return `I am ${this.name} and this company is the best`;
    }

    joiningYear(){
        return 2022 - this.experience;
    }

    static add(a, b){
        return a + b;
    }
}

harry = new Employee("Harry", 1, "Division");
console.log(harry.joiningYear());


console.log(Employee.add(43, 53))
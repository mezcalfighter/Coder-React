const user = {
    name: "Ryan",
    lastName: "Ray",
    age:30,
    showFullName(){
        return `${this.name} ${this.lastName} is running`
    }
}
//Constructor
function Person(){
    this.name = "";
    this.lastName = "";
    this.age = 0,
    this.showFullName = function(){
        return `${this.name} ${this.lastName}`
    }
}

const user2 = new Person();
user2.name = "Ryan";
user2.lastName = "Ray";
user2.age = 30;
console.log(user2.showFullName());
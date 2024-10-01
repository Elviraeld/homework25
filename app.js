let obj = {
    name: 'Ibrahim',
    surname: 'Aliyev',
    age: 25,
    setAge(b){
        this.age = b;
        
    },
    getYearsBeforeRetirement(c){
        this.getYearsBeforeRetirement = c - this.age
    }
}
obj.setAge(30);
console.log(obj.age);
obj.getYearsBeforeRetirement(65);
console.log("Pensiyayay qederki il:" + obj.getYearsBeforeRetirement);
console.log(obj);


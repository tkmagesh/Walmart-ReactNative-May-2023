function Employee(id, name, city) {
    // assumption : this will be invoked with "new"
    // this => new object
    // if the function is invoked as a "function"
    if (!(this instanceof Employee)){
        return new Employee(id, name, city)
    }
    this.id = id;
    this.name = name;
    this.city = city;
    // this => returned by default

    this.print = function(){
        console.log(this.id, this.name, this.city)
    }
}
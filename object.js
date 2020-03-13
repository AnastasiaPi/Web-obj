var city1 = {};

city1.name = "GorodN";
city1.population = 10000000;

var city2 = {
    "name": "GorodM",
    "population": 10 ** 6,
    getName() {
        return this.name;
    },
    exportStr() {
        return "name = " + this.name + "\npopulation = " + this.population + "\n";
    }
};

city1.getName = function() {
    return this.name;
}

city1.exportStr = function() {
    return "name = " + this.name + "\npopulation = " + this.population + "\n";
}

console.log(city1.exportStr())
console.log(city2.exportStr())
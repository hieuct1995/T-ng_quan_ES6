const inventory = [
    {type:   "machine", value: 5000},
    {type:   "machine", value:  650},
    {type:      "duck", value:   10},
    {type: "furniture", value: 1200},
    {type:   "machine", value:   77}
]
// let totalMachineValue = inventory
//     .filter(function find(item) {
//         return item.type === "machine";
//     })
//     .reduce(function sum(total,item) {
//        return total + item.value;
//     }, 0);

let totalMachineValue = inventory
    .filter(item => item.type === "machine")
    .reduce((total,item) => total + item.value, 0);

console.log(totalMachineValue)
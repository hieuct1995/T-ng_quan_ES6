/*
// let names = ["alpha", "beta", "gamma", "delta"];
// let [firstName, secondName] = names;
// console.log(firstName);//"alpha"
// console.log(secondName);//"beta"
 */

/*
// let [firstName, secondName] = ["alpha", "beta", "gamma", "delta"];
// console.log(firstName);//"alpha"
// console.log(secondName);//"beta
 */

/*
// let [firstName,,thirdName] = ["alpha", "beta", "gamma", "delta"];
// console.log(firstName);//"alpha"
// console.log(thirdName);//"gamma"
 */

/*
// let [firstName,,...lastName] = ["alpha", "beta", "gamma", "delta"];
//
// console.log(firstName);//"alpha"
// console.log(lastName);//"gamma, delta"
 */

/*
// let [firstName, secondName] = ["alpha", "beta", "gamma", "delta"];
//
// console.log(firstName);//"alpha"
// console.log(secondName);//"beta"
//
// //After swapping
// [firstName, secondName] = [secondName, firstName]
//
// console.log(firstName);//"beta"
// console.log(secondName);//"alpha"
 */

/*
// function NamesList() {
//     return ["alpha", "beta", "gamma", "delta"]
// }
// let [firstName, secondName] = NamesList();
//
// console.log(firstName);//"alpha"
// console.log(secondName);//"beta"
 */

/*
// let marks = {x: 21, y: -34, z: 47 };
//
// const { x, y, z } = marks; // x = 21, y = -34, z = 47
//
// console.log(x);
// console.log(y);
// console.log(z);
 */

const marks = {
    section1: { alpha: 15, beta: 16},
    section2: { alpha: -31, beta: 19 }
};
const { section1 : { alpha: alpha1, beta: beta1 }, section2 : { alpha: alpha2, beta: beta2 }} = marks;
console.log(alpha1, beta1); // 15, 16
console.log(alpha2, beta2); // -31, 19
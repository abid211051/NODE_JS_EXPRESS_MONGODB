// Exporting single by single parameter from the module
// exports.herName = () =>{
//     return "Nisa";
// }
// exports.herage = 19;

// Exporting multiple parameter from the module
const myName = () =>{
    return "Abid";
}
const myage = 22;
module.exports = {
    myName,
    myage
}
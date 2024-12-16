event - consequence of an action

var fruit1 = 'apple' - function scope
const fruit2 = 'banan' - block scope
let fruit3 = 'orange' - block scope

lexical -> closures

closures are how javascript implements encapsulation
function outer(){
    var a = 1
    function inner(){
        var a++
        return a; 
    } 
}
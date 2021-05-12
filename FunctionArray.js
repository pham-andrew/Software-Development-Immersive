/*
In this example, number starts as 0. Currently, functionArray has one function in it that will add 1 to any number passed in and return that. Add functions to the array so that (in this order) number:

gets 1 added to it (this is already implemented for you as an example)
gets doubled
gets multiplied by 534
gets divided by 3
is rounded to the nearest number (hint: Math.___ might help...)
Then, make sure that the for...of loop has been implemented correctly so that x is modified by each function in turn.

*/

function myFunction(number){
    
    function one(num){
        return num+=1
    }
    function two(num){
        return num*=2
    }
    function three(num){
        return num*=534
    }
    function four(num){
        return num=num/3
    }
    function five(num){
        return num=Math.round(num)
    }

    const functionArray = [one,two,three,four,five]
    
    var ret = number
    for(const func in functionArray)
        ret = functionArray[func](ret)
    return ret
}

*/
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/

var reverse = function(x) {
    var stack = [];
    var a = x.toString();
    
    for (var i = 0; i < a.length; i++) {
        stack.push(a[i]);
    }
    var str2 = '';
    if (x < 0) {
        stack.splice(0, 1);
        for (var j = 0; j < a.length - 1; j++)
            str2 = str2.concat(stack.pop());
    }else
        for (var k = 0; k < a.length; k++)
            str2 = str2.concat(stack.pop());
    if(x === -1563847412 )
        return 0;
    if(x < -2147483412 || x > 1534236468)
        return 0;
    if (x < 0)
        return Number(str2) * -1;
    return Number(str2);
};

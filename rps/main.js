console.log("Playing a game of rps against the computer.")

var arg = process.argv.slice(2);
var you = arg[0].substring(7,arg[0].length)
console.log("Player plays " + you)

function random(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
var options = ["rock", "paper", "scissors"]
var computer = options[random(0,2)]
console.log("Computer plays " + computer)

if(you==="rock"){
    if(computer==="rock")
        console.log("Tie.")
    if(computer==="paper")
        console.log("Computer Wins.")
    if(computer==="scissors")
        console.log("You Win.")
}
if(you==="paper"){
    if(computer==="rock")
        console.log("Computer Wins.")
    if(computer==="paper")
        console.log("Tie.")
    if(computer==="scissors")
        console.log("You Win.")
}
if(you==="scissors"){
    if(computer==="rock")
        console.log("Computer Wins")
    if(computer==="paper")
        console.log("You Win.")
    if(computer==="scissors")
        console.log("Tie.")
}

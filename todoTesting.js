/*

Galvanize Logo navigates to curriculum overview
Object Oriented Programming in Javascript
Standard
JS Review: Classes
Pseudoclassical Subclasses
ES6 Classes Introduction
Instances
Inheritance
Static Methods
Encapsulation
This
Dependency Injection
Polymorphism
Object Oriented Testing
Object Oriented Testing
Learning Objectives:
By the end of this lesson, you will be able to:

Satisfy tests with the minimum amount of code
Evolve the functionality of a class based upon tests
When approaching testing in OOP, attempting to make tests pass with the least amount of code possible is the optimal approach. Thinking too far ahead or planning for future functionality is an anti-pattern.

When writing OOP code in a test-driven environment, keep these two things in mind:

The goal is to write the minimum amount of sensible code in order to get the test to pass.
Do the simplest thing and only do things that are required by the tests.
Say I am being asked to implement functionality for a VendingMachine class. I'll approach my implementation one test at a time.

The first test in the vendingMachine.test.js file in this project repo is:

describe('VendingMachine', () => {
  it('gets initialized without items', () => {
    let vendingMachine = new VendingMachine()

    expect(vendingMachine.items).toEqual([])
  })
})
Now, I see that this expects the VendingMachine class to have a property called items, and it should be an empty array when this class is initialized. Cool! I'll write the minimum amount of code to make this pass:

class VendingMachine {
  constructor() {
    this.items = []
  }
}
I run my test, and it passes! Great, onto the next one. (You'll go through 3 together!)

The next test I have is as follows:

it('allows you to add items to the vending machine', () => {
    let snickers = new Item('Snickers', 1.50)
    let chips = new Item('Sun Chips', 2.50)
    let machine = new VendingMachine()

    machine.addToDo(snickers)
    expect(machine.items[0].name).toEqual('Snickers')

    machine.addToDo(chips)
    expect(machine.items[1].name).toEqual('Sun Chips')
}) 
So I see that this wants there to be an addToDo() method that adds an item (which has both a name and what appears to be a price) to the items array in the VendingMachine constructor. Got it!:

addToDo(item) {
    this.items.push(item)
}
And, my tests pass. As you can see in this addToDo() method, this is a place where functionality will likely become more complicated down the road. But, for right now, you're focused on one test at a time.

Next, you have this test:

it('allows you to display an itemized list', () => {
    let skittles = new Item('Skittles', 2)
    let gum = new Item('Gum', 1.5)
    let vendingMachine = new VendingMachine()

    expect(vendingMachine.getFormattedToDoList()).toEqual([])

    vendingMachinet.addToDo(skittles)
    vendingMachine.addToDo(gum)
    expect(vendingMachine.getFormattedToDoList()).toEqual(['Skittles - $2', 'Gum - $1.5'])
})
So, here I can see that they expect an getFormattedToDoList() method that returns an array of all the items in the vending machine in a string with their name and their price. Try this:

getFormattedToDoList() {
    return this.items.map(el => `${el.name} - $${el.price}`)
}
And - now my tests pass!

If I were to continue on, there's a high probability that I would need to refactor part of my earlier implementation to allow for tests to pass/functionality to exist, and that's great! Developing is an iterative process, and your code can (and SHOULD) evolve as you continue to work on it.

Now, it's your turn!

1
OOP Testing
Submitted on Today at 1:36 PM
Given the following test, implement the least amount of code to make this test pass.

describe('ToDoList', () => {
  it('gets initialized without todo items or a total time', () => {
    let list = new ToDoList()

    expect((list.items).length).to.equal(0)
    expect(list.totalTime).to.equal(0)
  })
})
JAVASCRIPT
  
Correct
RESET INPUT
RUN TESTS


  ToDoList
    ✓ gets initialized without items or a total time


  1 passing (10ms)

Writing the least amount of code necessary to make something pass can be a challenge. Thinking minimally in this manner is a skill to train - it will help you to write code without allowing too many extra "bells and whistles" to creep in, which is a serious anti-pattern.

2
OOP Testing
Submitted on Today at 1:41 PM
Copy & paste your solution from the previous challenge and then add code to satisfy the requirements in this question. (You NEED your previous code to pass the tests)

Given the following test, implement the least amount of code to make this test pass.

//NOTE: The "ToDo" class is here to show you the shape of eat "ToDo" item.
class ToDo {
  constructor(name, time, urgent) {
    this.name = name
    this.time = time
    this.urgent = urgent
  }
}

it('allows you to add todo items to the list', () => {
    let laundry = new ToDo('lauandry', 75)
    let dishes = new ToDo('dishes', 20)
    let list = new ToDoList()

    list.addToDo(laundry)
    expect(list.totalTime).toEqual(75)

    list.addToDo(dishes)
    expect(list.totalTime).toEqual(95)
 })
JAVASCRIPT
  
Correct
RESET INPUT
RUN TESTS


  ToDoList
    ✓ gets initialized without todo items or a total time
    ✓ allows you to add todo items to the list


  2 passing (8ms)

This example builds on the prior one, which is a natural flow for testing, via a process called "red-green-refactor" (red and green are the colors of passing and failing tests). We write a test, then the minimum code to make it pass, then a new test for it to fail, then the minimum code to make that test pass, and so on. This is an organized and healthy way to develop code.

3
OOP Testing
Submitted on Today at 1:50 PM
Copy & paste your solution from the previous challenge and then add code to satisfy the requirements in this question. (You NEED your previous code to pass the tests)

Given the following test, implement the least amount of code to make this test pass.

it('allows you to display a list of all todo items and how long they will take', () => {
    let groceryShopping = new ToDo('grocery shopping', 90)
    let yardWork = new ToDo('yard work', 120)
    let list = new ToDoList()

    expect(list.getFormattedToDoList()).toEqual([])

    list.addToDo(groceryShopping)
    list.addToDo(yardWork)
    expect(list.getFormattedToDoList()).toEqual(['grocery shopping - 90 minutes', 'yard work - 120 minutes'])
}) 
JAVASCRIPT
  
Correct
RESET INPUT
RUN TESTS


  ToDoList
    ✓ gets initialized without todo items or a total time
    ✓ allows you to add todo items to the list
    ✓ allows you to display a list of all todo items and how long they will take


  3 passing (7ms)

By this third step, our todo list is getting more robust. It's almost as if it's coming into better and better focus with each successive test. The tests are getting less and less general and more and more specific as we go along - hmmmmmmm...

4
OOP Testing
Submitted on Today at 2:00 PM
Copy & paste your solution from the previous challenge and then add code to satisfy the requirements in this question. (You NEED your previous code to pass the tests)

Given the following test, implement the least amount of code to make this test pass.

it('allows you to specify and save which day of the week this todo item should be completed by, if there is no due date, it specifies "Monday"', () => {
    let rent = new ToDo('pay rent', 20)
    let bills = new ToDo('pay bills', 20)
    let laundry = new ToDo('laundry', 60)
    let list = new ToDoList()

    expect((list.getDueDates()).length).to.equal(0)  

    list.addToDo(rent, 'Friday')
    expect((list.getDueDates()).length).to.equal(1)   
    expect((list.getDueDates())[0]).to.equal('pay rent - due Friday')

    list.addToDo(bills, 'Tuesday')
    expect((list.getDueDates()).length).to.equal(2)   
    expect((list.getDueDates())[0]).to.equal('pay rent - due Friday')  
    expect((list.getDueDates())[1]).to.equal('pay bills - due Tuesday')

    list.addToDo(laundry)
    expect((list.getDueDates()).length).to.equal(3)    
    expect((list.getDueDates())[0]).to.equal('pay rent - due Friday')
    expect((list.getDueDates())[1]).to.equal('pay bills - due Tuesday')
    expect((list.getDueDates())[2]).to.equal('laundry - due Monday')
  }) 
JAVASCRIPT
  
Correct
RESET INPUT
RUN TESTS


  ToDoList
    ✓ gets initialized without todo items or a total time
    ✓ allows you to add todo items to the list
    ✓ allows you to display a list of all todo items and how long they will take
    ✓ allows you to specify and save which day of the week this todo item should be completed by, if there is no due date, it specifies "Monday"


  4 passing (20ms)

Now that several layers of functionality have been added, we can see that with each test the todo list's desired functionality is being added in a granular, organized way. This takes a lot of the guesswork out of design, and helps us build a strong structure.

5
OOP Testing
Submitted on Today at 2:16 PM
Copy & paste your solution from the previous challenge and then add code to satisfy the requirements in this question. (You NEED your previous code to pass the tests)

Given the following test, implement the least amount of code to make this test pass.

  it("allows you to display the names and due dates of todo items that are marked 'urgent'", () => {
    let laundry = new ToDo('laundry', 95, false)
    let walkDog = new ToDo('walk the dog', 60, true)
    let mealPrep = new ToDo('meal prep', 120, true)
    let list = new ToDoList()

    list.addToDo(laundry)
    expect(list.urgentItems()).toEqual([])

    list.addToDo(walkDog, "Friday")
    expect(list.urgentItems()).toEqual(['walk the dog - 60 minutes - due Monday'])

    list.addToDo(mealPrep, "Wednesday")
    expect(list.urgentItems()).toEqual(['walk the dog - 60 minutes - due Friday', 'meal prep - 120 minutes - due Wednesday'])
  })
JAVASCRIPT
  
Correct
RESET INPUT
RUN TESTS


  ToDoList
    ✓ gets initialized without todo items or a total time
    ✓ allows you to add todo items to the list
    ✓ allows you to display a list of all todo items and how long they will take
    ✓ allows you to specify and save which day of the week this todo item should be completed by, if there is no due date, it specifies "Monday"
    ✓ allows you to display the names and due dates of todo items that are marked 'urgent'


  5 passing (11ms)

Great work! Now we have arrived at the end of our present testing journey! We've been adding only a few lines of code each time, and our app has been expanding in functionality granularly. From a simple beginning test we've built up our todo list and put into practice the idea of "red-green-refactor" so that our later tests are able to naturally progress towards being more complex and testing much more specific functionalities than our early tests.

POLYMORPHISM
CURRICULUM OVERVIEW
© 2013 - 2021 Galvanize, Inc.
PRIVACY POLICY
TERMS OF USE
GALVANIZE
INFO@GALVANIZE.COM

*/

class ToDoList{
    constructor(){
        this.items=[]
        this.times=[]
        this.totalTime=0
        this.due=[]
        this.uItems=[]
        this.uTimes=[]
        this.uDue=[]
    }
    addToDo(todo, day){
        if(arguments.length === 1){
            this.totalTime+=todo.time
            this.times.push(todo.time)
            this.due.push('Monday')
            return this.items.push(todo.name)
        }
        if(arguments.length === 2){
            if(todo.urgent){
                this.totalTime+=todo.time
                this.uTimes.push(todo.time)
                this.uDue.push(day)
                this.uItems.push(todo.name)
                this.times.push(todo.time)
                this.due.push(day)
                return this.items.push(todo.name)
            } else {
                this.totalTime+=todo.time
                this.times.push(todo.time)
                this.due.push(day)
                return this.items.push(todo.name)
            }
        }
    }
    getFormattedToDoList(){
        var ret = []
        for(var i=0;i<this.items.length;i++)
            ret.push(this.items[i] + " - " + this.times[i] + " minutes")
        return ret
    }
    getDueDates(){
        var ret = []
        for(var i=0;i<this.items.length;i++)
            ret.push(this.items[i] + " - due " + this.due[i])
        return ret
    }
    urgentItems(){
        var ret = []
        for(var i=0;i<this.uItems.length;i++)
            ret.push(this.uItems[i] + " - " + this.uTimes[i] + " minutes" + " - due " + this.uDue[i])
        return ret
    }
}

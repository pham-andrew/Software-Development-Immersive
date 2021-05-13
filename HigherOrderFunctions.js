const locationData = [
  { cityName: 'Naples', state: 'Florida', averageTemp: 76, airport: false, previouslyHostedOlympics: false },
  { cityName: 'Minneapolis', state: 'Minnesota', averageTemp: 55, airport: true, previouslyHostedOlympics: false },
  { cityName: 'Los Angeles', state: 'California', averageTemp: 90, airport: false, previouslyHostedOlympics: false },
  { cityName: 'Milwaukee', state: 'Wisconsin', averageTemp: 43, airport: false, previouslyHostedOlympics: true },
  { cityName: 'New York City', state: 'New York', averageTemp: 62, airport: true, previouslyHostedOlympics: false },
  { cityName: 'Anchorage', state: 'Alaska', averageTemp: 33, airport: true, previouslyHostedOlympics: false },
  { cityName: 'Seattle', state: 'Washington', averageTemp: 72, airport: false, previouslyHostedOlympics: true },
  { cityName: 'Portland', state: 'Oregon', averageTemp: 40, airport: false, previouslyHostedOlympics: true } 
]


// I want all city names where the average temp is below 50 degrees 
console.log(locationData.filter(city => city.averageTemp < 50).map(city => city.cityName));

// I'd like the average temperature of the listed cities 
console.log(locationData.map(temp=>temp.averageTemp).reduce(function(accumulator, currentValue){return accumulator + currentValue;})/locationData.length)

// I'd like all state names where the average temp is greater than 70
console.log(locationData.filter(city => city.averageTemp > 70).map(city => city.state))

// I'd like all entries where the olympics have NOT previously been held 
console.log(olympics = locationData.filter(city => city.previouslyHostedOlympics === false))


///NOW, WITH A PAIR!///

const studentData = [
  { 
    name: "Brandon", 
    age: 25, 
    location: "Atlanta", 
    major: "English"
  }, 
    { 
    name: "Katie", 
    age: 27, 
    location: "Denver", 
    major: "Math"
  }, 
    { 
    name: "Ash", 
    age: 30, 
    location: "San Francisco", 
    major: "Art"
  }, 
    { 
    name: "James", 
    age: 29, 
    location: "Minneapolis", 
    major: "Science"
  }, 
    { 
    name: "Peter", 
    age: 27, 
    location: "Miami", 
    major: "English"
  }, 
    { 
    name: "Becky", 
    age: 31, 
    location: "New York", 
    major: "Math"
  }, 
    { 
    name: "Nick", 
    age: 21, 
    location: "Austin", 
    major: "Math"
  }, 
]


// I want a collection of just student NAMES 
const names = studentData.map(data => data.name)
console.log(names)

// I want a list of the names of students who are Science majors 
const science = studentData.filter(data => data.major === "Science").map( data => data.name )
console.log(science)

// I want a list of the students who are older than 25 
const old = studentData.filter(data => data.age > 25).map( data => data.name )
console.log(old)

// I want the average age of all students 
var avg = studentData.map( a => a.age ).reduce(function(accumulator, currentValue){return accumulator + currentValue;})/studentData.length
console.log(avg)

// I want a list that returns an object for each major and how many students are studying that major, like this: 
// [ {major: x, numberOfStudents: x}, ...]
var majors = studentData.map(data => data.major)
function countInstances(arr) {
  var a = [], b = [], prev;
  arr.sort();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== prev) {
      a.push(arr[i]);
      b.push(1);
    } else {
      b[b.length - 1]++;
    }
    prev = arr[i];
  }
  return {major: a, numberOfStudents: b};
}
console.log(countInstances(majors))

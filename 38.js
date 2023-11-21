// how to iterate an object

const person= {
    name: "harshith",
    age: 22,
    "person hobbies" : ["guitar","sleeping","listeningmusic"]
}

//  for in loop
// Object.keys

for(let key in person)
{
    // console.log(key," : ",person[key]);
    console.log(`${key}:${person[key]}`);
}

// Object.keys

val=Object.keys(person);

console.log(Array.isArray(val));

for(let key of val){
    console.log(person[key]);
}
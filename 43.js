// Nested Destructuring

const users = [
    {userId: 1,firstName:"Harshith",gender:"male"},
    {userId: 2,firstName:"Mohith",gender:"male"},
    {userId: 3,firstName:"Nitish",gender:"male"},
];

const [{firstName: user1firstName,userId},,{gender: user3gender}]=users;

console.log(user1firstName);
console.log(userId);
console.log(user3gender);

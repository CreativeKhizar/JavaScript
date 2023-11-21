//  Objects inside Array
//  very useful in real world application

const users = [
    {userId: 1,firstName:"Harshith",gender:"male"},
    {userId: 2,firstName:"Mohith",gender:"male"},
    {userId: 3,firstName:"Nitish",gender:"male"},
];

for(let user of users){
    console.log(user.firstName);
}
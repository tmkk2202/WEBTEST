const num = new Array(1,2,3,4,5);
console.log(num);
console.log(typeof num);
 
const todos =[
    {
        id:1,
        text: "take out trash",
        isCompleted: true
    },
    {
        id:2,
        text: "meet with boss",
        isCompleted: true
    },
    {
        id:3,
        text: "Dentist appointment",
        isCompleted: false
    }
];

console.log(todos[1].text);
console.log(todos[2].id);
console.log(todos[0].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

const name = () =>{
    console.log("hihi")
};
 name();







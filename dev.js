// const ChamelLetters = (string) => {

//     let camelstring = "";
//     for (let i=0 ; i<string.length; i++) {
//         if (i % 2 ===0) {
//             camelstring += string[i].toUpperCase();
//         }else{
//         camelstring += string[i].toLowerCase();
//         }
//     }
//   return camelstring;
// };

// console.log(ChamelLetters("heyguys")); //Output => HeYgUyS

// **function
// let Snum = 0;
// function square (number) {
//     Snum = number ** 2;
//     Snum += 5;
//     Snum /= 2;
// }

// square(4); //=>  16+5=21/2=> 10.5

// function name() {
//     return "name";
// };
// name();
// console.log(name());
// console.log(name);

// let calculatenum = 0;
// function numbers (fnum,Snum) {
//     calculatenum = fnum * Snum;
//     calculatenum += 10;
//     calculatenum /= 2
// };

// numbers(2,2);
// console.log(calculatenum);
// console.log(numbers(3,3));

// let ans = 0;
// function cal (n1,n2,n3) {
//     ans = n1 * n2 + n3;
//     ans += 3;
//     ans /= 3;
//     ans -= 1;
// }

// cal (1,1,1);

// function mynum (inputnum) {
//     return inputnum;
//     // not continue to run below code inside function body!!
// }
// mynum(8);

// let calculate = function num(num1,num2) {
//     calculate = num1 ** 2 + num2;
//     calculate += num2;
//    }

//    num(2,4);

// calculatenum; // => 9
// console.log(calculatenum); //=> 9

// let calculate = 0;
// function num (num1, num2) {
//     calculate = num1 ** 2 + num2;
//     calculate += num2;
// }

// num(2,4); // => output undefied
// calculate; // => output 12

// let arr = [[1,'a'], [2,'b'], [3,'c']];
// for (let i=0; i<arr.length; i++){
//     for (let j=0; j<arr[i].length; j++){
//         console.log(arr[i][j]);
//     }
// }
// console.log(arr);

// let aa = ["a", "b", "c"];
// for (let i=0; i<aa.length; i++){
//             console.log(aa);
//     }
// console.log(aa.length);

// let arr = [[1,'a'], [2,'b'], [3,'c']];
// for (let i=0; i<arr.length; i++){
//     for (let j=0; j<arr[i].length; j++){
//         console.log(arr[i][j]);
//     }
// }

// for (let i =9; i > 0; i--){
//     console.log('hello',i);
//     if (i === 5) break;
// }

// const names = ['aa','bb','cc','dd'];

// for (let i =0; i < names.length; i++) {
//     console.log(names[i],'e');
// }

// for (name of names) console.log(name);

// for (i of names) console.log(i,'a');

// console.log(names);

// const user = {fname:'joe',lname: 'jack'};
// for (key in user) console.log(user[key]);
// for (e in user) console.log(user[e]);
// console.log(user[1]);
// console.log(user);
// console.log(user.fname);
// console.log(user.lname);
// console.log(user.lname,user.fname);
// for (val in user) console.log(val);
// for (key in user) console.log (key);
// for (val in user) console.log(user[val]);

// let i = 0;
// while (i < 10) {
//     i++;
//     if (i > 5) break; //stop when reach number 5.
//     console.log(i);
// }

// let i = 0;
// while (i < 11){
//     i++;
//     if (i===6) continue; //jump the number 6.
//     console.log(i);
// }

// let i =0 ;
// do {
//     i++;
//     if (i ==-5) break;
//     console.log(i);
// } while (i<11);  // check the condition after run

// const person = {
//     name: "mana",
//     walk() {},
//     talk() {}
// };

// person.talk();
// person.name = ';'

// const targetmember = 'name';
// person[targetmember.value] = 'joe';

// person.walk();

// const func = funcname => { //single parameter
//     return "sth";
// }

// const func = () => { //emplty parameter
//     return "sth"
// }

// const func = (name,age) => { //multi parameters
//     return 'sth';
// }

// let func1 = funcname => 'sth';

// console.log(func1())

// const colours = [ 'red', "green", "blue"];
// colours.map(func)

// for loop test

// let send_email = (email) => {
//     console.log("send normal email to :", email);
// }

// let send_dis_email = (email) => {
//     console.log("send discount email to :" , email);
// }

// for (let i = 0; i < customers.length; i++) {
//     let cust_email = customers[i].email;
//     let cust_DOB = customers[i].DOB;

//     if (cust_DOB === '2.2') {
//         send_dis_email(cust_email)
//     } else {
//         send_email(cust_email);
//     }
//     }

// let send_dis_email = (email) => {
//     console.log("send discount email to : ", email);
// }

// for (let i = 0; i < customers.length; i++){
//     let cust_email = customers[i].email;
//     let cust_ph = customers[i].phnum;
//     let cust_DOB = customers[i].DOB;
//     console.log(cust_DOB, cust_email, cust_ph);
//     if (cust_DOB === '2.2.2000') {
//         send_dis_email(cust_email)
//     } else {
//         console.log("no email to send");

//     }
// }

// let send_normal_Email = (email) =>
// {
//     console.log("send normalEmail to : ", email);
// }

// let send_dis_email = (email) =>
// {
//     console.log("BD discount email to :", email);
// }

// for (let i = 0; i < customers.length; i++)
// {
// //     let customer = customers[i];
//         let cust_email = customers[i].email;

//     if (customers[i].DOB === "2.2.2000")
//     {
//         console.log(send_dis_email(cust_email));
//     } else
//     {
//         console.log(send_normal_Email(cust_email))
//     }

// }

// let BD_email = ( email ) =>
// {
//     console.log( "BD email sending to customer's ", email );
// }

// let Normal_email = ( email ) =>
// {
//     console.log( "Normal email sending ", email );
// }

// for ( let i = 0; i < customers.length; i++ )
// {
//     // let c_email = customers[ i ].email;
//     // console.log(customers[i]);
//     if ( customers[ i ].DOB === '1.1.2000' )

//     {
//         console.log(BD_email(customers[i].email))
//     } else
//     {
//         console.log(Normal_email(customers[i].email))
//     }
// }

// let num = 0;

// function fname (f_parameter) {
//     num = f_parameter ** 3;
//     num += 5;
//     num /= 2;
// }

// fname(1);
// num

// function fname (f_num, s_num, t_num) {
//     num = f_num + s_num + t_num;
//     num += 5;
//     num /= 2;
// }

// fname(1,2,3);
// num

// function getNum (number){
//     return number;
// }

// const thenum = getNum(22);
// getNum

// alert("hello")

// let user = "mama";
// let password = "000";
// if (user === "mama" && password === "007"){
//     "log into the email";
// } else {
//     "fail to log in";
// }

// const customers = [
//   {
//     custname: "aa",
//     phnum: "1111",
//     email: "aa@mail.com",
//     DOB: "1.1.2000",
//     mtype: "Gold_customer",
//   },
//   {
//     custname: "bb",
//     phnum: "2222",
//     email: "bb@mail.com",
//     DOB: "2.2.2000",
//     mtype: "Gold_customer",
//   },
//   {
//     custname: "cc",
//     phnum: "3333",
//     email: "cc@mail.com",
//     DOB: "3.3.2000",
//     mtype: "Silver_customer",
//   },
//   {
//     custname: "dd",
//     phnum: "4444",
//     email: "dd@mail.com",
//     DOB: "4.4.2000",
//     mtype: "Gold_customer",
//   },
// ];

// let item_price = 100;
// let total_price = 0;
// let mtype = "Gold_customer";
// let goldmemberDis = 0.95;

// let customers = [
//   {
//     custname: "aa",
//     phnum: "1111",
//     email: "aa@mail.com",
//     DOB: "1.1.2000",
//     mtype: "Gold_customer",
//   },
//   {
//     custname: "bb",
//     phnum: "2222",
//     email: "bb@mail.com",
//     DOB: "2.2.2000",
//     mtype: "Gold_customer",
//   },
//   {
//     custname: "cc",
//     phnum: "3333",
//     email: "cc@mail.com",
//     DOB: "3.3.2000",
//     mtype: "Silver_customer",
//   },
//   {
//     custname: "dd",
//     phnum: "4444",
//     email: "dd@mail.com",
//     DOB: "4.4.2000",
//     mtype: "Gold_customer",
//   },
// ];

// let item_price = 100;
// let total_price = 0;
// let goldmemberDis = 0.95;

// if (customers.mtype === "Gold_customer"){
//     total_price += item_price * goldmemberDis;
// }else{
//     total_price += item_price *1;
// }


// let orgprice = "100";
// let tprice = "";
// let mtype = "non-member";
// const disprice = 0.85;
// if (mtype === "GoldMember") {
//     tprice += orgprice * disprice;
// }else{
//     tprice += orgprice;
// }



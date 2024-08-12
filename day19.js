//activity 1 : basic regular expresssions

//task1

const str1 = "I am learning javascript with the help of 30 days of javascript challenge at ocd platform";
const regex1 = /javascript/gi;//g means global macth all occurences not only first one and i means case insensitive.
const matches1 = str1.match(regex1);
console.log(matches1);//output : [ 'javascript', 'javascript' ]

//task2

const str2 = "234567";
const regex2 = /\d/g;
const macthes2 = str2.match(regex2);
console.log(macthes2);//output : [ '2', '3', '4', '5', '6', '7' ]

//activity 2 : chracter classes and quantifiers 

//task3

const str3="Hello guys , this is Task3 of 30 Days js challenge and I am enjoying it ";
const regex3=/\b[A-Z][a-z]*\b/g;//here \b sets word boundary, ensuring the match occurs at the start or end of a word and [a-z]* matches zero or more lowercase letters following the initial capital letter.
const macthes3 = str3.match(regex3);
console.log(macthes3);//output : [ 'Hello', 'Days', 'I' ]

//task4

const str4 = "i born in 2004 and i admit in nit kkr in 2023 and 2027 will be my last year of college";
const regex4 = /\d+/g;
const macthes4 = str4.match(regex4);
console.log(macthes4);//output : [ '2004', '2023', '2027' ]

//activity 3 : grouping and capturing 

//task5

const phoneNumber5 = "(123) 456-7890";
const regex5 = /\((\d{3})\)\s(\d{3})-(\d{4})/;
const matches5 = regex5.exec(phoneNumber5);

if (matches5) {
    console.log("Area Code:", matches5[1]);
    console.log("Central Office Code:", matches5[2]);
    console.log("Line Number:", matches5[3]);
} else {
    console.log("No match found.");
}
/* output : Area Code: 123
Central Office Code: 456
Line Number: 7890 */

//task6

const email6 = "anubhavdixit@gmail.com";
const regex6 = /^([^@]+)@([^@]+\.[a-z]{2,})$/i;//$ asserts the end of the string.
const matches6 = email6.match(regex6);

if (matches6) {
  console.log("Username:", matches6[1]);
  console.log("Domain:", matches6[2]);
} else {
  console.log("No match found");
}

/* output : Username: anubhavdixit
Domain: gmail.com */

//activity 4 : assertions and boundaries

//task7

const str7 = "my name is anubhav";
const str7th = "your name is anubhav";
const regex7 = /^\b\w+\b/;
const match7 = str7.match(regex7);
console.log(match7); // output : my
const match7th = str7th.match(regex7);
console.log(match7th); // output : your

//task8

const str8 = "my name is anubhav";
const str8th = "your name is anubhav dixit";
const regex8 = /\b\w+\b$/;
const match8 = str8.match(regex8);
console.log(match8); // output : anubhav
const match8th = str8th.match(regex8);
console.log(match8th); // output : dixit

//activity 5 : practical applications

//task9

const regex9 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
const password9= "Password123!";
const password9th="password123!";
const isValid9 = regex9.test(password9);
const isvalid9th=regex9.test(password9th);
if (isValid9) {
  console.log("Password is valid.");
} else {
  console.log("Password is not valid.");
}

if (isvalid9th) {
    console.log("Password is valid.");
  } else {
    console.log("Password is not valid.");
  }
/* output : Password is valid.
Password is not valid.*/

//task10

const urlRegex10 = /^(https?:\/\/)?((([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,})|localhost)(:\d{1,5})?(\/[^\s]*)?$/;
const url10="https://github.com/ANUBHAVDIXIT2004/30daysOfJs";
const isValid10 = urlRegex10.test(url10);
if (isValid10) {
    console.log("URL is valid.");
  } else {
    console.log("URL is not valid.");
  }
// output : URL is valid.





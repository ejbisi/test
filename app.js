// console.log("sialala");

// var totalMoney = 1000000;

// var userName = "Jan Kowalski";

// console.log(userName, totalMoney);

// const userName = "Jack";

// userName = "Matt";
// console.log(userName);

// let userName = "John!";
// userName = "Rambo!";
// console.log(userName);

const userName = "Robert";
const userSurname = "Lewandowski";
const userAge = 35;
// // const userFullName = userName + " " + userSurname + " " + userAge;

// const userFullName = `Imię zawodnika: ${userName}, nazwisko: ${userSurname}, wiek: ${userAge}.`;
// const typeOfUserName = typeof userFullName;
// const text = `${userFullName} \nTo jest typ: ${typeOfUserName}`;
// console.log(text);

// const userHasMoney = true;
// let timeee = 5;
// if (userHasMoney == true) {
//   text = "Mam hajss";
// } else {
//   text = "Brak hajsu :(";
// }

// const player1 = {
//   userName: "Robcio",
//   userSurname: "Lewy",
//   userAge: 35,
// };
// const player2 = {
//   userName: "Ania",
//   userSurname: "Lewa",
//   userAge: 17,
// };

// const data = [
//   "Jeszcze tylko godzina",
//   66,
//   true,
//   undefined,
//   null,
//   player1,
//   player2,
// ];

// const players = [player1, player2, { userName: "Kamil", userSurname: "Glik" }];
// console.log(players);

// // FUNKCJE
// function add2Numbers(num1, num2) {
//   const result = num1 + num2;
//   return result;
// }

// const result = add2Numbers(2, 5);

// const wordLength = function (word) {
//   return word.length;
// };

// wordLength("Wiosnaaaaaa");

// console.log(wordLength("Wiosnaaaaaa"));

// const editString = (value) => {
//   //pozbywamy się białych znaków oraz zwracamy go w postaci wielkich liter
//   //trim oraz toUpperCase
//   // return value.trim();
//   console.log(
//     `Liczba znaków przed edycją to: ${value.length}, a po trim jest już: ${
//       value.trim().length
//     }.`
//   );
// };

// editString("  Przed dwie spacje a na końcu 5 spacji     ");
// const numAsString = "9.99";
// const numAsString2 = 9.99;
// const convToNumber = (num) => {
//   return Number(num);
// };

// console.log(convToNumber(numAsString));
// console.log(convToNumber(numAsString2));
// console.log(`${numAsString} to jest ${typeof numAsString}`);
// console.log(`${numAsString2} to jest ${typeof numAsString2}`);

// const arrFunc = (arr) => {
//   //Pierwszy sposób:
//   // return `Długość tablicy to: ${arr.length}, a ostatni  obiekt to: ${
//   //   arr[arr.length - 1]
//   // }`;

//   //Drugi sposób:
//   return [
//     `Długość tablicy: ${arr.length}, a ostatnim elementem jest: ${
//       arr[arr.length - 1]
//     }`,
//   ];
// };

// console.log(arrFunc([100, 200, 300]));

const zmieniarka = (imie) => {
  //const lowerCaseName = imie.toLowerCase();
  return imie[0].toUpperCase() + imie.slice(1).toLowerCase();
  // return imie.slice(2, -3);
};

console.log(zmieniarka("JASIU"));

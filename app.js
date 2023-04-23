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

// const zmieniarka = (imie) => {
//   //const lowerCaseName = imie.toLowerCase();
//   return imie[0].toUpperCase() + imie.slice(1).toLowerCase();
//   // return imie.slice(2, -3);
// };

// console.log(zmieniarka("JASIU"));

const names = [
  "Katarzyna",
  "Małgosia",
  "Leosia",
  "Andre",
  "Jasiu",
  "Janusz",
  "Anna",
];

const namesList = document.querySelector(".names-list");

names.forEach((name) => {
  const li = document.createElement("li");
  li.innerText = name;
  console.log(li);
  //li.style.color = "red";
  li.classList.add("name");
  namesList.appendChild(li);
});

const gamesList = document.querySelector(".games");

const games = [
  { team1: "Barcelona", draw: "X", team2: "Atl. Madryt" },
  { team1: "Grunwald Halemba", draw: "X", team2: "Wawel Wirek" },
  { team1: "Polonia Bytom", draw: "X", team2: "Legia Warszawa" },
];

games.forEach((game) => {
  const div = document.createElement("div");
  div.classList.add("button-row");

  const button1 = document.createElement("button");
  button1.classList.add("button");
  button1.innerText = game.team1;

  const button2 = document.createElement("button");
  button2.classList.add("button");
  button2.innerText = game.draw;

  const button3 = document.createElement("button");
  button3.classList.add("button");
  button3.innerText = game.team2;

  div.appendChild(button1);
  div.appendChild(button2);
  div.appendChild(button3);

  gamesList.appendChild(div);
});

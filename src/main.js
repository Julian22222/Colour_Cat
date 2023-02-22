// // console.log("Hello")

// // const colors = [
// //   "#FF5733",
// //   "#F9FF33",
// //   "#3371FF",
// //   "red",
// //   "green",
// //   "rgb(85,255,51)",
// // ];

// const hex = [
//   "0",
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
// ];

// // document allow to interact with DOM tree
// // document.getElementById("btn") -allow to catch the button with ID -> btn
// // and allow to interact with that button
// const button = document.getElementById("btn");
// // console.log(button);

// const color = document.querySelector(".color");

// button.addEventListener("click", () => {
//   let hexColor = generateHex();
//   // access body backgroundColor
//   document.body.style.backgroundColor = hexColor;

//   //   textContent - allow as to put new text
//   color.textContent = hexColor;
// });

// function generateHex() {
//   // return random code conating # + random hex elements(6 times)
//   let hexColor = "#";
//   for (let i = 0; i < 6; i++) {
//     hexColor += hex[getRandomNumber()];
//   }
//   return hexColor;
// }

// function getRandomNumber() {
//   // gives a random number from 0 - 15
//   return Math.floor(Math.random() * hex.length);
// }

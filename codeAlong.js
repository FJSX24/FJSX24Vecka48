// console.log("Hello thuesday, FJSX24 and Syncron vs. asyncron code");

// Del 1: Synkron vs. Asynkron Kod

// Förklaring av Synkron Kod

// console.log("start");

// function sum(a, b) {
//   return a + b;
// }

// const result = sum(12, 38);

// console.log("result: ", result);

// console.log("slut");
// ---------------------------------------------
// Förklaring av Asynkron Kod

// console.log("start");

// setTimeout(() => {
//   console.log("Detta exekveras efter 2 sek");
// }, 2000);

// console.log("slut");

// ---------------------------------------------
// Jämförelse mellan Synkron och Asynkron Kod

// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// Del 2: Introduktion till Callback-funktioner

// Vad är en Callback-funktion?

// function greeting(name) {
//   console.log(`Hej ${name}`);
// }

// function getDataFromPromt(callback) {
//   const firstName = prompt("Ange ditt namn:");
//   callback(firstName);
// }

// getDataFromPromt(greeting);

// ---------------------------------------------
// Asynkrona Callback-exempel

// Kodexempel 2: Använda setTimeout med Callback
// console.log("start");

// function fetchData(callback) {
//   setTimeout(() => {
//     const data = { id: 1, name: "Hans" };
//     callback(data);
//   }, 2000);
// }

// fetchData((result) => {
//   console.log("Data mottagen: ", result);
// });
// // 2sekunder väntan innan den går till nästa i syncron

// console.log("mål/slut");
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// Del 3: Problematiken med Callback Hell

// Vad är Callback Hell?

// function firstTask(callback) {
//   setTimeout(() => {
//     callback("resultatet från från FÖRSTA uppgiften/funktionen");
//   }, 1000);
// }

// function secondTask(input, callback) {
//   setTimeout(() => {
//     callback(`${input} resultat från ANDRA uppgiften/funktionen`);
//   }, 1000);
// }

// function thirdTask(input, callback) {
//   setTimeout(() => {
//     callback(`${input} resultat från TREDJE uppgiften/funktionen`);
//   }, 1000);
// }

// firstTask((result1) => {
//   secondTask(result1, (result2) => {
//     thirdTask(result2, (resultat3) => {
//       console.log("Slutresultat: ", resultat3);
//     });
//   });
// });

// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// Del 4: Code-Along - Hantera Asynkrona Operationer med Callbacks

// Uppgift:
// Vi ska tillsammans skapa en funktion som hämtar data från en API med hjälp av fetch() och använder callbacks för att hantera asynkroniteten.

// console.log("start");

// function getData(url, callback) {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       callback(null, data);
//     })
//     .catch((err) => {
//       callback(err, null);
//     });
// }

// getData("https://jsonplaceholder.typicode.com/posts/1", function (error, data) {
//   if (error) {
//     console.error("Ett fel inträffade: ", error);
//   } else {
//     console.log("Data: ", data);
//   }
// });

// console.log("slut/målinjen");
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// Avancerad Övning: Bygg en Enkel Applikation med Flera Asynkrona Callbacks

// Beskrivning:
// Vi ska skapa en applikation som hämtar data från flera API-anrop i följd, där varje anrop beror på resultatet från det föregående. Detta kommer att illustrera hur callback hell uppstår och vilka utmaningar det medför.

// Mål:
// Förstå hur komplexiteten ökar med flera nivåer av asynkrona callbacks.
// Uppleva svårigheterna med felhantering i nästlade callbacks.
// Förbereda studenterna för behovet av bättre lösningar (t.ex. Promises).

// Steg-för-steg Guide:
// Hämta en lista över användare.

// Välj en användare och hämta deras inlägg.

// För varje inlägg, hämta kommentarerna.

// Visa resultaten i konsolen eller på webbsidan.

// Steg 1: Hämta en lista över användare

// Steg 2: Hämta inlägg för en specifik användare
//   function getPostsByUser(userId, callback) {
//     fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//       .then(response => response.json())
//       .then(posts => {
//         callback(null, posts);
//       })
//       .catch(error => {
//         callback(error, null);
//       });
//   }

// Steg 3: Hämta kommentarer för ett specifikt inlägg

// Använda funktionerna med nästlade callbacks

// ---------------------------------------------

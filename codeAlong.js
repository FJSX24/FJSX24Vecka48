// console.log("Hello wednesday, FJSX24 and promise");

// Skapa en enkel Promise
// const myPromise = new Promise((resolve, reject) => {
//   const success = true;
//   if (success) {
//     resolve("Operationen lyckades");
//   } else {
//     reject("Operationen misslyckades");
//   }
// });

// myPromise
//   .then((message) => {
//     console.log("Det gick bra: ", message);
//   })
//   .catch((error) => {
//     // console.log("LOG: Error: ", error);
//     console.error("Error: Error: ", error);
//   });

// -----------------------------------------------------
// Kedja och Hantera Flera Asynkrona Operationer med Promises
// function firstTask() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("FÖRSTA uppgiften är klar.");
//       resolve("Resultatet från FÖRSTA uppgiften blev bra");
//     }, 2000);
//   });
// }
// function secondTask(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("ANDRA uppgiften är klar med data:", data);
//       resolve("Resultatet från ANDRA uppgiften blev bra");
//     }, 4000);
//   });
// }
// function thirdTask(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("TREDJE uppgiften är klar med data:", data);
//       resolve("Resultatet från TREDJE uppgiften blev bra");
//     }, 5000);
//   });
// }

// firstTask()
//   .then((result1) => {
//     return secondTask(result1);
//   })
//   .then((result2) => {
//     return thirdTask(result2);
//   })
//   .then((result3) => {
//     console.log(
//       "alla uppgifter/asynkrona callback funktioner är slutförda med resultatet: ",
//       result3
//     );
//   })
//   .catch((error) => {
//     console.error("Error: Error: ", error);
//   });

// -----------------------------------------------------
// Avancerad Code-Along: Bygga en Applikation med Flera Promises

// Beskrivning:

// Vi ska tillsammans bygga en applikation som hämtar data från flera API-anrop i följd. Detta kommer att illustrera hur Promises kan användas för att hantera komplexa asynkrona flöden utan att koden blir för djup och svårhanterlig.
// Mål:

// Förstå hur man använder Promises för att hantera flera asynkrona operationer.
// Lära sig att hantera fel i en kedja av Promises.
// Uppleva hur Promises förbättrar kodens läsbarhet jämfört med callback-funktioner.
// Steg-för-steg Guide:

// Hämta en lista över användare:
// function getUser() {
//   return fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
//     response.json()
//   );
// }

// //   Välj en användare och hämta deras inlägg:
// function getPostByUser(userId) {
//   return fetch(
//     `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
//   ).then((response) => response.json());
// }

// //   Hämta kommentarer för ett inlägg:
// function getCommentsFromPost(postId) {
//   return fetch(
//     `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
//   ).then((response) => response.json());
// }

// //   Kedja Promises för att utföra uppgifterna:
// getUser()
//   .then((users) => {
//     console.log("users: ", users[0]);
//     const user = users[0];
//     return getPostByUser(user.id);
//   })
//   .then((posts) => {
//     console.log("posts: ", posts);
//     const post = posts[0];
//     return getCommentsFromPost(post.id);
//   })
//   .then((comments) => {
//     console.log("comments: ", comments[0]);
//     console.log("comments: ", comments[0].name);
//     console.log("comments: ", comments[0].body);
//   })
//   .catch((error) => {
//     console.error("Error: Error: ", error);
//   });

// -----------------------------------------------------
// Avancerad Code-Along: Använda Promise.all() med Felhantering

// Mål:

// Förstå hur man använder Promise.all() för att köra flera asynkrona operationer parallellt.
// Lära sig att hantera fel som kan uppstå i någon av de parallella operationerna.
// Uppleva hur Promise.all() kan effektivisera asynkrona operationer och förbättra kodens läsbarhet.

// Steg-för-steg Guide:

// Steg 1: Förklara Promise.all()

// Steg 2: Definiera Funktioner för att Hämta Data
// Vi kommer att hämta data för flera användare och deras inlägg parallellt.
// function getUser(userId) {
//   return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error("Kunde inte hämta användare med ID:et: ", userId);
//       }
//       return response.json();
//     }
//   );
// }

// function getPosts(userId) {
//   return fetch(
//     `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(
//         "Kunde inte hämta inlägg för användare med ID:et: ",
//         userId
//       );
//     }
//     return response.json();
//   });
// }

// Steg 3: Använda Promise.all() för Parallella Hämtningar
// Vi ska nu hämta data för flera användare samtidigt.
// const userIds = [1, 2, 3];

// const userPromises = userIds.map((id) => getUser(id));
// const postPromises = userIds.map((id) => getPosts(id));

// Modifierad Kod med Korrekt Referens till users
// let userData;

// Promise.all(userPromises)
//   .then((users) => {
//     userData = users;
//     console.log("Användare hämtade: ", users);
//     return Promise.all(postPromises);
//   })
//   .then((postsArr) => {
//     console.log("Inlägg hämtade: ", postsArr);
//     postsArr.forEach((post, index) => {
//       console.log(`Inlägg för ${userData[index].name}`);
//       post.forEach((post) => {
//         console.log(post.title);
//       });
//     });
//   })
//   .catch((err) => {
//     console.error("Ett fel uppstod: ", err);
//   });

//   -----------------------------------------------------
//   -----------------------------------------------------
//   -----------------------------------------------------
//   -----------------------------------------------------

// Torsdag flyttas detta till:::::!!!!!

// Steg 4: Robust Felhantering
// Vi ska nu förbättra felhanteringen genom att:

// Hantera fel i varje enskild fetch-operation.
// Visa vilket anrop som orsakade felet.
// Eftersom Promise.all() reject:ar om någon av Promises reject:ar, kan vi fånga felet och se vilken operation som misslyckades.

// Modifierad Kod med Förbättrad Felhantering:
// userIds ändrade vi och la in ett id i den array som troligtvis kommer rejectas

// Steg 5: Hantera Fel i Individuella Promises
// Om vi vill att de andra Promises ska fortsätta även om en av dem misslyckas, kan vi modifiera våra funktioner för att alltid resolve:a, men inkludera felinformation i resultatet.

// Modifierade Funktioner:
// function getUsersSafe(userId) {
//   return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Kunde inte hämta användare med ID:et: ", userId);
//       }
//       return response.json();
//     })
//     .catch(() => {
//       return { error: `Nätverksfel vid hämtning av ID: ${userId}` };
//     });
// }

// function getPostsSafe(userId) {
//   return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(
//           "Kunde inte hämta inlägg för användare med ID:et: ",
//           userId
//         );
//       }
//       return response.json();
//     })
//     .catch(() => {
//       return {
//         error: `Nätverksfel vid hämtning av inlägg för användare med ID: ${userId}`,
//       };
//     });
// }

// //   Modifierad Användning av Promise.all():
// const userIds = [1, 2, 3, 9999999999];

// const userPromises = userIds.map((id) => getUsersSafe(id));
// const postPromises = userIds.map((id) => getPostsSafe(id));

// Promise.all(userPromises).then((users) => {
//   console.log("Användare hämtade: ", users);

//   users.forEach((user) => {
//     if (user.error) {
//       console.error(user.error);
//     } else {
//       console.log("Användare hämtade: ", user.name);
//     }
//   });

//   return Promise.all(postPromises);
// });

// Steg 6: Diskutera Fördelar och Nackdelar
// Diskussionspunkter:

// Fördelar med Promise.all():
// Effektivitet genom parallell exekvering.
// Enklare kod jämfört med att hantera varje Promise separat.
// Nackdelar:
// Om någon Promise reject:ar, reject:ar hela Promise.all().
// Kräver extra hantering om man vill fortsätta trots fel i enskilda Promises.
// Alternativ:
// Promise.allSettled(): Returnerar en Promise som resolve:ar efter att alla givna Promises har antingen resolve:at eller reject:at, med en array av resultat.
// Promise.race(): Returnerar en Promise som resolve:ar eller reject:ar så snart som en av de givna Promises gör det.
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// Torsdag: Introduktion till Async/Await

// Grundläggande användning av async/await

// En funktion som returnerar en Promise
// function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('Data hämtad!');
//       }, 1000);
//     });
//   }

// Använda async/await:

// -----------------------------------------------------
// Hur Async/Await Bygger på Promises

// Kodexempel: Promise-kedja
// function firstTask() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log('Första uppgiften klar.');
//         resolve('Resultat från första uppgiften');
//       }, 1000);
//     });
//   }

//   function secondTask(data) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log('Andra uppgiften klar med data:', data);
//         resolve('Resultat från andra uppgiften');
//       }, 1000);
//     });
//   }

//   firstTask()
//     .then(result1 => {
//       return secondTask(result1);
//     })
//     .then(result2 => {
//       console.log('Alla uppgifter klara med resultat:', result2);
//     })
//     .catch(error => {
//       console.error('Ett fel uppstod:', error);
//     });

//     Konverterat till async/await:

// -----------------------------------------------------
// Konvertera Promise-kedjor till Async/Await

// Steg-för-steg Guide:
// Steg 1: Utgångspunkt - En Promise-baserad applikation
// Vi utgår från koden som hämtar användare, deras inlägg och kommentarer med Promises.

// Kodexempel:
// function getUser(userId) {
//     return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//       .then(response => response.json());
//   }

//   function getPosts(userId) {
//     return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//       .then(response => response.json());
//   }

//   function getComments(postId) {
//     return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
//       .then(response => response.json());
//   }

//   getUser(1)
//     .then(user => {
//       console.log('Användare:', user.name);
//       return getPosts(user.id);
//     })
//     .then(posts => {
//       const post = posts[0];
//       console.log('Inlägg:', post.title);
//       return getComments(post.id);
//     })
//     .then(comments => {
//       console.log('Kommentarer till inlägget:');
//       comments.forEach(comment => {
//         console.log(`- ${comment.name}: ${comment.body}`);
//       });
//     })
//     .catch(error => {
//       console.error('Ett fel uppstod:', error);
//     });

//     Steg 2: Konvertera till Async/Await
// Kodexempel:

// -----------------------------------------------------
// Steg 3: Diskutera Fördelar
// Läsbarhet:
// Koden ser mer ut som synkron kod, vilket underlättar förståelsen.

// Felhantering:
// Genom att använda try och catch kan vi hantera fel på ett mer intuitivt sätt.

// Underhållbarhet:
// Mindre risk för fel i komplexa kedjor av asynkrona operationer.

// -----------------------------------------------------

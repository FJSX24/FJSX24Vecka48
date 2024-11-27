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
function getUser(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error("Kunde inte hämta användare med ID:et: ", userId);
      }
      return response.json();
    }
  );
}

function getPosts(userId) {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(
        "Kunde inte hämta inlägg för användare med ID:et: ",
        userId
      );
    }
    return response.json();
  });
}

// Steg 3: Använda Promise.all() för Parallella Hämtningar
// Vi ska nu hämta data för flera användare samtidigt.
const userIds = [1, 2, 3];

const userPromises = userIds.map((id) => getUser(id));
const postPromises = userIds.map((id) => getPosts(id));

// Modifierad Kod med Korrekt Referens till users
let userData;

Promise.all(userPromises)
  .then((users) => {
    userData = users;
    console.log("Användare hämtade: ", users);
    return Promise.all(postPromises);
  })
  .then((postsArr) => {
    console.log("Inlägg hämtade: ", postsArr);
    postsArr.forEach((post, index) => {
      console.log(`Inlägg för ${userData[index].name}`);
      post.forEach((post) => {
        console.log(post.title);
      });
    });
  })
  .catch((err) => {
    console.error("Ett fel uppstod: ", err);
  });

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

// Modifierade Funktioner:

//   Modifierad Användning av Promise.all():

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

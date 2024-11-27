// console.log("Hello wednesday, FJSX24 and promise");

// Skapa en enkel Promise

// const myPromise = new Promise((resolve, reject) => {
//     const success = true; // Ändra till false för att testa rejection
//     if (success) {
//       resolve('Operationen lyckades!');
//     } else {
//       reject('Operationen misslyckades.');
//     }
//   });

//   myPromise
//     .then((message) => {
//       console.log('Success:', message);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });

// Förklaring:

// Promise Konstruktor:
// Tar en executor-funktion med två argument: resolve och reject.
// resolve anropas när operationen lyckas.
// reject anropas när operationen misslyckas.
// .then() och .catch():
// .then() hanterar det lyckade resultatet.
// .catch() hanterar fel.

// -----------------------------------------------------
// Kedja och Hantera Flera Asynkrona Operationer med Promises

// Talarmanus:

// "När vi har flera asynkrona operationer som beror på varandra, kan Promises hjälpa oss att kedja dem på ett läsbart och hanterbart sätt. Låt oss titta på hur vi kan göra detta."

// Kodexempel: Kedja Promises
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

//   function thirdTask(data) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log('Tredje uppgiften klar med data:', data);
//         resolve('Resultat från tredje uppgiften');
//       }, 1000);
//     });
//   }

//   firstTask()
//     .then((result1) => {
//       return secondTask(result1);
//     })
//     .then((result2) => {
//       return thirdTask(result2);
//     })
//     .then((result3) => {
//       console.log('Alla uppgifter slutförda med resultat:', result3);
//     })
//     .catch((error) => {
//       console.error('Ett fel uppstod:', error);
//     });

//     Förklaring:

// Varje funktion returnerar en Promise.
// Promises kedjas med .then() för att utföra uppgifterna sekventiellt.
// .catch() fångar eventuella fel som kan uppstå i någon del av kedjan.

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
// function getUsers() {
//     return fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json());
//   }

//   Välj en användare och hämta deras inlägg:

//   function getPostsByUser(userId) {
//     return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//       .then(response => response.json());
//   }

//   Hämta kommentarer för ett inlägg:
//   function getCommentsByPost(postId) {
//     return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
//       .then(response => response.json());
//   }

//   Kedja Promises för att utföra uppgifterna:
//   getUsers()
//   .then(users => {
//     const user = users[0]; // Välj första användaren
//     console.log('Vald användare:', user.name);
//     return getPostsByUser(user.id);
//   })
//   .then(posts => {
//     const post = posts[0]; // Välj första inlägget
//     console.log('Valt inlägg:', post.title);
//     return getCommentsByPost(post.id);
//   })
//   .then(comments => {
//     console.log('Kommentarer till inlägget:');
//     comments.forEach(comment => {
//       console.log(`- ${comment.name}: ${comment.body}`);
//     });
//   })
//   .catch(error => {
//     console.error('Ett fel uppstod:', error);
//   });

//   Talarmanus:

// "Nu ska vi bygga en applikation som hämtar data från flera API-anrop i följd. Vi börjar med att hämta en lista över användare, väljer en användare, hämtar deras inlägg, och slutligen hämtar vi kommentarer till ett specifikt inlägg."
// "Genom att använda Promises kan vi kedja dessa operationer på ett tydligt och läsbart sätt, utan att behöva gå djupare in i nästlade callbacks."
// "Observera hur varje .then() block hanterar resultatet från det föregående anropet och returnerar en ny Promise för nästa steg i kedjan."
// "Om ett fel uppstår i någon del av kedjan, fångas det upp av .catch() blocket, vilket gör felhanteringen centraliserad och enkel."

// -----------------------------------------------------
// Avancerad Code-Along: Använda Promise.all() med Felhantering

// Mål:

// Förstå hur man använder Promise.all() för att köra flera asynkrona operationer parallellt.
// Lära sig att hantera fel som kan uppstå i någon av de parallella operationerna.
// Uppleva hur Promise.all() kan effektivisera asynkrona operationer och förbättra kodens läsbarhet.
// Steg-för-steg Guide:

// Steg 1: Förklara Promise.all()

// Talarmanus:

// "Medan vi tidigare har kedjat Promises för att utföra asynkrona operationer i följd, kan vi med Promise.all() köra flera asynkrona operationer parallellt. Promise.all() tar en array av Promises och returnerar en ny Promise som resolve:ar när alla Promises i arrayen har resolve:at, eller reject:ar om någon av dem reject:ar."

// Steg 2: Definiera Funktioner för att Hämta Data
// Vi kommer att hämta data för flera användare och deras inlägg parallellt.

// function getUser(userId) {
//     return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`Kunde inte hämta användare med ID ${userId}`);
//         }
//         return response.json();
//       });
//   }

//   function getPosts(userId) {
//     return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`Kunde inte hämta inlägg för användare med ID ${userId}`);
//         }
//         return response.json();
//       });
//   }

//   Förklaring:

// getUser(userId):
// Hämtar användardata för ett specifikt userId.
// Kontrollerar om svaret är OK (statuskod 200-299); annars kastar den ett fel.
// getPosts(userId):
// Hämtar inlägg för ett specifikt userId.
// Har samma felhantering som getUser.

// Steg 3: Använda Promise.all() för Parallella Hämtningar
// Vi ska nu hämta data för flera användare samtidigt.

// const userIds = [1, 2, 3];

// const userPromises = userIds.map(id => getUser(id));
// const postPromises = userIds.map(id => getPosts(id));

// Promise.all(userPromises)
//   .then(users => {
//     console.log('Användare hämtade:');
//     users.forEach(user => {
//       console.log(`- ${user.name}`);
//     });
//     return Promise.all(postPromises);
//   })
//   .then(postsArray => {
//     console.log('\nInlägg hämtade:');
//     postsArray.forEach((posts, index) => {
//       console.log(`\nInlägg för ${users[index].name}:`);
//       posts.forEach(post => {
//         console.log(`- ${post.title}`);
//       });
//     });
//   })
//   .catch(error => {
//     console.error('Ett fel uppstod:', error);
//   });

//   Förklaring:

// userIds:
// En array med de userId vi vill hämta data för.
// userPromises:
// En array av Promises som hämtar användardata för varje userId.
// postPromises:
// En array av Promises som hämtar inlägg för varje userId.
// Promise.all(userPromises):
// Kör alla getUser-anrop parallellt.
// Resolve:ar när alla användare har hämtats.
// Promise.all(postPromises):
// Kör alla getPosts-anrop parallellt.
// Resolve:ar när alla inlägg har hämtats.
// Felhantering:
// Om någon av Promises i Promise.all() reject:ar, går vi direkt till .catch()-blocket.
// Observera: Vi behöver lagra users så att vi kan referera till dem senare när vi skriver ut inläggen. För att lösa detta kan vi modifiera koden något.

// Modifierad Kod med Korrekt Referens till users
// const userIds = [1, 2, 3];

// const userPromises = userIds.map(id => getUser(id));
// const postPromises = userIds.map(id => getPosts(id));

// let usersData; // Variabel för att lagra användardata

// Promise.all(userPromises)
//   .then(users => {
//     usersData = users; // Spara användardata för senare användning
//     console.log('Användare hämtade:');
//     users.forEach(user => {
//       console.log(`- ${user.name}`);
//     });
//     return Promise.all(postPromises);
//   })
//   .then(postsArray => {
//     console.log('\nInlägg hämtade:');
//     postsArray.forEach((posts, index) => {
//       console.log(`\nInlägg för ${usersData[index].name}:`);
//       posts.forEach(post => {
//         console.log(`- ${post.title}`);
//       });
//     });
//   })
//   .catch(error => {
//     console.error('Ett fel uppstod:', error);
//   });

//   Förklaring:

// Vi deklarerar usersData utanför Promise-kedjan för att kunna använda användardatan i nästa .then()-block.
// Steg 4: Robust Felhantering
// Vi ska nu förbättra felhanteringen genom att:

// Hantera fel i varje enskild fetch-operation.
// Visa vilket anrop som orsakade felet.
// Eftersom Promise.all() reject:ar om någon av Promises reject:ar, kan vi fånga felet och se vilken operation som misslyckades.

// Modifierad Kod med Förbättrad Felhantering:
// const userIds = [1, 2, 3, 999]; // Lägg till en ogiltig ID för att simulera fel

// const userPromises = userIds.map(id => getUser(id));
// const postPromises = userIds.map(id => getPosts(id));

// let usersData;

// Promise.all(userPromises)
//   .then(users => {
//     usersData = users;
//     console.log('Användare hämtade:');
//     users.forEach(user => {
//       console.log(`- ${user.name}`);
//     });
//     return Promise.all(postPromises);
//   })
//   .then(postsArray => {
//     console.log('\nInlägg hämtade:');
//     postsArray.forEach((posts, index) => {
//       console.log(`\nInlägg för ${usersData[index].name}:`);
//       posts.forEach(post => {
//         console.log(`- ${post.title}`);
//       });
//     });
//   })
//   .catch(error => {
//     console.error('Ett fel uppstod:', error.message);
//   });

//   Förklaring:

// Vi har lagt till 999 i userIds för att simulera ett fel (det finns ingen användare med ID 999).
// När getUser(999) anropas kommer fetch att returnera ett svar med status 404, och vi kastar ett fel i vår .then()-funktion i getUser.
// Eftersom en av Promises i Promise.all(userPromises) reject:ar, hoppar vi direkt till .catch()-blocket.
// Vi loggar ut felmeddelandet för att informera om vad som gick fel.
// Steg 5: Hantera Fel i Individuella Promises
// Om vi vill att de andra Promises ska fortsätta även om en av dem misslyckas, kan vi modifiera våra funktioner för att alltid resolve:a, men inkludera felinformation i resultatet.

// Modifierade Funktioner:
// function getUserSafe(userId) {
//     return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//       .then(response => {
//         if (!response.ok) {
//           return { error: `Kunde inte hämta användare med ID ${userId}` };
//         }
//         return response.json();
//       })
//       .catch(() => {
//         return { error: `Nätverksfel vid hämtning av användare med ID ${userId}` };
//       });
//   }

//   function getPostsSafe(userId) {
//     return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//       .then(response => {
//         if (!response.ok) {
//           return { error: `Kunde inte hämta inlägg för användare med ID ${userId}` };
//         }
//         return response.json();
//       })
//       .catch(() => {
//         return { error: `Nätverksfel vid hämtning av inlägg för användare med ID ${userId}` };
//       });
//   }

//   Modifierad Användning av Promise.all():
//   const userIds = [1, 2, 3, 999];

// const userPromises = userIds.map(id => getUserSafe(id));
// const postPromises = userIds.map(id => getPostsSafe(id));

// Promise.all(userPromises)
//   .then(users => {
//     console.log('Användare hämtade:');
//     users.forEach(user => {
//       if (user.error) {
//         console.error(user.error);
//       } else {
//         console.log(`- ${user.name}`);
//       }
//     });
//     return Promise.all(postPromises).then(postsArray => [users, postsArray]);
//   })
//   .then(([users, postsArray]) => {
//     console.log('\nInlägg hämtade:');
//     postsArray.forEach((posts, index) => {
//       const user = users[index];
//       if (user.error) {
//         console.error(`Kunde inte hämta inlägg för användare med index ${index} på grund av tidigare fel.`);
//         return;
//       }
//       console.log(`\nInlägg för ${user.name}:`);
//       if (posts.error) {
//         console.error(posts.error);
//       } else {
//         posts.forEach(post => {
//           console.log(`- ${post.title}`);
//         });
//       }
//     });
//   })
//   .catch(error => {
//     console.error('Ett oväntat fel uppstod:', error);
//   });

//   Förklaring:

// getUserSafe och getPostsSafe:
// Returnerar alltid en resolved Promise, antingen med data eller ett objekt med en error-egenskap.
// Användning av Promise.all():
// Vi kan nu hantera fel för varje enskild användare och deras inlägg utan att det påverkar de andra.
// Felhantering:
// Vi kontrollerar om user.error eller posts.error finns och loggar lämpliga felmeddelanden.
// Talarmanus:

// "Genom att modifiera våra funktioner för att alltid resolve:a, kan vi hantera fel för varje enskild operation utan att avbryta hela processen. Detta är särskilt användbart när vi vill hämta så mycket data som möjligt även om vissa anrop misslyckas.

// Observera dock att om vi har ett oväntat fel, till exempel en programmeringsbugg, kommer .catch()-blocket i slutet att fånga det."

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

// -----------------------------------------------------

console.log("Hello thuesday, FJSX24 and Syncron vs. asyncron code");

// Del 1: Synkron vs. Asynkron Kod

// Förklaring av Synkron Kod

// ---------------------------------------------
// Förklaring av Asynkron Kod

// ---------------------------------------------
// Jämförelse mellan Synkron och Asynkron Kod

// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// Del 2: Introduktion till Callback-funktioner

// Vad är en Callback-funktion?

// ---------------------------------------------
// Asynkrona Callback-exempel

// Kodexempel 2: Använda setTimeout med Callback

// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// Del 3: Problematiken med Callback Hell

// Vad är Callback Hell?

// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// Del 4: Code-Along - Hantera Asynkrona Operationer med Callbacks

// Uppgift:
// Vi ska tillsammans skapa en funktion som hämtar data från en API med hjälp av fetch() och använder callbacks för att hantera asynkroniteten.

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

// console.log("Hello wednesday, FJSX24 and promise");

// Skapa en enkel Promise

// -----------------------------------------------------
// Kedja och Hantera Flera Asynkrona Operationer med Promises

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

//   Välj en användare och hämta deras inlägg:

//   Hämta kommentarer för ett inlägg:

//   Kedja Promises för att utföra uppgifterna:

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

// Steg 3: Använda Promise.all() för Parallella Hämtningar
// Vi ska nu hämta data för flera användare samtidigt.

// Modifierad Kod med Korrekt Referens till users

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

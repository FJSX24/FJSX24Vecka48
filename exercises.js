// Övningar:

// Övning 1: Skapa och Använda Enkla Promises (Lätt)

// Uppgift:
// Skapa ett Promise som resolve:ar eller reject:ar baserat på en slumpmässig siffra.
// Hantera resultatet med .then() och .catch().

// -----------------------------------------------
// Övning 2: Kedja Flera Promises (Medel)

// Uppgift:
// Implementera en sekvens av asynkrona operationer där varje steg beror på resultatet av föregående Promise.
// Instruktioner:
// Hämta en användare från https://jsonplaceholder.typicode.com/users/1.
// Hämta deras inlägg från https://jsonplaceholder.typicode.com/posts?userId=1.
// Logga användarens namn och titlarna på deras inlägg.

// Mål:
// Lära sig att kedja Promises för att hantera komplexa asynkrona flöden.
// -----------------------------------------------
// Övning 3: Hantera Flera Promises Samtidigt med Promise.all() (Svår)

// Uppgift:
// Använd Promise.all() för att köra flera asynkrona operationer parallellt och hantera resultaten när alla är klara.
// Instruktioner:
// Hämta data från:
// https://jsonplaceholder.typicode.com/posts/1
// https://jsonplaceholder.typicode.com/posts/2
// https://jsonplaceholder.typicode.com/posts/3
// Använd Promise.all() för att köra dessa fetch()-anrop parallellt.
// När alla anrop är klara, logga titlarna på inläggen.

// Mål:
// Förstå hur man effektivt hanterar flera asynkrona operationer samtidigt med Promises.

// -----------------------------------------------
// Övning 4: Avancerad Code-Along: Bygg en Komplext Asynkron Flöde med Promises (Extra Svår)

// Beskrivning:
// Bygg en applikation som hämtar användardata, deras inlägg, och kommentarer till dessa inlägg, allt med Promises. Fokus ligger på att hantera komplexa kedjor och felhantering.

// -----------------------------------------------

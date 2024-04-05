import { writeFile, readFile } from "fs/promises";

// Lire le contenu du fichier "welcome.txt"
readFile("3rd-Task/welcome.txt", { encoding: "utf8" })
  .then((data) => {
    console.log('Contenu du fichier "welcome.txt" :', data);
  })
  .catch((err) => {
    console.error("Erreur :", err);
  });

//  Créer un fichier "hello.txt" contenant une ligne "Hello Node"
// const content = ' ';

// // Écrire le contenu dans le fichier "hello.txt"
// writeFile('hello.txt', content)
//   .then(() => {
//     console.log('Fichier "hello.txt" créé avec succès !');}

// Importation des modules nécessaires
import http from "http";

// Création d'un serveur
const server = http.createServer((req, res) => {
  // Définition de l'en-tête de la réponse
  res.writeHead(200, { "Content-Type": "text/html" });

  // Écriture du corps de la réponse
  res.write("<h1>Hello Node!!!!</h1>\n");

  // Fin de la réponse
  res.end();
});

// Démarrage du serveur pour écouter sur le port 3000
server.listen(3000, () => {
  console.log("Le serveur fonctionne au:s http://localhost:3000/");
});

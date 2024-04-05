import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// Obtenir le chemin du répertoire actuel du fichier en utilisant fileURLToPath et dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// join pour créer un chemin complet vers un fichier "hello-world.js" dans le répertoire actuel
const filename = join(__dirname, "hello-world.js");

// Affiche le chemin complet du fichier "hello-world.js"
console.log(filename);

// Afficher "HELLO WORLD" dans la console
console.log("HELLO WORLD");

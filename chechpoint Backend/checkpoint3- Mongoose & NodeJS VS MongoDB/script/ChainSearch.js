// Importer le modèle de personne
const Person = require("../schema/person");

// Définition de la fonction pour rechercher des personnes qui aiment les burritos
function findBurritos() {
  // Rechercher des personnes qui aiment les burritos
  Person.find({ favoriteFoods: "Burritos" })
    // Trier les résultats par nom
    .sort({ firstname: 1 })
    // Limiter les résultats à deux documents
    .limit(2)
    // Masquer leur âge
    .select("-age")
    // Exécuter la requête
    .exec()
    .then((data) => {
      // Afficher les données
      console.log(data);
    })
    .catch((err) => {
      // Gérer les erreurs
      console.error(err);
    });
}

// Exporter la fonction
module.exports = findBurritos;

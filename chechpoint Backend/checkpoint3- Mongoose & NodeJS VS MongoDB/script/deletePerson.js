// Importer le modèle de personne
const Person = require("../schema/person");

// Définition de la fonction pour supprimer une personne par son _id
function deletePersonById(personId) {
  // Supprimer une personne par son _id
  Person.findOneAndDelete({ _id: personId })
    .then((deletedPerson) => {
      // Affichage de la personne supprimée
      console.log("Personne supprimée avec succès :", deletedPerson);
    })
    .catch((error) => {
      // Gestion des erreurs
      console.error("Erreur lors de la suppression de la personne :", error);
    });
}

// Utilisation de la fonction pour supprimer une personne par son _id
const personIdToDelete = "661bccaa546f004a179af4b7";
deletePersonById(personIdToDelete);

// Définition de la fonction pour supprimer toutes les personnes avec un prénom spécifique
function deletePeopleByName(firstName) {
  // Supprimer toutes les personnes avec un prénom spécifique
  Person.deleteMany({ firstname: firstName })
    .then((result) => {
      // Afficher le nombre de personnes supprimées
      console.log("Nombre de personnes supprimées :", result.deletedCount);
    })
    .catch((error) => {
      // Gérer les erreurs
      console.error("Erreur lors de la suppression des personnes :", error);
    });
}

// Exporter les fonctions
module.exports = {
  deletePersonById,
  deletePeopleByName,
};

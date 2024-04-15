const Person = require("../schema/person");

// Utilisation de la fonction pour rechercher une personne par ID
const findPersonById = (personId) => {
  Person.findById(personId)
    .then((person) => {
      console.log("Personne trouvée par ID:", person);
    })
    .catch((error) => {
      console.error(
        "Une erreur s'est produite lors de la recherche par ID:",
        error
      );
    });
};

// Recherche d'une personne par _id
const updatePersonFavoriteFood = (personId) => {
  // Trouver la personne par son _id
  Person.findById(personId)
    .then((person) => {
      // Ajouter "beefsteak" à la liste des aliments préférés de la personne
      person.favoriteFoods.push("beefsteak");

      // Sauvegarder la personne mise à jour
      person
        .save()
        .then((updatedPerson) => {
          console.log("Personne mise à jour avec succès :", updatedPerson);
        })
        .catch((error) => {
          console.error(
            "Erreur lors de la sauvegarde de la personne mise à jour :",
            error
          );
        });
    })
    .catch((error) => {
      console.error("Erreur lors de la recherche de la personne :", error);
    });
};

// Définition de la fonction pour mettre à jour l'âge d'une personne par son nom
function updatePersonAgeByName(personName) {
  // Recherche d'une personne par son nom et mise à jour de son âge à 20 ans
  Person.findOneAndUpdate(
    { firstname: personName }, // Recherche par nom
    { age: 20 }, // Mise à jour de l'âge à 20 ans
    { new: true } // Options pour retourner le document mis à jour
  )
    .then((updatedPerson) => {
      // Vérification si la personne a été trouvée et mise à jour
      if (!updatedPerson) {
        console.log("Personne non trouvée ou non mise à jour");
        return;
      }

      // Affichage de la personne mise à jour
      console.log("Personne mise à jour avec succès :", updatedPerson);
    })
    .catch((error) => {
      // Gestion des erreurs
      console.error("Erreur lors de la mise à jour de la personne :", error);
    });
}

module.exports = {
  findPersonById,
  updatePersonFavoriteFood,
  updatePersonAgeByName,
};

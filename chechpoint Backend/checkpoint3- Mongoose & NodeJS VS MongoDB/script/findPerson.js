const Person = require("../schema/person");

function findPersonByFirstName(firstName) {
  Person.find({ firstname: firstName })
    .then((people) => {
      console.log(`Personnes trouvées ayant le prénom ${firstName} :`, people);
    })
    .catch((error) => {
      console.error("Erreur lors de la recherche des personnes :", error);
    });
}

function findPersonByFavoriteFood(food) {
  Person.findOne({ favoriteFoods: food })
    .then((person) => {
      console.log(`Personne trouvée qui mange ${food} :`, person);
    })
    .catch((error) => {
      console.error("Erreur lors de la recherche de la personne :", error);
    });
}

function findPersonById(personId) {
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
}

module.exports = {
  findPersonByFirstName,
  findPersonByFavoriteFood,
  findPersonById,
};

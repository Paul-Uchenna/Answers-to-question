/**
 * Ce script contient toutes les opérations liées aux personnes, y compris la création, la recherche, la mise à jour et la suppression.
 * Il se connecte à MongoDB, effectue des opérations sur la collection "Person", et démontre différentes fonctionnalités de Mongoose.
 *
 */

const mongoose = require("mongoose");
require("dotenv").config();
const Person = require("./models/person.js");

// Connexion à MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    //Remove useNewUrlParser and useUnifiedTopology options from your mongoose.connect()
    //call as they have no effect since Node.js Driver version 4.0.0 and will be removed in the next major version.
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully ✅");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Créez une instance de document avec les données
const newPerson = new Person({
  firstname: "Paul",
  lastname: "Uchenna",
  age: 27,
  email: "pauluchenna20@gmail.com",
  favoriteFoods: ["Pizza", "Tchieb", "Burger"],
  gender: "male",
});

// Enregistrez le nouvel enregistrement en appelant la méthode save()
newPerson
  .save()
  .then((savedPerson) => {
    console.log("Enregistrement de la personne réussi :", savedPerson);
  })
  .catch((error) => {
    console.error("Erreur lors de l'enregistrement de la personne :", error);
  });

// Tableau contenant les données de plusieurs personnes
const arrayOfPeople = [
  {
    firstname: "John",
    lastname: "Doe",
    age: 30,
    email: "johnDoe@gmail.com",
    favoriteFoods: ["Pizza", "Pasta"],
    gender: "male",
  },
  {
    firstname: "Oumar",
    lastname: "Yanni",
    age: 27,
    email: "oumaryanni@gmail.com",
    favoriteFoods: ["Sushi", "Burger"],
    gender: "male",
  },
  {
    firstname: "Kevin",
    lastname: "De Bryune",
    age: 32,
    email: "kevindebruyne@gmail.com",
    favoriteFoods: ["Steak", "Salad"],
    gender: "male",
  },
  {
    firstname: "Alice",
    lastname: "Smith",
    age: 25,
    email: "alicesmith@gmail.com",
    favoriteFoods: ["Sushi", "Chocolate"],
    gender: "female",
  },
  {
    firstname: "Emma",
    lastname: "Johnson",
    age: 22,
    email: "emmajohnson@gmail.com",
    favoriteFoods: ["Salad", "Pasta"],
    gender: "female",
  },
];

// Utiliser Model.create() pour créer plusieurs personnes
Person.create(arrayOfPeople)
  .then((savedPersons) => {
    console.log("Enregistrement des personnes réussi :", savedPersons);
  })
  .catch((error) => {
    console.error("Erreur lors de la création des personnes :", error);
  });

// Rechercher toutes les personnes ayant un prénom spécifique
Person.find({ firstname: "Kevin" })
  .then((people) => {
    console.log("Personnes trouvées ayant un prénom spécifique :", people);
  })
  .catch((error) => {
    console.error("Erreur lors de la recherche des personnes :", error);
  });

// Recherche d'une seule personne ayant un aliment préféré spécifique
Person.findOne({ favoriteFoods: "Sushi" })
  .then((person) => {
    console.log("Personne trouvée qui mange le Sushi :", person);
  })
  .catch((error) => {
    console.error("Erreur lors de la recherche de la personne :", error);
  });

// Recherche d'une personne par _id
// Recherche d'une personne par _id avec model.findById() en utilisant async/await
const findPersonById = async (personId) => {
  try {
    const person = await Person.findById(personId);
    console.log("Personne trouvée par ID:", person);
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la recherche par ID:",
      error
    );
  }
};

// Utilisation de la fonction pour rechercher une personne par ID
const personId = "661b4ef0403061cdfc66ecb3";
findPersonById(personId);

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
// Utilisation de la fonction pour mettre à jour une personne par son _id
const personIdToUpdate = "661bccaa546f004a179af4b8";
updatePersonFavoriteFood(personIdToUpdate);

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

// Utilisation de la fonction pour mettre à jour l'âge d'une personne par son nom
const personNameToUpdate = "John";
updatePersonAgeByName(personNameToUpdate);

// Définition de la fonction pour supprimer une personne par son _id
function deletePersonById(personId) {
  // Supprimer une personne par son _id
  Person.findOneAndDelete(personId)
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

// Supprimer toutes les personnes dont le nom est "Mary"
Person.deleteMany({ firstname: "Mary" })
  .then((result) => {
    // Afficher le nombre de personnes supprimées
    console.log("Nombre de personnes supprimées :", result.deletedCount);
    // Appeler done() si nécessaire
    done();
  })
  .catch((error) => {
    // Gérer les erreurs
    console.error("Erreur lors de la suppression des personnes :", error);
    // Appeler done() avec l'erreur si nécessaire
    // done(error);
  });

// Recherche des personnes qui aiment les burritos
Person.find({ favoriteFoods: "burritos" })
  // Trier les résultats par nom
  .sort({ firstname: 1 })
  // Limiter les résultats à deux documents
  .limit(2)
  // Masquer leur âge
  .select("-age")
  // Exécuter la requête
  .exec()
  .then((data) => {
    // Traiter les données
    console.log(data);
    // Appeler done() si nécessaire
    // done();
  })
  .catch((err) => {
    // Gérer les erreurs
    console.error(err);
    // Appeler done() avec l'erreur si nécessaire
    // done(err);
  });

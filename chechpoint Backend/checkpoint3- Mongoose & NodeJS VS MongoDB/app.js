const mongoose = require("mongoose");
require("dotenv").config();

// Importer le script createperson.js
const {
  createSinglePerson,
  createMultiplePeople,
} = require("./script/createPerson");

// Importer le script findPerson.js
const {
  findPersonByFirstName,
  findPersonByFavoriteFood,
  findPersonById,
} = require("./script/findPerson");

// Importer le script updatePerson.js
const {
  updatePersonFavoriteFood,
  updatePersonAgeByName,
} = require("./script/updatePerson");

// Importer le script deletePerson.js
const {
  deletePersonById,
  deletePeopleByName,
} = require("./script/deletePerson");

// Importer la fonction chainSearch
const findBurritos = require("./script/ChainSearch");

// Connexion à MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    // Remove useNewUrlParser and useUnifiedTopology options
    // They have no effect since Node.js Driver version 4.0.0
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully ✅");
    // Appeler la fonction createPerson() après la connexion réussie
    createSinglePerson();
    createMultiplePeople();

    // Exécuter les fonctions de recherche
    findPersonByFirstName("Kevin");
    findPersonByFavoriteFood("Sushi");
    findPersonById("661b4ef0403061cdfc66ecb3");

    // Appeler les fonctions pour mettre a jour
    updatePersonFavoriteFood("661bccaa546f004a179af4b8");
    updatePersonAgeByName(Emma);

    // Appeler les fonctions pour supprimer les elements
    deletePersonById("661bccaa546f004a179af4b7");
    deletePeopleByName("Mary");

    // Appeler la fonction pour Recherches en Chaîne les Requêtes
    findBurritos();
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

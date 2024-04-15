const mongoose = require("mongoose");

// Créer un schéma pour la personne
const personSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  favoriteFoods: { type: [String] }, // tableau de chaînes
  gender: { type: String, enum: ["male", "female", "other"] },
});

// Créer un modèle basé sur le schéma
const PersonExp = mongoose.model("Person", personSchema);

// Exporter le modèle
module.exports = PersonExp;

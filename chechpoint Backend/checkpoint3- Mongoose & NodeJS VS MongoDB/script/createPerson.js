const Person = require("../schema/person");

function createSinglePerson() {
  const singlePerson = new Person({
    firstname: "Paul",
    lastname: "Uchenna",
    age: 27,
    email: "pauluchenna20@gmail.com",
    favoriteFoods: ["Pizza", "Tchieb", "Burger"],
    gender: "male",
  });

  singlePerson
    .save()
    .then((savedPerson) => {
      console.log("Enregistrement de la personne réussi :", savedPerson);
    })
    .catch((error) => {
      console.error("Erreur lors de l'enregistrement de la personne :", error);
    });
}

function createMultiplePeople() {
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
      favoriteFoods: ["Sushi", "Burger", "Burritos"],
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
      favoriteFoods: ["Sushi", "Chocolate", "Burritos"],
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
}

module.exports = {
  createSinglePerson,
  createMultiplePeople,
};

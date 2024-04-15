# Checkpoint Mongoose & NodeJS VS MongoDB

Dans Checkpoint, j'ai appris à manipuler et gérer ma base de données en utilisant Mongoose, une bibliothèque d'ODM pour MongoDB.

Ce document regroupe un ensemble de fichiers organisés dans un dossier "script" afin de modulariser les opérations CRUD (Create, Read, Update, Delete). Chaque opération CRUD est séparée dans un fichier JavaScript distinct pour une meilleure gestion du code. Voici la structure des fichiers :

- `AllOperations.js`: Fichier regroupant l'ensemble des opérations CRUD, combinant les fonctionnalités de `createPerson.js`, `findPerson.js`, `updatePerson.js` et `deletePerson.js`.
- `app.js`: Fichier principal qui initialise la connexion à la base de données MongoDB et appelle les différentes fonctions définies dans les autres fichiers.
- `createPerson.js`: Fichier contenant la logique pour créer une nouvelle personne dans la base de données.
- `findPerson.js`: Fichier contenant la logique pour rechercher des personnes dans la base de données en fonction de différents critères.
- `updatePerson.js`: Fichier contenant la logique pour mettre à jour des informations sur une personne dans la base de données.
- `deletePerson.js`: Fichier contenant la logique pour supprimer des personnes de la base de données.
- `chainSearch.js`: Fichier contenant la logique pour effectuer des recherches en chaîne afin d'aider à restreindre les résultats de recherche.
- `models/`: Dossier contenant le modèle de données pour représenter une personne, défini dans le fichier person.js.

## Installation et Configuration de Mongoose

Pour commencer, j'install MongoDB et Mongoose à mon fichier `package.json`. Et je stocke l'URI de ma base de données MongoDB Atlas dans un fichier `.env` en tant que `MONGO_URI`. On se connecte à la base de données en utilisant la syntaxe suivante :

```javascript
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

## Création d'une Personne avec Mongoose

On définis le prototype d'une personne avec les champs suivants :

- Nom: String [obligatoire]
- Âge: Number
- FavoriteFoods: Array de Strings

Utilisons les types de schéma de base de Mongoose pour définir ce schéma. Nous pouvons également ajouter d'autres champs, utiliser des validateurs comme requis ou unique, et définir des valeurs par défaut.

## Création et Enregistrement d'un Enregistrement d'un Modèle

Créons une instance de document en utilisant le constructeur de modèle que nous avons défini précédemment. Ensuite, appelons la méthode `save()` sur cette instance de document pour l'enregistrer dans la base de données.

## Création de Nombreux Enregistrements avec Model.create()

`Model.create()` pour créer plusieurs instances de nos modèles en une seule opération.

## Recherche dans Votre Base de Données avec model.find()

`Model.find()` pour rechercher toutes les personnes ayant un prénom spécifique.

## Recherche d'un Document Unique avec model.findOne()

Pour trouver une seule personne ayant un aliment spécifique dans sa liste de favoris en utilisant `Model.findOne()`.

## Recherche d'un Document par \_id avec model.findById()

Trouver une personne unique par son `_id` en utilisant `Model.findById()`.

## Mises à Jour de Documents avec model.findOneAndUpdate()

Modifier un document en utilisant `Model.findOneAndUpdate()`. Nous recherche une personne par son nom et redéfinir son âge sur 20 ans.

## Suppression de Documents avec model.findByIdAndRemove()

Supprimer une personne par son `_id` en utilisant `Model.findByIdAndRemove()`.

## Suppression de Documents avec model.remove()

Supprimer toutes les personnes ayant un nom spécifique en utilisant `Model.remove()`.

## Recherche en Chaîne Requête pour Restreindre les Résultats de Recherche

Trouver des personnes qui aiment les **burritos**, triées par nom, avec un maximum de deux résultats et leur âge masqué. Une chaîne de méthodes de requête, notamment `.find()`, `.sort()`, `.limit()`, `.select()`, puis `.exec()`.

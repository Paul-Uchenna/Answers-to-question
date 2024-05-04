# Application To-Do List React

Cette application To-Do List simple est conçue pour vous aider à gérer vos tâches quotidiennes de manière efficace. Elle permet d'ajouter, de modifier, de supprimer et de marquer les tâches comme terminées. De plus, elle utilise la validation de formulaire pour garantir des entrées correctes et persiste les tâches entre les sessions à l'aide du stockage du navigateur.

## Exécution de l'application localement

### Prérequis

- Node.js installé localement sur votre machine
- npm ou yarn

### Étapes d'installation

1. Clonez ce dépôt sur votre machine locale :

```bash
git clone https://github.com/Paul-Uchenna/Checkpoints/tree/main/chechpoint%20React%20JS/checkpoint7-react%20TodoList
```

### `npm start`

Exécutez l'application en mode développement.\
Ouvrez [http://localhost:4000](http://localhost:4000) dans votre navigateur pour y accéder.

## Fonctionnalités de l'application

- **Ajout de tâches :** Utilisez le formulaire pour ajouter de nouvelles tâches en saisissant le nom et la description de la tâche. La validation de formulaire garantit que les deux champs sont remplis avant d'ajouter une tâche.

- **Liste de tâches :** Affichez la liste des tâches avec des options pour les modifier, les supprimer et les marquer comme terminées. Les tâches terminées sont visuellement distinguées des tâches actives.

- **Modification de tâches :** Cliquez sur une tâche pour afficher un formulaire pré-rempli avec les détails de la tâche. Vous pouvez ensuite mettre à jour le nom et la description de la tâche.

- **Suppression de tâches :** Supprimez des tâches de la liste avec une invite de confirmation pour éviter les suppressions accidentelles.

- **Stockage du navigateur :** Les tâches sont persistées entre les sessions à l'aide du stockage du navigateur (localStorage ou sessionStorage).

## Structure du code

Le code de l'application est bien structuré, avec des composants séparés pour différentes parties de l'application. Voici quelques-uns des principaux composants utilisés :

- **TaskList:** Affiche la liste des tâches.

- **TaskForm:** Formulaire pour ajouter ou modifier des tâches.

- **TaskItem:** Représente une tâche individuelle dans la liste.

- **TaskComplete:** Affiche les tâches terminées.

- **TaskTodo:** Affiche les tâches à faire.

- **Navbar:** Barre de navigation pour afficher des informations sur la liste des tâches.

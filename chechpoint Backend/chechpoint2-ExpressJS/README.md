# [FR] Checkpoint Express (Routing)

Dans ce point de contrôle, l'objectif est de créer une application web avec trois pages principales :

- Page d'accueil.
- Nos Services.
- Contactez-nous.

Les pages doivent répondre aux exigences suivantes :

- Chaque page doit contenir un lien de barre de navigation (Accueil, Nos Services, Contactez-nous).
- Le contenu des pages peut être personnalisé selon nos besoins.
- L'application web n'est disponible que pendant les heures de travail (Lundi au Vendredi, de 9h à 17h).

## Instructions

Pour réaliser cet objectif, il faut suivre les instructions suivantes :

1. Utilisez Express pour créer le serveur et gérer les itinéraires.
2. Créez un middleware personnalisé pour vérifier l'heure de la demande et restreindre l'accès aux heures de travail.
3. Assurez-vous que les pages sont stylisées avec CSS pour une présentation agréable.
4. Nous pouvons la possibilité d'utiliser n'importe quel moteur de modèle pour rendre les pages dynamiques, mais ce n'est pas obligatoire.

## Comment exécuter le projet

1. Assurez-vous d'avoir Node.js installé sur votre machine.
2. Clonez ce dépôt sur votre ordinateur.
3. Installez les dépendances en exécutant la commande `npm install`.
4. Lancez l'application en utilisant la commande `npm start`.
5. Accédez à l'application dans votre navigateur en ouvrant l'URL `http://localhost:4000`.

## Structure du projet

- `app.js`: Fichier principal contenant la configuration du serveur Express.
- `views/`: Répertoire contenant les fichiers HTML pour les différentes pages.
- `public/`: Répertoire contenant les fichiers statiques (CSS, images, etc.).

---

# [EN] Express Checkpoint (Routing)

In this checkpoint, the goal is to create a web application with three main pages:

- Home page.
- Our Services.
- Contact Us.

The pages must meet the following requirements:

- Each page should contain a navigation bar link (Home, Our Services, Contact Us).
- The content of the pages can be customized as needed.
- The web application is only available during working hours (Monday to Friday, from 9am to 5pm).

## Instructions

To achieve this goal, follow these instructions:

1. Use Express to create the server and handle routes.
2. Create a custom middleware to verify the request time and restrict access to working hours.
3. Ensure that the pages are styled with CSS for a pleasant presentation.
4. We have the option to use any template engine to make the pages dynamic, but it's not mandatory.

## How to Run the Project

1. Make sure you have Node.js installed on your machine.
2. Clone this repository to your computer.
3. Install dependencies by running the command `npm install`.
4. Start the application using the command `npm start`.
5. Access the application in your browser by opening the URL `http://localhost:4000`.

## Project Structure

- `app.js`: Main file containing the configuration of the Express server.
- `views/`: Directory containing HTML files for the different pages.
- `public/`: Directory containing static files (CSS, images, etc.).

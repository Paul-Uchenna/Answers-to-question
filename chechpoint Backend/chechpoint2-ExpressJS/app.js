// Importer les modules nécessaires
const path = require("path");
const express = require("express");
const app = express();

// Middleware personnalisé pour vérifier les heures de travail
const workingHoursMiddleware = (req, res, next) => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const hourOfDay = now.getHours();

  // Vérifier si c'est un jour de semaine et dans les heures de travail
  if (dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 9 && hourOfDay < 17) {
    next(); // Continuer vers le prochain middleware ou gestionnaire de route
  } else {
    // Envoyer le statut d'erreur 505
    res
      .status(503)
      .send(
        "Désolé, le site web est disponible uniquement pendant les heures de travail (du lundi au vendredi, de 9h à 17h)."
      );
  }
};

// Servir les fichiers statiques depuis le répertoire "Public et views"
app.use(express.static(path.join(__dirname, "Public")));
app.use(express.static(path.join(__dirname, "views")));

// Appliquer le middleware personnalisé à toutes les routes
app.use(workingHoursMiddleware);

// Définir les routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "homepage.html"));
});

app.get("/services.html", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "services.html"));
});

app.get("/contact.html", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html"));
});

// Démarrer le serveur
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Le serveur écoute sur le port ${PORT}`);
});

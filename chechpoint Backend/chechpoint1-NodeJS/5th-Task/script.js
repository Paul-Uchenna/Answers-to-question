// Importer le module nodemailer
import nodemailer from "nodemailer";

// Configurer le transporteur
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "votre@gmail.com", // Votre adresse e-mail Gmail
    pass: "votre_mot_de_passe", // Votre mot de passe Gmail
  },
});

// Définir les options du message
const mailOptions = {
  from: "votre@gmail.com", // Votre adresse e-mail
  to: "destinataire@gmail.com", // Adresse e-mail du destinataire
  subject: "Test d'e-mail avec nodemailer", // Objet du message
  text: "Ceci est un test d'e-mail envoyé depuis Node.js avec nodemailer.", // Contenu du message au format texte brut
};

// Fonction pour envoyer l'e-mail
const sendEmail = async () => {
  try {
    // Envoyer l'e-mail
    const info = await transporter.sendMail(mailOptions);
    console.log("E-mail envoyé avec succès :", info.response);
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail :", error);
  }
};

sendEmail();

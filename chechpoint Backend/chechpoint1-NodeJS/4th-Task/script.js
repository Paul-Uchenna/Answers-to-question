// Importer le module generate-password
import generatePassword from "generate-password";

// Fonction pour générer et afficher un mot de passe aléatoire
function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12, // Longueur du mot de passe
    numbers: true, // Inclure des chiffres
    symbols: true, // Inclure des symboles
    uppercase: true, // Inclure des lettres majuscules
    excludeSimilarCharacters: true, // Exclure les caractères similaires
  });

  console.log("Mot de passe généré:", password);
}

generateRandomPassword();

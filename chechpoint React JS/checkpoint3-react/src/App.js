import React, { Component } from "react";

class App extends Component {
  state = {
    // Initialisation de l'état avec les informations de la personne, show initialisé à false, et elapsedTime initialisé à 0
    person: {
      fullName: "Jason Statham",
      bio: "Jason Statham is a British actor and film producer known for his action-packed roles.",
      imgSrc:
        "https://i.pinimg.com/564x/67/dd/33/67dd333696cf3b13702f83e97e16167d.jpg",
      profession: "Actor",
    },
    show: false,
    elapsedTime: 0,
  };

  // Méthode pour compter le temps écoulé
  componentCount() {
    // Utilisation de setInterval pour mettre à jour elapsedTime chaque seconde
    this.interval = setInterval(() => {
      this.setState((state) => ({
        elapsedTime: state.elapsedTime + 1,
      }));
    }, 1000);
  }

  // Méthode appelée après le montage du composant
  componentDidMount() {
    // Appel de la méthode pour commencer à compter le temps
    this.componentCount();
  }

  // Méthode pour basculer l'affichage du profil
  toggleProfile = () => {
    this.setState((state) => ({
      show: !state.show,
    }));
  };

  // Rendu du composant
  render() {
    // Destructuration des données de l'état
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, elapsedTime } = this.state;
    return (
      <div
        style={{
          fontFamily: "Roboto, sans-serif",
          textAlign: "center",
          maxWidth: "400px",
          borderRadius: "10px",
          margin: "40px auto",
          background: "#460273",
          color: "#fff",
        }}
      >
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
          onClick={this.toggleProfile}
        >
          {show ? "Hide Profile" : "Show Profile"}
        </button>
        {/* Affichage du profil si show est vrai */}
        {show && (
          <div style={{ marginBottom: "20px" }}>
            <h2>{fullName}</h2>
            <img
              src={imgSrc}
              alt={fullName}
              style={{ width: "200px", borderRadius: "50%" }}
            />
            <p style={{ marginTop: "10px" }}>{bio}</p>
            <p>
              <strong> Profession:</strong> {profession}
            </p>
          </div>
        )}
        {/* Affichage du temps écoulé */}
        <p style={{ paddingBottom: "15px" }}>
          <strong>Elapsed Time:</strong> {elapsedTime} seconds
        </p>
      </div>
    );
  }
}

export default App;

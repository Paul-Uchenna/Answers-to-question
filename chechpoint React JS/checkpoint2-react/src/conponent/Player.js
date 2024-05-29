import React from "react";
import Card from "react-bootstrap/Card";

function Player({ name, team, nationality, jerseyNumber, age, imageUrl }) {
  return (
    // Card component to display player information
    <Card
      style={{
        width: "100%",
        maxWidth: "300px",
        margin: "10px",
      }}
    >
      <Card.Img
        style={{
          width: "100%",
          height: "500px",
          objectFit: "cover",
          borderRadius: "15px",
        }}
        src={imageUrl}
      />
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title>
          <strong>{name || "Unknown"}</strong>
        </Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team || "Unknown"}
          <br />
          <strong>Nationality:</strong> {nationality || "Unknown"}
          <br />
          <strong>Jersey Number:</strong> {jerseyNumber || "Unknown"}
          <br />
          <strong>Age:</strong> {age || "N/A"}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Player;

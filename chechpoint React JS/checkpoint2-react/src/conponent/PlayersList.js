import React from "react";
import Player from "./Player"; // Import the Player component
import playersData from "./players"; // Import player data from Players.js ,I chose to name it playerData to avoid confusion with the player component

const PlayersList = () => {
  // Mapping through the player data using a different variable name
  const playerData = playersData.map((player, id) => (
    // Pass each player's data as props to the Player component
    <Player
      key={id}
      name={player.name}
      team={player.team}
      nationality={player.nationality}
      jerseyNumber={player.jerseyNumber}
      age={player.age}
      imageUrl={player.imageUrl}
    />
  ));

  return (
    <div>
      {/* Title for the list of players */}
      <h2 style={{ fontSize: "32px", textAlign: "center" }}>
        FIFA Player Cards
      </h2>

      {/* Container to display player cards */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {/* Render the mapped player data */}
        {playerData}
      </div>
    </div>
  );
};

export default PlayersList;

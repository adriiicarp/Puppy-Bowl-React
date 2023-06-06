import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../api";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() =>{
    async function getAllPlayers(){
      const APIResponse = await fetchAllPlayers();
        if (APIResponse.success) {
          setPlayers(APIResponse.data.players);
        } else {
          setError(APIResponse.error.message);
        }
    }
    getAllPlayers();
  }, []);
  
console.log("Players: ", players);
console.log("Error in component", error);

const playersToDisplay = players.map((player) => {
  return (
    <div key={player.id}>
      <h3>{player.name}</h3>
    </div>
  );
});

  return (
    <div>
      {error && <p>{error}</p>}
      {playersToDisplay}
    </div>
  );
}


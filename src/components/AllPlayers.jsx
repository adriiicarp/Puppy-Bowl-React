import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../api";
import PlayerListName from "./PlayerListName";
import CreatePlayerForm from "./CreatePlayerForm";

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

const playersToDisplay = players.map((player) => {
  return <PlayerListName key={player.id} player={player} />;
});

  return (
    <div>
      <CreatePlayerForm players={players} setPlayers={setPlayers} />
      {error && <p>{error}</p>}
      {playersToDisplay}
    </div>
  );
}


import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../api";
import PlayerListName from "./PlayerListName";
import CreatePlayerForm from "./CreatePlayerForm";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");

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


const filteredPlayers = players.filter((player) => {
    return player.name.toLowerCase().includes(searchParam);
}) 

const playersToDisplay = searchParam ? players : filteredPlayers; 

const allPlayersToDisplay = playersToDisplay.map((player) => {
  return <PlayerListName key={player.id} player={player} />;
});

console.log("search param: ", searchParam);
console.log("filtere players: ", filteredPlayers);

  return (
    <div>
      <div>
        <input 
          type="text" 
          placeholder="search" 
          onChange={(e) => setSearchParam(e.target.value.toLocaleLowerCase())}
        />
      </div>
      <CreatePlayerForm players={players} setPlayers={setPlayers} />
      {error && <p>{error}</p>}
      {searchParam? filteredPlayers : allPlayersToDisplay}
    </div>
  );
}


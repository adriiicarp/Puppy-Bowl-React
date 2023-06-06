import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../api";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() =>{
    async function getAllPlayers(){
      const APIResponse = await fetchAllPlayers();
        if (APIResponse.succes) {
          setPlayers(APIResponse.data.players);
        } else {
          setError(APIResponse.error.message);
        }
    }
    getAllPlayers();
  }, []);
  
console.log("Players: ", players);
console.log("Error in component", error);

  return <div>AllPlayers</div>;
}


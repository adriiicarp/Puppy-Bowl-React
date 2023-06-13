const COHORT = "2301-ftb-et-web-am";
const baseUrl = `http://fsa-puppy-bowl.herokuapp.com/api/${COHORT}`

export async function fetchAllPlayers() {
    try {
      const response = await fetch(`${baseUrl}/players`);
      const result = await response.json();
      return result;    
    } catch (error) {
      console.error(error);
    }
}

export async function fetchSinglePlayer(id) {
  try {
    const response = await fetch(`${baseUrl}/players/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error (error);
  }
}

export async function createPlayer(name, breed){
  try {
    const response = await fetch(`${baseUrl}/players`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        breed
      })
    });
    const result = await response.json()
    return result; 
  } catch (error) {
    console.error(error);
  }
}
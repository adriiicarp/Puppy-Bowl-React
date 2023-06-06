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
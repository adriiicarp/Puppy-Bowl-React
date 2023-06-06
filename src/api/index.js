const COHORT = "2301-ftb-et-web-am";
const baseUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}`;

export async function fetchAllPlayers() {
    try {
        const response = await fetch(baseUrl);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

export async function fetchSinglePlayer(id) {
    try {
        const response = await fetch(baseUrl);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

export async function createPlayer(name, breed) {
    try {
        const response = await fetch(
            'https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-am/players',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name,
                breed,
              })
            }
          );
   
    const result = await response.json()
    console.log("result: ", result)
    return result;
    } catch (error) {
        console.error(error);
    }
}
const baseURL = 'http://localhost:3000/api/sightings/'

export default {
  getSightings(){
    return fetch(baseURL)
    .then(res => res.json())
  },

  postSighting (sighting) {
    return fetch(baseURL, {
      method: "POST",
      body: JSON.stringify(sighting),  // TODO: Research what this does
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json());
  },

  deleteSighting (sighting) {
    return fetch(
      
    )
  }
}

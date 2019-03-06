/* fetch("https://swapi.co/api/people/1/")
  .then((resp) => {
    return resp.json();
  })
  .then((body) => {
    console.log(body);
  }); */

// async/await
/*
getResourse("https://swapi.co/api/people/1/")
  .then((body) => {
    console.log(body);
  })
  .catch((err) => {
    console.error(`Could not fetch`, err);
  });

const getResourse = async (url) => {
  const resp = await fetch(url);
  if(!resp.ok) {                    // This method is used to send a 200 ("OK") response back down to the client
    throw new Error(`Could not fetch ${url}`, `received ${url.status}`);
  }
  const body = await resp.json();
  return body;
};
*/

export default class SwapiService {

  _apiBase = `https://swapi.co/api`

  async getResourse(url) {
    const resp = await fetch(`${this._apiBase}${url}`);

    if(!resp.ok) {                    // This method is used to send a 200 ("OK") response back down to the client
      throw new Error(`Could not fetch ${url}`, `received ${url.status}`);
    }

    return await resp.json();
  }

  async getAllPeople() {
    const res = await this.getResourse(`/people/`);
    return res.results.map(this._transformPerson);
  }

  async getAllPlanets() {
    const res = await this.getResourse(`/planets/`);
    return res.results.map(this._transformPlanet);
  }

  async getAllStarships() {
    const res = await this.getResourse(`/starships/`);
    return res.results.map(this._transformStarship);
  }

  async getPerson(id) {
    const person = await this.getResourse(`/people/${id}`);
    return this._transformPerson(person);
  }

  async getPlanet(id) {
    const planet = await this.getResourse(`/planets/${id}`);
    return this._transformPlanet(planet);
  }

  async getStarship(id) {
    const starship = await this.getResourse(`/starships/${id}`);
    return this._transformStarship(starship);
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity
    }
  }

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }

}
/*
const swapi = new SwapiService();

swapi.getAllPeople().then((people) => {
  people.forEach((p) => console.log(p.name));
});

swapi.getPerson(`2`).then((person) => {
  console.log(person);
});*/

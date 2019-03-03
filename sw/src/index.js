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

class SwapiService {

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
    return res.results;
  }

  async getAllPlanets() {
    const res = await this.getResourse(`/planets/`);
    return res.results;
  }

  async getAllStarships() {
    const res = await this.getResourse(`/starships/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResourse(`/people/${id}`);
  }

  getPlanet(id) {
    return this.getResourse(`/planets/${id}`);
  }

  getStarship(id) {
    return this.getResourse(`/starships/${id}`);
  }

}

const swapi = new SwapiService();

swapi.getAllPeople().then((people) => {
  people.forEach((p) => console.log(p.name));
});

swapi.getPerson(`2`).then((person) => {
  console.log(person);
});

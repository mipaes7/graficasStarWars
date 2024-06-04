let titulos = [];
let years = [];

const getPelis = async () => {
    try {
        const resp = await fetch('https://swapi.dev/api/films/');

        if (resp.ok) {
            const dataFetch = await resp.json();
            console.log(dataFetch.results);
            const results = dataFetch.results;
            results.forEach(element => {
                titulos.push(element.title);
                years.push(parseInt(element.release_date.slice(0, 4)));
            });
            const data = {
                labels: titulos,
                series: [
                    years
                ]
            };

            const options = {
                low: 1975,
                high: 2005,
                fullWidth: true,
                axisY: {
                    onlyInteger: true,
                    offset: 50
                }
            }

            new Chartist.Line('#chart1', data, options);
        } else {
            throw resp;
        }


    } catch (error) {
        throw console.log(error.status);
    }
}
getPelis();

let characters = [];
let numOfMovies = [];

const getCharacters = async () => {
    try {
        const resp = await fetch('https://swapi.dev/api/people/');

        if(resp.ok) {
            const dataFetch = await resp.json();
            console.log(dataFetch);
            const results = dataFetch.results;
            results.forEach(element => {
                characters.push(element.name);
                numOfMovies.push(element.films.length);
            });
            const data = {
                labels: characters,
                series: [
                    numOfMovies
                ]
            };

            const options = {
                fullWidth: true,
                axisY: {
                    onlyInteger: true,
                    offset: 50
                }
            }

            new Chartist.Bar('#chart2', data, options);
        } else {
            throw resp;
        }
    

    } catch (error) {
        throw console.log(error.status);
    }

}
getCharacters();
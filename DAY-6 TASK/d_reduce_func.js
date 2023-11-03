const xhr = new XMLHttpRequest();
xhr.open('GET', "https://restcountries.com/v3.1/all");
xhr.send();

xhr.onload = function () {
    console.log(xhr.responseText);
    const arr = JSON.parse(xhr.responseText);

    const result = arr.filter(country => {
        let population = country.population;
        return population;
    });

    const totalPopulation = result.reduce((accumulator, country) => {
        return accumulator + country.population;
    }, 0);

    console.log("Total population: " + totalPopulation);
};

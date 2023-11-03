const xhr = new XMLHttpRequest();
xhr.open('GET', "https://restcountries.com/v3.1/all");
xhr.send();

xhr.onload = function () {
    console.log(xhr.responseText)
    const arr = JSON.parse(xhr.responseText);

    const result = arr.filter(country => {
        let continent = country.continents
        let region = country.region
        if ((continent ==="Asia") || (region ==="Asia")){

           console.log(country)
        }    

    })    
    }
    

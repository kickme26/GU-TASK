const xhr = new XMLHttpRequest();
xhr.open('GET', "https://restcountries.com/v3.1/all");
xhr.send();

xhr.onload = function () {
    console.log(xhr.responseText);
    const arr = JSON.parse(xhr.responseText);

    const result = arr.filter(country => {
        const currencies = country.currencies;
        if (currencies.USD) {
            return true;
        }
        return false;
    });

    console.log(result);
};

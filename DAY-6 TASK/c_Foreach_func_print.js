const xhr = new XMLHttpRequest();
xhr.open('GET', "https://restcountries.com/v3.1/all");
xhr.send();

xhr.onload = function () {
    console.log(xhr.responseText)
    const arr = JSON.parse(xhr.responseText);
    console.log(arr.forEach(element => {     
        console.log(element.name)
        console.log(element.capital)
        console.log(element.flag)
    }));

}


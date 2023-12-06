

const h1Element = document.createElement("h1")
h1Element.innerHTML = "Movies"
console.log(h1Element)

const DivTamil = document.createElement("div");
DivTamil.setAttribute("id", "tamil");
const DivMalai = document.createElement("div");
DivMalai.setAttribute("id", "malai");
const DivHindi = document.createElement("div");
DivHindi.setAttribute("id", "hindi");


var img1 =  SetImageElement("https://www.91-cdn.com/metareel-images/content/posters-7-1697183289469-qT2xJtJ7Jza5gC4RSiEXWrztZHo.jpg?tr=h-350,q-40&version=5","Leo")
        
var img2 =  SetImageElement("https://www.91-cdn.com/metareel-images/content/posters-1697706691-28AzafDajgmd53F2DgMAK2ncu3K.jpg?tr=h-350,q-40&version=5", "Irugapatru")

var img3 = SetImageElement("https://www.91-cdn.com/metareel-images/content/posters-7-1695260939784-3xz1lfMrFlNtZ4H8DQKvYog8ilR.jpg?tr=h-350,q-40&version=5","Mark Antony")

var img4 = SetImageElement("https://www.91-cdn.com/metareel-images/content/posters-7-1687313047095-t0oUDRi8izy8Hn5yx6tzy55t1z3.jpg?tr=h-350,q-40&version=5", "Hridayam ")

var img5 = SetImageElement("https://www.91-cdn.com/metareel-images/content/posters-7-1686169459892-zZ4qJFfv6UXqb6otLBW2qzOQu4C.jpg?tr=h-350,q-40&version=5","Dhoomam")

var img6 = SetImageElement("https://www.91-cdn.com/metareel-images/content/posters-7-1692064008738-jFt1gS4BGHlK8xt76Y81Alp4dbt.jpg?tr=h-350,q-40&version=5","Jawan")

function SetImageElement(url,alt){
    const img = document.createElement('img');
    img.setAttribute('src', url);
    img.alt = alt;
    return img;
}

// console.log(img1,img2,img3,img4,img5,img6)
const lineBreak = document.createElement('br');
const TamilMov = document.createElement('h3');
TamilMov.textContent = "Tamil";
const MalaiMov = document.createElement('h3');
MalaiMov.textContent = "Malayalam";
const HindiMov = document.createElement('h3');
HindiMov.textContent = "Hindi";


DivTamil.appendChild(TamilMov);
DivTamil.append(img1, img2, img3);

DivMalai.appendChild(MalaiMov);
DivMalai.append(img4, img5);

DivHindi.appendChild(HindiMov);
DivHindi.append(img6);

document.body.append(h1Element,DivTamil,DivMalai,DivHindi)


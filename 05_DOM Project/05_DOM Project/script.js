var mainDiv = document.querySelector('.recipe-gallery');
var divToAppend = document.createElement('div');
divToAppend.className = "card";
var a2 = document.createElement('a');
a2.className = "recipe-text";
var imgEle = document.createElement('img');
imgEle.src = "./img/recipe-5.jpeg";
imgEle.className = "recipe-img";
var inn = document.createElement('h5');
inn.className = "recipe-name";
inn.innerText = "Hakka Cheese Noodles";
var pTag = document.createElement('p');
pTag.className = "recipe-disp";
pTag.innerText = "Prep : 15min | Cook : 30min";
a2.appendChild(imgEle);
a2.appendChild(inn);
a2.appendChild(pTag);
divToAppend.appendChild(a2);
mainDiv.appendChild(divToAppend);
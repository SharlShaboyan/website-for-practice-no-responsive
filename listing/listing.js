"use strict";

import {navigation} from '../JS/moduls/navigation.js';
navigation("../images/black-logo.png", "../images/white-logo.png");

let right = document.querySelector('.right');

let one = document.querySelector('.mek');
let two = document.querySelector('.erku');
let three = document.querySelector('.ereq');
let forr = document.querySelector('.chors');

let dd1 = document.querySelector('.dot11');
let dd2 = document.querySelector('.dot22');
let dd3 = document.querySelector('.dot33');


let final = [
    {
        img : "../images/listing-01.jpg",
        title : "1. First Apartment Unit",
        descr : "by: Sale Agent",
        cost : "$450-$700 / month with taxes.",
        details : "1640 st fc",
        bed : "2 Bedrooms",
        beth : "4 Bathrooms"
    },
    {
        img : "../images/listing-02.jpg",
        title : "2. First Apartment Unit",
        descr : "by: Sale Agent",
        cost : "$450-$700 / month with taxes.",
        details : "1640 st fc",
        bed : "2 Bedrooms",
        beth : "4 Bathrooms"
    },
    {
        img : "../images/listing-03.jpg",
        title : "3. First Apartment Unit",
        descr : "by: Sale Agent",
        cost : "$450-$700 / month with taxes.",
        details : "1640 st fc",
        bed : "2 Bedrooms",
        beth : "4 Bathrooms"
    }
];

let final2 = [
    {
        img : "../images/listing-04.jpg",
        title : "4. First Apartment Unit",
        descr : "by: Sale Agent",
        cost : "$450-$700 / month with taxes.",
        details : "1640 st fc",
        bed : "2 Bedrooms",
        beth : "4 Bathrooms"
    },
    {
        img : "../images/listing-05.jpg",
        title : "5. First Apartment Unit",
        descr : "by: Sale Agent",
        cost : "$450-$700 / month with taxes.",
        details : "1640 st fc",
        bed : "2 Bedrooms",
        beth : "4 Bathrooms"
    },
    {
        img : "../images/listing-06.jpg",
        title : "6. First Apartment Unit",
        descr : "by: Sale Agent",
        cost : "$450-$700 / month with taxes.",
        details : "1640 st fc",
        bed : "2 Bedrooms",
        beth : "4 Bathrooms"
    }
];

let final3 = [
    {
        img : "../images/listing-01.jpg",
        title : "7. First Apartment Unit",
        descr : "by: Sale Agent",
        cost : "$450-$700 / month with taxes.",
        details : "1640 st fc",
        bed : "2 Bedrooms",
        beth : "4 Bathrooms"
    },
    {
        img : "../images/listing-02.jpg",
        title : "8. First Apartment Unit",
        descr : "by: Sale Agent",
        cost : "$450-$700 / month with taxes.",
        details : "1640 st fc",
        bed : "2 Bedrooms",
        beth : "4 Bathrooms"
    },
    {
        img : "../images/listing-03.jpg",
        title : "9. First Apartment Unit",
        descr : "by: Sale Agent",
        cost : "$450-$700 / month with taxes.",
        details : "1640 st fc",
        bed : "2 Bedrooms",
        beth : "4 Bathrooms"
    }
];

let final4 = [
    {
        img : "../images/listing-04.jpg",
        title : "10. First Apartment Unit",
        descr : "by: Sale Agent",
        cost : "$450-$700 / month with taxes.",
        details : "1640 st fc",
        bed : "2 Bedrooms",
        beth : "4 Bathrooms"
    },
    {
        img : "../images/listing-05.jpg",
        title : "11. First Apartment Unit",
        descr : "by: Sale Agent",
        cost : "$450-$700 / month with taxes.",
        details : "1640 st fc",
        bed : "2 Bedrooms",
        beth : "4 Bathrooms"
    },
    {
        img : "../images/listing-06.jpg",
        title : "12. First Apartment Unit",
        descr : "by: Sale Agent",
        cost : "$450-$700 / month with taxes.",
        details : "1640 st fc",
        bed : "2 Bedrooms",
        beth : "4 Bathrooms"
    }
];

function addSlide2(arr) {
arr.forEach((elem) => {
let itemSl = document.createElement('div');
itemSl.classList.add('item-sl');
itemSl.innerHTML = `
        <div class="le">
            <img src="${elem.img}" />
        </div>
        
        <div class="ri">
            <p class="item-title">${elem.title}</p><br />
            <p class="item-descr">${elem.descr}</p><br />
            <p class="item-cost"><i class="fas fa-money-bill"></i> ${elem.cost}</p><br />
            <p class="item-details">Details : ${elem.details}</p><br />
            <p class="item-bed"><i class="fas fa-bed"></i> ${elem.bed}</p><br />
            <p class="item-beth"><i class="fas fa-bath"></i> ${elem.beth}</p>
        </div>
`;
    right.appendChild(itemSl);
    });
};

function cols (ar) {
    one.style.backgroundColor = "#8d99af";
    two.style.backgroundColor = "#8d99af";
    three.style.backgroundColor = "#8d99af";
    forr.style.backgroundColor = "#8d99af";
    ar.style.backgroundColor = "rgb(58, 61, 66)";
}

one.style.backgroundColor = "rgb(58, 61, 66)";
addSlide2(final);

one.addEventListener("click", () => {
    right.innerHTML = "";
    addSlide2(final);
    cols(one);
    dd1.style.color = "black";
    dd2.style.color = "grey";
    dd3.style.color = "grey";
});

two.addEventListener("click", () => {
    right.innerHTML = "";
    addSlide2(final2);
    cols(two);
    dd1.style.color = "black";
    dd2.style.color = "grey";
    dd3.style.color = "grey";
});

three.addEventListener("click", () => {
    right.innerHTML = "";
    addSlide2(final3);
    cols(three);
    dd1.style.color = "black";
    dd2.style.color = "grey";
    dd3.style.color = "grey";
});

forr.addEventListener("click", () => {
    right.innerHTML = "";
    addSlide2(final4);
    cols(forr);
    dd1.style.color = "black";
    dd2.style.color = "grey";
    dd3.style.color = "grey";
});


dd1.addEventListener("click", () => {
    right.innerHTML = "";
    addSlide2(final);
    
    dd1.style.color = "black";
    dd2.style.color = "black";
    dd3.style.color = "grey";
});

dd2.addEventListener("click", () => {
    right.innerHTML = "";
    addSlide2(final2);
    dd1.style.color = "grey";
    dd2.style.color = "black";
    dd3.style.color = "grey";
});

dd3.addEventListener("click", () => {
    right.innerHTML = "";
    addSlide2(final3);
    
    dd1.style.color = "grey";
    dd2.style.color = "grey";
    dd3.style.color = "black";
});




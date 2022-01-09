export function slshow2() {
    
  let slide22 = [
    {
        img : "images/listing-01.jpg",
        title : "1. First Apartment Unit",
        descr : "by: Sale Agent",
        cost : "$450-$700 / month with taxes.",
        details : "1640 st fc",
        review : "(18) reviews",
        contact : "Contact now",
        bed : "2 Bedrooms",
        beth : "4 Bathrooms"
    },
    {
        img : "images/listing-02.jpg",
        title : "2. First Apartment Unit",
        descr : "by: Sale Agent",
        cost : "$450-$700 / month with taxes.",
        details : "1640 st fc",
        review : "(18) reviews",
        contact : "Contact now",
        bed : "2 Bedrooms",
        beth : "4 Bathrooms"
    },
    {
        img : "images/listing-03.jpg",
        title : "3. First Apartment Unit",
        descr : "by: Sale Agent",
        cost : "$450-$700 / month with taxes.",
        details : "1640 st fc",
        review : "(18) reviews",
        contact : "Contact now",
        bed : "2 Bedrooms",
        beth : "4 Bathrooms"
    }
];

let slide33 = [
    {
        img : "images/listing-04.jpg",
        title : "4. First Apartment Unit",
        descr : "by: Sale Agent",
        cost : "$450-$700 / month with taxes.",
        details : "1640 st fc",
        review : "(18) reviews",
        contact : "Contact now",
        bed : "2 Bedrooms",
        beth : "4 Bathrooms"
    },
    {
        img : "images/listing-05.jpg",
        title : "5. First Apartment Unit",
        descr : "by: Sale Agent",
        cost : "$450-$700 / month with taxes.",
        details : "1640 st fc",
        review : "(18) reviews",
        contact : "Contact now",
        bed : "2 Bedrooms",
        beth : "4 Bathrooms"
    },
    {
        img : "images/listing-06.jpg",
        title : "6. First Apartment Unit",
        descr : "by: Sale Agent",
        cost : "$450-$700 / month with taxes.",
        details : "1640 st fc",
        review : "(18) reviews",
        contact : "Contact now",
        bed : "2 Bedrooms",
        beth : "4 Bathrooms"
    }
];

let slide44 = [
    {
        img : "images/listing-01.jpg",
        title : "7. First Apartment Unit",
        descr : "by: Sale Agent",
        cost : "$450-$700 / month with taxes.",
        details : "1640 st fc",
        review : "(18) reviews",
        contact : "Contact now",
        bed : "2 Bedrooms",
        beth : "4 Bathrooms"
    },
    {
        img : "images/listing-02.jpg",
        title : "8. First Apartment Unit",
        descr : "by: Sale Agent",
        cost : "$450-$700 / month with taxes.",
        details : "1640 st fc",
        review : "(18) reviews",
        contact : "Contact now",
        bed : "2 Bedrooms",
        beth : "4 Bathrooms"
    },
    {
        img : "images/listing-03.jpg",
        title : "9. First Apartment Unit",
        descr : "by: Sale Agent",
        cost : "$450-$700 / month with taxes.",
        details : "1640 st fc",
        review : "(18) reviews",
        contact : "Contact now",
        bed : "2 Bedrooms",
        beth : "4 Bathrooms"
    }
];

let sl2 = document.querySelector('.slide2');
let dot1 = document.querySelector('.dot1');
let dot2 = document.querySelector('.dot2');
let dot3 = document.querySelector('.dot3');

function adding(arr) {
arr.forEach((elem) => {
let slideItem = document.createElement('div');
slideItem.classList.add('slide-item');
slideItem.innerHTML = `
    
        <img src="${elem.img}" class="dz-nkar" />
    
    <div class="silde2-center">
        <p class="item-title">${elem.title}</p><br />
        <p class="item-descr">${elem.descr}</p><br />
        <p class="item-cost"><i class="fas fa-money-bill"></i> ${elem.cost}</p><br />
        <p class="item-details">Details : ${elem.details}</p><br />
        <p class="item-bed"><i class="fas fa-bed"></i> ${elem.bed}</p><br />
        <p class="item-beth"><i class="fas fa-bath"></i> ${elem.beth}</p>
    </div>
    <div class="silde2-right">
        <p class="elem-review"><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i> ${elem.review}</p><br />
        <a href="" class="elem-contact"><i class="far fa-eye"></i> ${elem.contact}</a>
    </div>
`;
    sl2.appendChild(slideItem);
    });

};

adding(slide22);

setInterval(function() {
    setTimeout(() => {
        sl2.innerHTML = "";
        adding(slide33);
        dot1.style.color = "grey";
        dot2.style.color = "black";
        dot3.style.color = "grey";
    }, 0);
    
    setTimeout(() => {
        sl2.innerHTML = "";
        adding(slide44);
        dot1.style.color = "gray";
        dot2.style.color = "grey";
        dot3.style.color = "black";
    }, 3000);
    
    setTimeout(() => {
        sl2.innerHTML = "";
        adding(slide22);
        dot1.style.color = "black";
        dot2.style.color = "grey";
        dot3.style.color = "grey";
    }, 6000);
    
}, 9000);

//setInterval(function() {
//    sl2.innerHTML = "";
//    adding(slide33);
//}, 6000);
//    
//setInterval(function() {
//    sl2.innerHTML = "";
//    adding(slide44);
//}, 9000);


dot1.addEventListener("click", () => { 
sl2.innerHTML = "";        
adding(slide22);
sl2.classList.add('anim');

setTimeout(function() {
    sl2.classList.remove('anim');
}, 500);
dot1.style.color = "black";
dot2.style.color = "grey";
dot3.style.color = "grey";
});

dot2.addEventListener("click", () => { 
sl2.innerHTML = "";    
adding(slide33);
sl2.classList.add('anim');

setTimeout(function() {
    sl2.classList.remove('anim');
}, 500);
dot1.style.color = "grey";
dot2.style.color = "black";
dot3.style.color = "grey";
});

dot3.addEventListener("click", () => { 
sl2.innerHTML = "";    
adding(slide44);

sl2.classList.add('anim');

setTimeout(function() {
    sl2.classList.remove('anim');
}, 500);

dot1.style.color = "grey";
dot2.style.color = "grey";
dot3.style.color = "black";
});  
    
};
export function slideshow() {
    
    let slideshow = [
    {
        name : "One Of The Most Trending Stuffs Right Now!",
        descr : "Plot Listing is a responsive Bootstrap 5 website template that included 4 different HTML pages. This template is provided by TemplateMo website. You can apply this layout for your static or dynamic CMS websites.",
        button : "Discover more",
        image : "images/tabs-image-01.jpg"
    },
    {
        name : "Food and Lifestyle category is here",
        descr : "You can feel free to download, edit and apply this template for your website. Please tell your friends about TemplateMo website.",
        button : "Explore mode",
        image : "images/tabs-image-02.jpg"
    },
    {
        name : "Best car rentals for your trips!",
        descr : "Did you know? You can get the best free HTML templates on Too CSS blog. Visit the blog pages and explore fresh and latest website templates.",
        button : "More listing",
        image : "images/tabs-image-03.jpg"
    },
    {
        name : "Shopping List: Images from Unsplash",
        descr : "Image credits go to Unsplash website that provides free stock photos for anyone. Images used in this Plot Listing template are from Unsplash.",
        button : "Discover more",
        image : "images/tabs-image-04.jpg"
    },
    {
        name : "Information and Safety Tips for Traveling",
        descr : "You are allowed to use this template for your commercial websites. You are NOT allowed to redistribute this template ZIP file on any Free CSS collection websites.",
        button : "Read more",
        image : "images/tabs-image-05.jpg"
    }
];

let slide1 = document.querySelector('.slide-1');
let slide2 = document.querySelector('.slide-2');
let slide3 = document.querySelector('.slide-3');
let slide4 = document.querySelector('.slide-4');
let slide5 = document.querySelector('.slide-5');

let left = document.querySelector('.left');
let right = document.querySelector('.right');
    
slide1.style.backgroundColor = "rgb(58, 61, 66)";
left.innerHTML = `
    <h2>${slideshow[0].name}</h2>
    <p>${slideshow[0].descr}</p>
    <center><button>${slideshow[0].button}</button></center>
`;
right.innerHTML = `
    <img src="${slideshow[0].image}" />
`;

changingSlides(slide1, 0);
changingSlides(slide2, 1);
changingSlides(slide3, 2);
changingSlides(slide4, 3);
changingSlides(slide5, 4);


function changingSlides(array, index) {
    array.addEventListener("click", () => {
    left.innerHTML = `
        <h2>${slideshow[index].name}</h2>
        <p>${slideshow[index].descr}</p>
        <center><button>${slideshow[index].button}</button></center>
    `;
    right.innerHTML = `
        <img src="${slideshow[index].image}" />
    `;
    
    slide1.style.backgroundColor = "#8d99af";
    slide2.style.backgroundColor = "#8d99af";
    slide3.style.backgroundColor = "#8d99af";
    slide4.style.backgroundColor = "#8d99af";
    slide5.style.backgroundColor = "#8d99af";
    array.style.backgroundColor = "rgb(58, 61, 66)";
        
});
};
    
};
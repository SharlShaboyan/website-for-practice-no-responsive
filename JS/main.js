"use strict";

import {navigation} from './moduls/navigation.js';
import {slideshow} from './moduls/slideshow.js';
import {slshow2} from './moduls/slshow2.js';
navigation("images/black-logo.png", "images/white-logo.png");
slideshow();
slshow2();


let burger = document.querySelector(".burger");
let burgMenu = document.querySelector(".burg-menu");
let close = document.querySelector(".close");

burger.addEventListener("click", function() {
    burgMenu.style.display = "block";
})

close.addEventListener("click", () => {
    burgMenu.style.display = "none";
})








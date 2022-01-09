"use strict";

import {navigation} from '../JS/moduls/navigation.js';
navigation("../images/black-logo.png", "../images/white-logo.png");

let btn1 = document.querySelector('.dzax');
let btn2 = document.querySelector('.sli2');
let btn3 = document.querySelector('.sli3');
let btn4 = document.querySelector('.sli4');
let btn5 = document.querySelector('.aj');
let main = document.querySelector('.main-cat');

btn1.style.backgroundColor = "rgb(58, 61, 66)";

function colors(divv, btnn) {
    
divv.addEventListener("click", () => {
    btn1.style.backgroundColor = "#8d99af";
    btn2.style.backgroundColor = "#8d99af";
    btn3.style.backgroundColor = "#8d99af";
    btn4.style.backgroundColor = "#8d99af";
    btn5.style.backgroundColor = "#8d99af";
    divv.style.backgroundColor = "rgb(58, 61, 66)";

    main.innerHTML = `

        <div class="top">

            <a><div class="pic">
                <div class="circle-catt"><img src="../images/search-icon-01.png"></div>
                <p>${btnn}</p>
            </div></a>

            <a href="" class="add">+ Add your listing</a>

        </div>
        <div class="center">
            <div class="cen-left">
                <h2>Description for Apartments</h2><br>
                <p>If you feel that Plot Listing HTML template is useful, please <a href="">support us</a> a little via PayPal. You are allowed to use this template for your commercial websites. You are NOT allowed to redistribute this template ZIP file on any Free CSS collection websites. You may contact us for more information. Thank you.</p>
            </div>
            <div class="cen-right">
                <center><h2><i class="fas fa-file-medical-alt"> </i>Total Listings</h2></center><br>
                <center>
                <p class="grey">This Week: 200 Listings & 150<br> Sales<br><br>
                This Month: 1,800 Listings & 1,560<br> Sales<br><br>
                This Year: 16,000 Listings & 14,000<br> Sales</p>
                </center>
            </div>
        
        </div>
        <div class="bottom">
        
            <h2>General Info. about Apartments</h2><br><br>
            <p class="bot1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ak incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravidat doerski. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p><br><br>
            <p  class="bot2">* Listing should have all the proper documents before being checked in.<br><br>
            ** Listing will be checked by our team members.<br><br>
            *** After being sold, it should imediately be removed from our site and properly monitored.</p>

        </div><br><br>

    `;

});
    
};

colors(btn1, "Apartments");
colors(btn2, "Food & Life");
colors(btn3, "Cars");
colors(btn4, "Shopping");
colors(btn5, "Traveling");




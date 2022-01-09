export function navigation(hrr, htt) {
  
let nav = document.querySelector(".nav");
let li = document.querySelectorAll("li");
let logo = document.querySelector(".logo");
let plus = document.querySelector(".plus li");

window.addEventListener('scroll', () => {
    const scrolled = Math.round(window.scrollY);

        if(scrolled >= 100) {
            nav.style.position = 'fixed';
            nav.style.backgroundColor = 'white';
            nav.style.transition = 'all 0.5s linear';
            
            li.forEach((el) => {
                el.style.color = 'grey';
            });
            logo.src = hrr;
            plus.style.backgroundColor = "grey";
            plus.style.color = "white";

        } else {
            nav.style.backgroundColor = '';
            li.forEach((el) => {
                el.style.color = 'white';
            });
            logo.src = htt;
            plus.style.backgroundColor = "white";
            plus.style.color = "grey";
        }
});
  
  
}
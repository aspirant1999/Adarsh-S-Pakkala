const header = document.querySelector("header");
const sectionOne = document.querySelector(".adarsh");

const sectionOneOptions = {
  rootMargin: "-100px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);


const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-head");
const links = document.querySelectorAll(".nav-head li");


hamburger.addEventListener("click", () =>{
    navlinks.classList.toggle("open");
    links.forEach(links => {
    links.classList.toggle("fade");
    });
});

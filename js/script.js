const menuBtn = document.querySelector(".menuBtn")
const menuList = document.querySelector(".menuItems")

let menuOpen = false;
menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.src = "assets/nav/closeIcon.png"
        menuList.style.display = "flex"
        menuOpen = true;
    } else {
        menuBtn.src = "assets/nav/menuIcon.png"
        menuList.style.display = "none"
        menuOpen = false;
    }

})

// Hero

const heroTitle = document.querySelector(".heroTitle")

const str = `Hi!
My name is Rochi,
frontend developer
and this is my work...`
let i = 0;
const typingEffect = () => {
    if (i < str.length) {
        heroTitle.textContent += str.charAt(i)
        i++
        setTimeout(typingEffect, 100)
    }

}

typingEffect();

// About

document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector(".aboutContainer");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("isVisible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.1
  });

  observer.observe(element);
});
// Education

const educationContainer = document.querySelector(".educationContainer")
const educationItem = document.querySelectorAll(".educationItem")
const upBtn = document.querySelector(".linkUp")
const downBtn = document.querySelector(".linkDown");


const showEducationItems = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    })

}


const options = {
    root: educationContainer,
    threshold: 1.0
};

const observer = new IntersectionObserver(showEducationItems, options);

educationItem.forEach(item => observer.observe(item));

const scrollDown = () => {
    educationContainer.scrollBy(0, 250)
}
const scrollUp = () => {
    educationContainer.scrollBy(0, -250)
}
upBtn.addEventListener("click", () => {
    scrollUp()
})

downBtn.addEventListener("click", () => {
    scrollDown()
})

// Experience
const experienceTitle = document.querySelectorAll(".experienceItemContent")
const experienceDescription = document.querySelectorAll(".experienceDescription")



experienceTitle.forEach((item, index) =>

    item.addEventListener("click", (e) => {
        const info = experienceDescription[index]
        const svg = item.querySelector("svg")
        const title = item.querySelector("h4")

        if (info.style.display === "block") {
            info.style.display = "none"
            svg.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />`
        } else {
            info.style.display = "block"
            svg.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>`
        }

    }))


    // Projects

    import {workPortfolio} from "./data.js"

    const projects = document.querySelector(".projectReferences")

    projects.textContent = `
    <a href="${workPortfolio}"><img src="${workPortfolio.img}" alt=""></a>
    `
    
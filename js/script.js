const menuButton = document.querySelector(".menuBtn")
const menuList = document.querySelector(".menuItems")

let menuOpen = false;
const toggleMenu = () => {
    if (!menuOpen) {
        menuBtn.src = "assets/nav/closeIcon.png"
        menuList.style.display = "flex"
        menuOpen = true;
    } else {
        menuBtn.src = "assets/nav/menuIcon.png"
        menuList.style.display = "none"
        menuOpen = false;
    }
}
menuButton.addEventListener("click", () => {
    toggleMenu();
})

// Hero

const heroTitle = document.querySelector(".heroTitle")

const str = `Hi!
My name is Rochi,
Front-End Developer
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

const educationContainer = document.querySelector(".educationContent")
const educationItem = document.querySelectorAll(".educationItem")
const upButton = document.querySelector(".linkUp")
const downButton = document.querySelector(".linkDown");


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
upButton.addEventListener("click", () => {
    scrollUp()
})

downButton.addEventListener("click", () => {
    scrollDown()
})

// Experience
const experienceTitle = document.querySelectorAll(".experienceItemContent")
const experienceDescription = document.querySelectorAll(".experienceDescription")

const toggleExperienceItem = (item, index) => {
    const info = experienceDescription[index]
    const svg = item.querySelector("svg")

    if (info.style.display === "block") {
        info.style.display = "none"
        svg.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />`
    } else {
        info.style.display = "block"
        svg.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>`
    }
}

experienceTitle.forEach((item, index) =>
    item.addEventListener("click", () => toggleExperienceItem(item, index)))


// Projects

import { workPortfolio } from "./data.js"

const projects = document.querySelector(".projectReferences")
const projectInfo = document.querySelector(".projectInfo")
const projectLeftHead = document.querySelector(".projectLeftHead")
const projectRight = document.querySelector(".projectRight")

// Generate reference project divs

workPortfolio.forEach(obj => {
    projects.innerHTML += `
        <div class="projectImgContainer">
        <img class="projectImg" src="${obj.img}" alt="image of project page">
         <div class="overlay">
         <h3>${obj.name}</h3>
        </div>
        </div>
        `
}
)

const projectImage = document.querySelectorAll(".projectImg")
const projectNumber = projectLeftHead.querySelector("h3")
const image = projectRight.querySelector("img")
const projectDetails = document.querySelector(".detailsText")

// Open project info div

const openProject = (index) => {
    const project = workPortfolio[index]
    projectNumber.textContent = `Project #${project.id}`;
    projectDetails.innerHTML = `
                <h2 class="projectTitle">${project.name}</h2>
                                <p class="detailsPara"><strong>Developed with: </strong>${project.type}</p>
                                <p class="detailsPara"><strong>Description: </strong>${project.description}</p>
                                <p class="detailsPara"><strong>Date: </strong>${project.date}</p>
                                <p class="detailsPara"><strong>Status: </strong>${project.status}</p>
                `;

    image.src = `${project.img}`;

    projectInfo.classList.add("active")

    projectInfo.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
}

projectImage.forEach((img, index) =>
    img.addEventListener("click", () => {
        openProject(index)
    }))

// check it out button

const checkButton = document.querySelector(".check")
checkButton.addEventListener("click", () => {
    const project = workPortfolio[index]
    checkButton.href = `${project.link}`
})
// right and left button

const buttonLeft = document.querySelector(".btnToLeft")
const buttonRight = document.querySelector(".btnToRight")

buttonRight.addEventListener("click", () => {

})
// close project info div

const closeButton = document.querySelector(".projectCrossMark")
closeButton.addEventListener("click", () => {
    projectInfo.style.display = "none"
})



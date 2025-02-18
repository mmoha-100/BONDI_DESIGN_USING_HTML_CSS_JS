// Start Navbar
const navLinks = document.querySelectorAll(".navbar .nav-link");

navLinks.forEach((navLink) => {
    chooseActiveLink(navLink);
});

const homeSection = document.querySelector(".landing");
const sectionOne = document.getElementById("services");
const sectionTwo = document.getElementById("portfolio");
const sectionThree = document.getElementById("about");
const sectionFour = document.querySelector(".our-team");

window.addEventListener("scroll", () => {
    let height = window.scrollY;
    if (height >= homeSection.offsetTop && height < sectionOne.offsetHeight) {
        chooseActiveLink2(0);
    } else if (
        height >= sectionOne.offsetTop &&
        height < sectionTwo.offsetTop
    ) {
        chooseActiveLink2(1);
    } else if (
        height >= sectionTwo.offsetTop &&
        height < sectionThree.offsetTop
    ) {
        chooseActiveLink2(2);
    } else if (
        height >= sectionThree.offsetTop &&
        height < sectionFour.offsetTop
    ) {
        chooseActiveLink2(3);
    } else {
        chooseActiveLink2(4);
    }
});

function chooseActiveLink2(order) {
    navLinks.forEach((l) => {
        l.classList.remove("active");
    });
    navLinks[order].classList.add("active");
}

function chooseActiveLink(navLink) {
    navLink.addEventListener("click", () => {
        navLinks.forEach((l) => {
            l.classList.remove("active");
        });
        navLink.classList.add("active");
    });
}
// End Navbar

// Start Our Works
const categories = document.querySelectorAll(".our-works ul li");
const imgsContainer = document.querySelector(".our-works .row");
const imgs = document.querySelectorAll(".our-works .col-sm-6.col-md-4");

categories.forEach((category) => {
    category.addEventListener("click", (c) => {
        if (category.innerHTML == "All") {
            imgs.forEach((i) => {
                imgsContainer.appendChild(i);
            });
            whoActiveCategory(category);
        } else {
            whoActiveCategory(category);
            let chosen = c.target.innerHTML;
            addImgs(chosen);
        }
    });
});

function addImgs(chosenCategory) {
    let neededImgs = [];

    imgs.forEach((i) => {
        if (i.getAttribute("category") == chosenCategory) {
            neededImgs.push(i);
        }
    });

    imgsContainer.innerHTML = "";

    neededImgs.forEach((img) => {
        imgsContainer.append(img);
    });
}

function whoActiveCategory(btn) {
    let all = btn.parentElement.children;
    Array.from(all).forEach((el) => {
        el.classList.remove("active");
    });
    btn.className = "active rounded-pill";
}
// End Our Works

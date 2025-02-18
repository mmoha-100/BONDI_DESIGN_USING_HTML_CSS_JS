// Start Navbar
const navLinks = document.querySelectorAll(".navbar .nav-link");

navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
        navLinks.forEach((l) => {
            l.classList.remove("active");
        });
        navLink.classList.add("active");
    });
});
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
// End Our Works

// Shared Functions
function whoActiveCategory(btn) {
    let all = btn.parentElement.children;
    Array.from(all).forEach((el) => {
        el.classList.remove("active");
    });
    btn.className = "active rounded-pill";
}

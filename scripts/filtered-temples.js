//Hamburger button
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('nav')

hambutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);

window.onresize = () => { if (window.innerWidth > 760) mainnav.classList.remove('responsive') };

//hamburger to x
function myFunction(x) {
    x.classList.toggle("change");
}

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/800x500/salt-lake-temple-37762.jpg"
    },
    {
        templeName: "Provo Utah",
        location: "Provo, Utah, United States",
        dedicated: "1972, February, 9",
        area: 128325,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/d372f50d13a611ef9f0ceeeeac1eec7ada817542/full/320%2C/0/default"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/17e2c70d687fffedfe115197e57fa8f5d1d369bb/full/320%2C/0/default"
    }
];

// Card for temples loop
temples.forEach((temple) => {
    let card = document.createElement("figure");
    let h2 = document.createElement("h2");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let img = document.createElement("img");

    h2.textContent = temple.templeName;
    p1.textContent = "Location: " + temple.location;
    p2.textContent = "Dedicated: " + temple.dedicated;
    p3.textContent = "Area: " + temple.area;
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";
    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);


    document.querySelector("div.templecards").appendChild(card);
});

// onclick  hyperlink array filter of old, new, large, small, and all temples
function filterTemples(filter) {
    let filteredTemples = [];
    const currentPageClass = document.querySelectorAll(".all");
    if (filter === "old") {
        for (let i = 0; i < currentPageClass.length; i++) {
            currentPageClass[i].classList.remove("currentpage");
        }
        document.querySelector(".old").classList.add("currentpage");
        filteredTemples = temples.filter((temple) => {
            return temple.dedicated < "1900";
        });
    } else if (filter === "new") {
        for (let i = 0; i < currentPageClass.length; i++) {
            currentPageClass[i].classList.remove("currentpage");
        }
        document.querySelector(".new").classList.add("currentpage")
        filteredTemples = temples.filter((temple) => {
            return temple.dedicated > "2000";
        });
    } else if (filter === "large") {
        for (let i = 0; i < currentPageClass.length; i++) {
            currentPageClass[i].classList.remove("currentpage");
        }
        document.querySelector(".large").classList.add("currentpage")
        filteredTemples = temples.filter((temple) => {
            return temple.area > 90000;
        });
    } else if (filter === "small") {
        for (let i = 0; i < currentPageClass.length; i++) {
            currentPageClass[i].classList.remove("currentpage");
        }
        document.querySelector(".small").classList.add("currentpage")
        filteredTemples = temples.filter((temple) => {
            return temple.area < 10000;
        });
    } else {
        for (let i = 0; i < currentPageClass.length; i++) {
            currentPageClass[i].classList.remove("currentpage");
        }
        filteredTemples = temples;
        document.querySelector(".home").classList.add("currentpage")
    }

    // Clear the cards
    document.querySelector("div.templecards").innerHTML = "";

    // Add the filtered cards
    filteredTemples.forEach((temple) => {
        let card = document.createElement("figure");
        let h2 = document.createElement("h2");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let img = document.createElement("img");

        h2.textContent = temple.templeName;
        p1.textContent = "Location: " + temple.location;
        p2.textContent = "Dedicated: " + temple.dedicated;
        p3.textContent = "Area: " + temple.area;
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy";
        card.appendChild(img);
        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);

        document.querySelector("div.templecards").appendChild(card);
    });
}




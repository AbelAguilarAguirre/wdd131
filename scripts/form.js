const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

products.forEach(product => {
    let splitName = product.name.toLowerCase().split(' ');
    for (var i = 0; i < splitName.length; i++) {
        splitName[i] = splitName[i].charAt(0).toUpperCase() + splitName[i].substring(1);
    }
    product.name = splitName.join(' ');
    displayProduct(product);
});

function displayProduct(product) {
    const productName = document.createElement('option');
    productName.textContent = product.name;
    productName.value = product.id;
    document.querySelector('#prodName').append(productName);
}

document.addEventListener('DOMContentLoaded', () => {
    const reviewForm = document.getElementById('reviewForm');
    const reviewCountElement = document.getElementById('reviewCount');

    function updateReviewCount() {
        const reviewCount = localStorage.getItem('reviewCount') || 0;
        reviewCountElement.textContent = `Total Reviews: ${reviewCount}`;
    }

    updateReviewCount();

    reviewForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let reviewCount = localStorage.getItem('reviewCount') || 0;
        reviewCount = parseInt(reviewCount) + 1;
        localStorage.setItem('reviewCount', reviewCount);

        updateReviewCount();

        reviewForm.reset();
        alert('Review submitted successfully!');
    });
});
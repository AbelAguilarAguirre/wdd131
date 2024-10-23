document.addEventListener('DOMContentLoaded', () => {
    const reviewForm = document.getElementById('reviewForm');
    const reviewCountElement = document.getElementById('reviewCount');

    function updateReviewCount() {
        const reviewCount = localStorage.getItem('reviewCount') || 0;
        reviewCountElement.textContent = `Total Reviews: ${reviewCount}`;
    }

    updateReviewCount();
});
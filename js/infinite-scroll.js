document.addEventListener('DOMContentLoaded', () => {
    const newsWrapper = document.getElementById('news-wrapper');

    // Mock Data (Headlines Only)
    const mockNewsData = [
        "Breaking: Major Storm Heading Towards the Coast",
        "Tech Giants Announce New AI Partnership",
        "Sports Update: Team A Wins the Championship",
        "Economy: Inflation Rates Drop Unexpectedly",
        "Travel: Top Destinations for 2025",
        "Health: 10 Tips for a Balanced Diet",
        "Science: NASA Discovers New Exoplanet",
        "Entertainment: Actor Wins Prestigious Award",
    ];

    // Function to render news headlines
    const renderNews = () => {
        mockNewsData.forEach((headline) => {
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');
            newsItem.textContent = headline;
            newsWrapper.appendChild(newsItem);
        });

        // Duplicate the content to create seamless scrolling
        mockNewsData.forEach((headline) => {
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');
            newsItem.textContent = headline;
            newsWrapper.appendChild(newsItem);
        });
    };

    // Initial render
    renderNews();
});

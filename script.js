document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;

    if (query) {
        const searchURL = `https://www.givero.com/search?q=${encodeURIComponent(query)}`;
        window.open(searchURL, '_blank');
    } else {
        alert('Please enter a search term.');
    }
});

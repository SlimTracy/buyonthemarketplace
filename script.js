document.getElementById("searchForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const searchTerm = document.getElementById("searchInput").value.trim();
  if (searchTerm) {
    const searchUrl = `https://www.facebook.com/marketplace/search?query=${encodeURIComponent(searchTerm)}`;
    window.location.href = searchUrl;
  }
});
document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var searchTerm = document.getElementById("searchInput").value;
    var encodedSearchTerm = encodeURIComponent(searchTerm);
    
    var searchUrl = "https://www.facebook.com/marketplace/category/search?deliveryMethod=local_pick_up&sortBy=creation_time_descend&DaysSinceListed=1&delivery%20Method=local_pick_up&query=" + encodedSearchTerm + " ";
    
    // Redirect to the generated search URL
    window.location.href = searchUrl;
  });
  
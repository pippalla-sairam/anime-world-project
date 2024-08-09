// Function to show or hide the details section and keep scroll position
function showDetails(id) {
    var details = document.getElementById(id);
    var allDetails = document.getElementsByClassName('details');
    
    // Hide all details sections
    for (var i = 0; i < allDetails.length; i++) {
        if (allDetails[i] !== details) {
            allDetails[i].style.display = "none";
        }
    }
    
    // Toggle the selected details section
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
        
        // Scroll to the details section
        details.scrollIntoView({ behavior: 'smooth' });
    } else {
        details.style.display = "none";
    }
}

// Search functionality
function searchAnime() {
    var input, filter, animeSections, animeTitle, i, txtValue;
    input = document.getElementById('search-box');
    filter = input.value.toUpperCase();
    animeSections = document.getElementsByClassName('anime');

    for (i = 0; i < animeSections.length; i++) {
        animeTitle = animeSections[i].getElementsByTagName("h2")[0];
        txtValue = animeTitle.textContent || animeTitle.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            animeSections[i].style.display = "";
        } else {
            animeSections[i].style.display = "none";
        }
    }
}

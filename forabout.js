function zoomIn(element) {
    element.style.transform = 'scale(1.05)'; 
  }

  function zoomOut(element) {
    element.style.transform = 'scale(1)'; 
  }

  document.addEventListener("DOMContentLoaded", function() {
    var popupButton = document.getElementById("popupButton");
    var popupMenu = document.getElementById("popupMenu");

    popupButton.addEventListener("click", function() {
        if (popupMenu.style.display === "block") {
            popupMenu.style.display = "none";
        } else {
            popupMenu.style.display = "block";
        }
    });

    document.addEventListener("click", function(event) {
        if (!event.target.matches("#popupButton") && !event.target.closest(".popup-menu")) {
            popupMenu.style.display = "none";
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      document.querySelector('.country-info').classList.add('show');
    }, 500);
  });
  
  
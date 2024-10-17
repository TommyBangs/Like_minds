// supervisor.js

function toggleDropdown(event) {
    event.stopPropagation();
    document.getElementById("dropdownMenu").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.profile') && !event.target.matches('.profile *')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Add active class to the current page link
document.querySelectorAll('.sidebar ul li a').forEach(link => {
    if (link.href === window.location.href) {
        link.parentElement.classList.add('active');
    }
});

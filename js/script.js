document.addEventListener('DOMContentLoaded', function () {

    // Form validation and submission
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const dob = document.getElementById('dob').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const pesan = document.getElementById('pesan').value;  // Ensure this is correctly referenced
        const currentTime = new Date().toLocaleString();

        // Display output in empty-box 
        document.getElementById('output').innerHTML = `
            <p style="margin-bottom: 2rem;" >Current time: ${currentTime}</p>
            <p>Nama: ${name}</p>
            <p>Tanggal Lahir: ${dob}</p>
            <p>Jenis Kelamin: ${gender}</p>
            <p>Pesan: ${pesan}</p>
        `;
        // Greet the user with their name
        let userName = name;
        document.getElementById("user-name1").textContent = userName + ("!") || 'Guest';
        document.getElementById("user-name2").textContent = userName + ("!") || 'Guest';
        document.getElementById("user-name3").textContent = userName + ("!") || 'Guest';
    });

});

// Banner auto slide
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}
function showDivs(n) {
    var i;
    var banner = document.getElementsByClassName("banner");
    if (n > banner.length) { slideIndex = 1 }
    else if (n < 1) { slideIndex = banner.length };
    for (i = 0; i < banner.length; i++) {
        banner[i].style.display = "none";
    }
    banner[slideIndex - 1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 2000);

// hamburger menu
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector("nav .list");
  
    hamburgerMenu.addEventListener("click", () => {
      navMenu.classList.toggle("show");
      hamburgerMenu.classList.toggle("active");
    });
  
    document.addEventListener("click", (event) => {
      if (
        !hamburgerMenu.contains(event.target) &&
        !navMenu.contains(event.target)
      ) {
        navMenu.classList.remove("show");
        hamburgerMenu.classList.remove("active");
      }
    });
  });
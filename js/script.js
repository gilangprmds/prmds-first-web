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
        const userName = name;
        document.getElementById('userName').textContent = userName || 'Guest';
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
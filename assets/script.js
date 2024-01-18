document.addEventListener('DOMContentLoaded', function () {
    var members = document.querySelectorAll('.member');

    members.forEach(function (member) {
        member.addEventListener('click', function () {
            var profilePath = member.getAttribute('data-profile');
            window.location.href = profilePath;
        });
    });

    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");

    const msgContainer = document.getElementById("msgContainer");
    const msgContainer2 = document.getElementById("msgContainer2");

    btn1.style.backgroundColor = "blue";
    btn1.style.color = "white";
    let msg = true;

    btn2.addEventListener("click", () => {
        if (msg === true) {
            btn1.style.backgroundColor = "white";
            btn1.style.color = "black";
            btn2.style.backgroundColor = "blue";
            btn2.style.color = "white";
            msgContainer.style.display = "none";
            msgContainer2.style.display = "block";
            msg = false;
        }
    });

    btn1.addEventListener("click", () => {
        if (msg === false) {
            btn2.style.backgroundColor = "white";
            btn2.style.color = "black";
            btn1.style.backgroundColor = "blue";
            btn1.style.color = "white";
            msgContainer2.style.display = "none";
            msgContainer.style.display = "block";
            msg = true;
        }
    });

    // Add smooth scrolling to all links with the # symbol
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

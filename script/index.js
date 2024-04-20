let profileMenu = document.getElementById("profileMenu");
function toggleProfileMenu() {
  profileMenu.classList.toggle("open-menu");
}
let sideActivity = document.getElementById("sidebarActivity");
let moreLink = document.getElementById("showMoreLink");
function toggleActivity() {
  sideActivity.classList.toggle("open-activity");
  if (sideActivity.classList.contains("open-activity")) {
    moreLink.innerHTML = "Show less <b>-<b>";
  } else {
    moreLink.innerHTML = "Show more <b>+<b>";
  }
}

const passwordInput = document.getElementById("password");
const toggleButton = document.getElementById("toggleImg");
function togglePassword() {
  let showPassword = passwordInput.type == "text" ? true : false;

  showPassword = !showPassword;
  passwordInput.type = showPassword ? "text" : "password";
  toggleImg.src = showPassword
    ? "assets/images/hide-eye.png"
    : "assets/images/show-eye.png";
}

$(document).ready(function () {
  const getUsername = localStorage.getItem("username") ?? false;
  if (getUsername) {
    $(".user-name").each(function () {
      $(this).html(getUsername); // Replace 'New HTML content' with the desired content
    });
  }

  // Open modal when trigger button is clicked
  $("#openModal").click(function () {
    $("#myModal").show();
  });

  // Close modal when close button is clicked
  $(".close").click(function () {
    $("#myModal").hide();
  });

  // Close modal when clicking outside the modal content
  $(window).click(function (event) {
    if (event.target.id === "myModal") {
      $("#myModal").hide();
    }
  });

  var slideIndex = 0;
  showSlides();

  function showSlides() {
    var slides = $(".slides img");
    for (var i = 0; i < slides.length; i++) {
      $(slides[i]).hide();
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    $(slides[slideIndex - 1]).fadeIn(250);
    setTimeout(showSlides, 5000);
  }

  $(".prev").click(function () {
    slideIndex--;
    if (slideIndex < 1) {
      slideIndex = $(".slides img").length;
    }
    showSlides();
  });

  $(".next").click(function () {
    slideIndex++;
    if (slideIndex > $(".slides img").length) {
      slideIndex = 1;
    }
    showSlides();
  });
});

const ham = document.querySelector(".ham");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const header = document.querySelector("header");
const h2 = document.querySelector(".h2_name");
ham.addEventListener("click", () => {
  line1.classList.toggle("rot1");
  line2.classList.toggle("rot2");
  line3.classList.toggle("rot3");
  line1.style.transition = `all 0.35s ease-out`;
  line2.style.transition = `all 0.35s ease-out`;
  line3.style.transition = `all 0.35s ease-out`;
  header.classList.toggle("header__open");
  console.log("hello");
  console.log(line1);
  h2.classList.add("h2_on");
});

const dots = document.querySelectorAll(".dot");
const names = document.querySelector(".name");
const h1Name = document.querySelector(".h1_name");
const pName = document.querySelector(".p_name");

var myIndex = 0;
carousel();

function carousel() {
  var i;
  const imgs = document.querySelectorAll(".imgs");
  for (i = 0; i < imgs.length; i++) {
    imgs[i].style.opacity = "0";
    // names.innerHTML = "HELLO";
    pName.innerHTML = "Design for you";
    console.log("working with hello");
  }
  myIndex++;
  if (myIndex > imgs.length) {
    myIndex = 1;
    // names.textContent = "I AM A FRONTEND WEB DEVELOPER";
    pName.innerHTML = "A design create for you";
    console.log("working with frontend");
  }
  imgs[myIndex - 1].style.opacity = "1";
  setTimeout(carousel, 5000); // Change image every 2 seconds
}

//AOS ANIMATION LIBRARY
AOS.init({
  duration: 1200,
  once:true,
});

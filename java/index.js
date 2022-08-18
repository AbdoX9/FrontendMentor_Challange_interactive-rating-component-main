let icon = document.getElementsByTagName("img")[0];
let header = document.getElementsByTagName("h1")[0];
let writing = document.getElementsByTagName("p")[0];
let rate = document.getElementsByTagName("ul")[0];
let button = document.getElementsByTagName("button")[0];
let score = document.querySelectorAll("ul li span");

rate.onclick = function (click) {
  score.forEach(function (e) {
    if (
      e.classList.contains("rate") ||
      e.classList.contains("full") ||
      e.classList.contains("ratefull")
    ) {
      e.classList.remove("rate");
      e.classList.remove("full");
      e.classList.remove("ratefull");
    }
  });

  if (click.target.classList.contains("score")) {
    if (click.target == score[4]) {
      click.target.classList.toggle("ratefull");
      click.target.classList.toggle("full");
    } else {
      click.target.classList.toggle("rate");
      click.target.classList.toggle("full");
    }
  }
};

let container = document.getElementsByClassName("container")[0];

button.onclick = function () {
  eo();
  for (let i = 0; i < score.length; i++) {
    if (score[i].classList.contains("full")) {
      icon.style.display = "none";
      header.style.display = "none";
      writing.style.display = "none";
      rate.style.display = "none";
      button.style.display = "none";
      document.getElementsByClassName("erro")[0].style.display = "none";
      submit(document.getElementsByClassName("full")[0].textContent);
    }
  }
};

function submit(value) {
  console.log(container);
  let img = document.createElement("img");
  let headerS = document.createElement("span");
  let headerT = document.createElement("h1");
  let thanksM = document.createElement("p");
  container.appendChild(img);
  container.appendChild(headerS);
  container.appendChild(headerT);
  container.appendChild(thanksM);
  img.setAttribute("src", "photos/illustration-thank-you.svg");
  headerS.appendChild(
    document.createTextNode(`You selected ${value} out of 5`)
  );
  headerT.appendChild(document.createTextNode("Thank you!"));
  thanksM.appendChild(
    document.createTextNode(
      "We appreciate you taking the time to give a rating. if you ever need more support, dont hesitate to get in touch!"
    )
  );
  img.style.cssText =
    " display: block; margin: auto; width: 130px; height: 130px; ";
  headerS.style.cssText =
    " display: block; margin: 20px auto; text-align: center; color: var(--PrimaryOrange); background-color: hsl(213deg 18% 20%); width: fit-content; padding: 10px; border-radius: 50px; ";
  headerT.style.cssText = " text-align: center; ";
  thanksM.style.cssText = " text-align: center; ";
}
let errp = document.querySelector(".erro");
errp.style.display = "none";

function eo() {
  errp.style.cssText =
    " margin: 10px auto 0; text-align: center; color: #e15c5c; display: block; ";
}

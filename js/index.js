let lefttare = document.getElementById("lefttare");
let xmark = document.getElementById("xmark");

let rightarr = document.getElementById("rightarr");

let imgcontainer = document.querySelectorAll("img");

let coun = 0;

console.log(imgcontainer);

function pref() {
  imgcontainer.forEach((e) => {
    e.style.display = "none";
  });
  if (coun != 0) {
    imgcontainer[coun - 1].style.display = "block";
    coun--;
  } else {
    coun = imgcontainer.length - 1;
    imgcontainer[coun].style.display = "block";
  }
}

function nexx() {
  imgcontainer.forEach((e) => {
    e.style.display = "none";
  });
  if (coun != imgcontainer.length - 1) {
    imgcontainer[coun + 1].style.display = "block";
    coun++;
  } else {
    coun = 0;
    imgcontainer[coun].style.display = "block";
  }
}

lefttare.addEventListener("click", pref);

rightarr.addEventListener("click", nexx);

document.addEventListener("keyup", (e) => {
  if (e.keyCode == 37) {
    pref();
  }
});
document.addEventListener("keyup", (e) => {
  if (e.keyCode == 39) {
    nexx();
  }
});

setInterval((e) => {
  imgcontainer.forEach((e) => {
    e.style.display = "none";
  });
  if (coun != imgcontainer.length - 1) {
    imgcontainer[coun + 1].style.display = "block";
    coun++;
  } else {
    coun = 0;
    imgcontainer[coun].style.display = "block";
  }
}, 3000);
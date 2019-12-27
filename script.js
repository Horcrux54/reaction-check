function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let myButton = document.getElementById("myButton"),
  figure = document.getElementById("figure"),
  time = document.getElementById("answer"),
  mean = document.getElementById("mean"),
  index = 0,
  sum = 0;

function randomColor() {
  let leters = "0123456789ABCDEF".split(""),
    color = "#";
  for (let i = 0; i < 6; i++) {
    color += leters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function play() {
  let time1 = Date.now();
  figure.onclick = function() {
    let time2 = Date.now(),
      total = time2 - time1,
      pr = "";

    index++;
    sum += total;
    total /= 1000;
    pr = "sec";
    if (total > 60) {
      total /= 60;
      pr = "min";
      if (total > 60) {
        total /= 60;
        pr = "h";
      }
    }

    time.innerHTML = "Ваше время: " + total + " " + pr;
    time1 = Date.now();

    figure.style.height = getRandomInRange(20, 250) + "px";
    figure.style.width = figure.style.height;
    figure.style.marginTop =
      getRandomInRange(10, document.documentElement.clientHeight - 100) + "px";
    figure.style.marginLeft =
      getRandomInRange(-50, document.documentElement.clientWidth - 50) + "px";
    figure.style.backgroundColor = randomColor();
    if (Math.random() > 0.5) {
      figure.style.borderRadius = "50%";
    } else figure.style.borderRadius = 0;
    mean.innerHTML =
      sum / index / 1000 > 60
        ? "Среднее значение: " + sum / index / 1000 / 60 + "min"
        : "Среднее значение: " + sum / index / 1000 + "sec";
  };
}

figure.style.height = getRandomInRange(20, 250) + "px";
figure.style.width = figure.style.height;
figure.style.marginTop =
  getRandomInRange(10, document.documentElement.clientHeight - 100) + "px";
figure.style.marginLeft =
  getRandomInRange(-50, document.documentElement.clientWidth - 50) + "px";
figure.style.backgroundColor = randomColor();

myButton.onclick = function() {
  myButton.style.display = "none";
  time.innerHTML = "Ваше время: ";
  play();
  figure.style.display = "block";
  mean.style.display = "block";
};

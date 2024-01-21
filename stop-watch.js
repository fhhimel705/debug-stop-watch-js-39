let inter;
let num = 0;
const time = document.getElementById("time");

const setTime = () => {
  inter = setInterval(() => {
    time.innerText = num++;
  }, 1000);
  return inter;
};
document.getElementById("start-btn").addEventListener("click", function () {
    setTime();
    
});

document.getElementById("stop-btn").addEventListener("click", function () {
    clearInterval(inter);
});

document.getElementById("reset-btn").addEventListener("click", function () {
    clearInterval(inter);
    num = 0;
    time.innerText = 0;
});


let inter;
const setTime = () => {
  const time = document.getElementById("time");
  let num = 0;
  inter = setInterval(() => {
    time.innerText = `${num++}`;
  }, 1000);
  return inter;
};
document.getElementById("start-btn").addEventListener("click", function () {
    setTime();
});

document.getElementById("stop-btn").addEventListener("click", function () {
    clearInterval(inter);
});


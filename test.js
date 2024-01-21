let intervalId;
let seconds = 0;

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

const updateStopwatch = () => {
  const stopwatchElement = document.getElementById('stopwatch');
  stopwatchElement.innerText = formatTime(seconds);
  seconds++;
};

document.getElementById('startBtn').addEventListener('click', () => {
  intervalId = setInterval(updateStopwatch, 1000);
});

document.getElementById('stopBtn').addEventListener('click', () => {
  clearInterval(intervalId);
});

document.getElementById('resetBtn').addEventListener('click', () => {
  clearInterval(intervalId);
  seconds = 0;
  updateStopwatch();
});

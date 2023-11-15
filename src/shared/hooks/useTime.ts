export function setTime() {
  localStorage.setItem("timerStart", JSON.stringify(Date.now()));
}

export function getTime() {
  const time = localStorage.getItem("timerStart");
  if (time) return JSON.parse(time);
  else return null;
}

export function stopTime() {
  localStorage.removeItem("timerStart");
}

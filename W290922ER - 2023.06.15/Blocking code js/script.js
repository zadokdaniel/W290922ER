// navigator.geolocation.watchPosition(data=> console.log(data))
// navigator.geolocation.watchPosition(data=> {const link = document.querySelector('a'); link.href = `https://www.openstreetmap.org/#map=18/${data.coords.latitude}/${data.coords.longitude}`})

function sleep(milliseconds) {
  //   debugger;
  let start = new Date().getTime();
  let isFinished = false;
  while (!isFinished) {
    if (new Date().getTime() - start > milliseconds) isFinished = true;
  }
}

function takesTime() {
  for (let i = 0; i < 99999; i++) {
    console.log(i);
  }
}

function clickMe() {
  console.count("clickMeBtn");
}

function timeOut() {
  console.time("eventLoop");
  setTimeout(() => console.timeEnd("eventLoop"), 6000);
}

// debugger;
const second = 1000;
function onOtherClick() {
  console.time("sleep");
  sleep(10 * second);
  console.timeEnd("sleep");
}

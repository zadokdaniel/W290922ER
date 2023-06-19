// navigator.geolocation.watchPosition(data=> console.log(data))
// navigator.geolocation.watchPosition(data=> {const link = document.querySelector('a'); link.href = `https://www.openstreetmap.org/#map=18/${data.coords.latitude}/${data.coords.longitude}`})

function generateButton(fn) {
  const button = document.createElement("button");
  button.innerText = fn.name;
  button.addEventListener("click", fn);
  document.body.appendChild(button);
  document.body.appendChild(document.createElement("br"));
}

generateButton(syncFunctionWhichTakesSomeAmountOfTime);
generateButton(countClicks);
generateButton(asyncTimeOut6Seconds);
generateButton(syncSleep10Seconds);

function sleep(milliseconds) {
  let start = new Date().getTime();
  let isFinished = false;
  while (!isFinished) {
    if (new Date().getTime() - start > milliseconds) {
      isFinished = true;
    }
  }
}

function syncFunctionWhichTakesSomeAmountOfTime() {
  console.time("syncFunctionWhichTakesSomeAmountOfTime");
  for (let i = 0; i < 999_999_999; i++) {
    console.log(i);
  }
  console.timeEnd("syncFunctionWhichTakesSomeAmountOfTime");
}

function countClicks() {
  console.count("countClicks");
}

function asyncTimeOut6Seconds() {
  console.time("asyncTimeOut6Seconds");
  setTimeout(() => console.timeEnd("asyncTimeOut6Seconds"), 6000);
}

const second = 1000;
function syncSleep10Seconds() {
  console.time("syncSleep10Seconds");
  sleep(10 * second);
  console.timeEnd("syncSleep10Seconds");
}



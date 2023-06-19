function previewFile(event) {
  const file = event.target.files[0];
  const fr = new FileReader();

  fr.addEventListener("loadend", (e) => console.log(e.target.result));
  fr.readAsText(file);
}

navigator.geolocation.getCurrentPosition(console.log);
navigator.geolocation.watchPosition(console.log);

setTimeout(() => {
  setTimeout(() => {}, 3000);
}, 10000);

// one -- 10s --> two -- 3s --> three -- 5s --> four -- 3s --> six
// 				   \
// 				    -- 6s --> five -- 2s --> seven

function log(text) {
  const now = new Date();
  console.log(`${now.getMinutes()}:${now.getSeconds()} - ${text}`);
}

function ex1() {
  log("one");

  setTimeout(() => {
    log("two");

    setTimeout(() => {
      log("three");

      setTimeout(() => {
        log("four");

        setTimeout(() => {
          log("six");
        }, 3000);
      }, 5000);
    }, 3000);

    setTimeout(() => {
      log("five");

      setTimeout(() => {
        log("seven");
      }, 2000);
    }, 6000);
  }, 10000);
}
ex1();

function jsonPlaceHolderPost() {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", function () {
    console.group("state " + this.readyState);

    console.log("state", this.readyState);
    console.log("status", this.status);
    console.log("statusText", this.statusText);
    console.log("responseURL", this.responseURL);

    console.log("getResponseHeader", this.getResponseHeader("Content-Type"));
    console.log("getAllResponseHeaders", this.getAllResponseHeaders());
    console.log("responseType", this.responseType);

    console.log("response", this.response);
    console.log("responseText", this.responseText);
    console.log("responseXML", this.responseXML);

    console.groupEnd("state " + this.readyState);
  });

  // method, url
  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");

  // headers
  xhr.setRequestHeader("Content-Type", "application/json");
  // xhr.setRequestHeader("Content-Type", "application/json")
  // xhr.setRequestHeader("Content-Type", "application/json")

  // body - pass only if needed
  xhr.send(JSON.stringify({ userId: 4, title: "hello", body: "bye" }));
}

function xmlGet() {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", function () {
    console.group("state " + this.readyState);

    console.log("state", this.readyState);
    console.log("status", this.status);
    console.log("statusText", this.statusText);
    console.log("responseURL", this.responseURL);

    console.log("getResponseHeader", this.getResponseHeader("Content-Type"));
    console.log("getAllResponseHeaders", this.getAllResponseHeaders());
    console.log("responseType", this.responseType);

    console.log("response", this.response);
    console.log("responseText", this.responseText);
    console.dir("responseXML");
    console.dir(this.responseXML);

    console.groupEnd("state " + this.readyState);
  });

  // method, url
  xhr.open("GET", "http://localhost:5500/xhr/data.xml");

  // headers
  // xhr.setRequestHeader("Content-Type", "application/json");
  // xhr.setRequestHeader("Content-Type", "application/json")
  // xhr.setRequestHeader("Content-Type", "application/json")

  // body - pass only if needed
  xhr.send();
}

function countriesGet(cb) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", function () {
    console.groupCollapsed("state " + this.readyState);

    // 2 - headers received 3 - loading body 4 - done
    console.log("state", this.readyState);
    
    // only after state 2. first http line status code and text
    console.log("status", this.status);
    console.log("statusText", this.statusText);
    console.log("responseURL", this.responseURL);

    // only after state 2. response headers
    console.log("getResponseHeader", this.getResponseHeader("Content-Type"));
    console.log("getAllResponseHeaders", this.getAllResponseHeaders());
    console.log("responseType", this.responseType);

    // partial data of the body on state 3 and full data of body on state 4
    console.log("response", this.response);
    console.log("responseText", this.responseText);
    console.dir("responseXML");
    console.dir(this.responseXML);

    console.groupEnd("state " + this.readyState);

    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      cb(JSON.parse(this.response));
    }
  });

  // method, url
  xhr.open("GET", "https://restcountries.com/v3.1/all");

  // headers
  // xhr.setRequestHeader("Content-Type", "application/json");
  // xhr.setRequestHeader("Content-Type", "application/json")
  // xhr.setRequestHeader("Content-Type", "application/json")

  // body - pass only if needed
  xhr.send();
}

countriesGet((data) => {
  console.log(data);
});

// "use strict";

function fn(/* this, */) {
  console.log(this);
}

fn(/* window, */);

let obj = {
  name: "my-obj",
  myFn: fn,
};

obj.myFn(/* obj, */);
obj["myFn"](/* obj, */);

new fn(/* { __proto__: fn.prototype } */);

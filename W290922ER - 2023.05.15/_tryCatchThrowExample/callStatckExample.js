import { log, bgSuccess, bgDanger } from "./lib/customLogger.js";

log("call stack example");
a();

function a() {
  log(bgSuccess("a start"));
  b();
  log(bgDanger("a end"));
}

function b() {
  log(bgSuccess("b start"));

  c();
  e();

  log(bgDanger("b end"));
}

function c() {
  log(bgSuccess("c start"));
  d();
  log(bgDanger("c end"));
}

function d() {
  log(bgSuccess("d start"));
  log(bgDanger("d end"));
}

function e() {
  log(bgSuccess("e start"));
  log(bgDanger("e end"));
}

// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var ImmutableArray = require("./ImmutableArray.bs.js");

function testImmutableArrayGet(arr) {
  return ImmutableArray.$$Array[/* get */0](arr, 3);
}

function testBeltArrayGet(arr) {
  return Belt_Array.get(arr, 3);
}

function testBeltArraySet(arr) {
  return Belt_Array.set(arr, 3, 4);
}

exports.testImmutableArrayGet = testImmutableArrayGet;
exports.testBeltArrayGet = testBeltArrayGet;
exports.testBeltArraySet = testBeltArraySet;
/* No side effect */
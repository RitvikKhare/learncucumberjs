"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = require("node-fetch");
var body = { a: 1 };
node_fetch_1.default('https://httpbin.org/post', {
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
})
    .then(function (res) { return res.json(); })
    .then(function (json) { return console.log(json); });
node_fetch_1.default('https://api.github.com/users/RitvikKhare', {
    method: 'get',
    headers: { 'Content-Type': 'application/json' }
})
    .then(function (res) { return res.json(); })
    .then(function (json) { return console.log(json); });

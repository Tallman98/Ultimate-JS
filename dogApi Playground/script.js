console.log("Hello, World");
// https://dog.ceo/api/breeds/image/random

// .then - Promises
// asynchronous programming

fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((json) => console.log(json));

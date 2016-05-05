"use strict"
  var categories = [];
  var types = [];
  var products = [];


let firstXHR = function loadCategories() {
  return new Promise((resolve, reject) =>{
    // Create an XHR to load categories
    let loader = new XMLHttpRequest();

    // Listen for when the load event is broadcast
    // and execute an anonymous callback
    loader.addEventListener("load", function () {
      let categoryList = JSON.parse(this.responseText).categories;
      resolve(categoryList);
    });

    // If an error occurs, reject the promise
    loader.addEventListener("error", function () {
      reject();
    });

    loader.open("GET", "categories.json");
    loader.send();
  })
};
let secondXHR = function loadTypes() {
  return new Promise((resolve, reject) =>{
    // Create an XHR to load types
    let loader = new XMLHttpRequest();

    // Listen for when the load event is broadcast
    // and execute an anonymous callback
    loader.addEventListener("load", function () {
      let typesList = JSON.parse(this.responseText).types;
      resolve(typesList);
    });

    // If an error occurs, reject the promise
    loader.addEventListener("error", function () {
      reject();
    });

    loader.open("GET", "types.json");
    loader.send();
  })
};
let thirdXHR = function loadProducts() {
  return new Promise((resolve, reject) =>{
    // Create an XHR to load products
    let loader = new XMLHttpRequest();

    // Listen for when the load event is broadcast
    // and execute an anonymous callback
    loader.addEventListener("load", function () {
      let productsList = JSON.parse(this.responseText).products;
      resolve(productsList);
    });

    // If an error occurs, reject the promise
    loader.addEventListener("error", function () {
      reject();
    });

    loader.open("GET", "products.json");
    loader.send();
  })
};

// document.getElementById("category1").addEventListener("click", function(){
// console.log("Hello");
firstXHR().then(function(data1) {
  categories = data1;
    return secondXHR(categories);
  })
  .then(function(data2) {
    types = data2;
    return thirdXHR(data2);
  })
  .then(function(data3) { 
   products = data3;

   populateDom();
});

var populateDom = function () {
  products.forEach(function(product){
    $("#explosive-products").append(`${product.name}  ${product.description} ${ } ${ }`);
    
  })
  
};



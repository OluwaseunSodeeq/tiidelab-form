"use strict";
const form = document.querySelector("form");
const submitBtn = document.querySelector(".hero-two button");
let usersArray = getLS();

//============================
// Date placeholder tricks
//==============================
const inputDate = document.querySelector(".date-control");
inputDate.addEventListener("focus", (e) => (e.currentTarget.type = "date"));

// const userData =
const mainFunction = function (e) {
  e.preventDefault();
  const allInputs = document.querySelectorAll("input");
  const allIselectTags = document.querySelectorAll("select");

  const userDetails = {};

  //Funtion to add data to the created Object
  const objectParameters = function (curElement) {
    const textAreaName = curElement.name.toLowerCase();
    userDetails[textAreaName] = curElement.value;
  };

  [...allInputs].forEach((input) => {
    objectParameters(input);
  });

  //all selects
  for (const option of allIselectTags) {
    // let value = option.options[option.selectedIndex].value;
    const text = option.options[option.selectedIndex].text;
    const inputType = option.name.toLowerCase();
    userDetails[inputType] = text;
  }

  //  comment
  const comments = document.querySelector("textarea");
  objectParameters(comments);

  usersArray.push(userDetails);
  // console.log(userDetails);
  // console.log(usersArray);

  setLs();

  window.location.href = "preview-page.html";
};
const setLs = function () {
  localStorage.setItem("data", JSON.stringify(usersArray));
};
function getLS() {
  const mydata = localStorage.getItem("data");
  return JSON.parse(mydata) || [];
}

form.addEventListener("submit", mainFunction);

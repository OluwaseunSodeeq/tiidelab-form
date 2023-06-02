"use strict";
const form = document.querySelector("form");
const submitBtn = document.querySelector(".hero-two button");
const LS_PPREFIX = "Data's";
const USERS_KEY = `${LS_PPREFIX}--key`;
let usersArray = [];
let userContent_data = [];
//============================
// Date placeholder tricks
//==============================
const inputDate = document.querySelector(".date-control");
inputDate.addEventListener("focus", (e) => (e.currentTarget.type = "date"));

// const userData =
form.addEventListener("submit", function (e) {
  //   e.preventDefault();
  console.log("hello");
  const allInputs = document.querySelectorAll("input");
  const allIselectTags = document.querySelectorAll("select");
  const firstName = document.querySelector("#firstName");
  const lastName = document.querySelector("#lastName");

  const userDetails = {};
  const arrayOfAllTheInput = [];

  const objectParameters = function (curElement) {
    const textAreaName = curElement.name.toLowerCase();
    userDetails[textAreaName] = curElement.value;
  };

  //   allInputs
  //   [...allInputs].map((input) => {
  //     objectParameters(input);
  //   });
  [...allInputs].forEach((input) => {
    objectParameters(input);
  });

  const langVa = document.querySelector("#language").value;
  console.log(langVa);

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

  console.log(userDetails);
  arrayOfAllTheInput.push(userDetails);
  console.log(arrayOfAllTheInput);

  const title = `${firstName.value} ${lastName.value}'s data`;
  //   `${firstName.value} ${lastName.value}'s data`,
  const userObj = {
    [`${title}`]: userDetails,
  };
  usersArray.push(userObj);
  setLs();
  //   window.location.href = "preview-page.html";
  //   console.log(title, userDetails);

  //   console.log(usersArray);
  // =============
  // PREVIEW SECTION
  // =============
  //   const previewContainer = document.querySelector(".container");
  //   console.log(previewContainer);
  //   const key = [];
  //   const keysValues = [];

  //   for (const item of Object.keys(allInputs)) {
  //     key.push(item);
  //   }
  //   for (const item of Object.values(allInputs)) {
  //     keysValues.push(item);
  //   }
  //   console.log(key, keysValues);

  //html template
  const html = `
  <div class="head">${title}</div> 
  `;
  //   previewContainer.insertAdjacentHTML("beforeend", html);
  //   return usersArray;
});
const setLs = function () {
  localStorage.setItem(USERS_KEY, JSON.stringify(usersArray));
};

// =============
// PREVIEW SECTION
// =============

// if (usersArray.length > 0) {
// usersArray = userData();
// console.log(usersArray);
// }

// form.addEventListener("submit", userData);

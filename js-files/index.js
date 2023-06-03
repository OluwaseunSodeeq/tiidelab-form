const container = document.querySelector(".container");
let formData;
formData = JSON.parse(localStorage.getItem("data"));
console.log(formData);

//Display Datas
const display = function (thisformData) {
  const obj = Object.entries(thisformData);
  let htmlBody = `
                <div class="eachUser">
                    <h3 class="head">${thisformData.firstname} ${thisformData.lastname}"s Data</h3>
                    <div class="data-content">
                    <ul></ul>
                </div>
            `;
  container.insertAdjacentHTML("afterbegin", htmlBody);
  const this_data_content = document.querySelector(".data-content");
  const ul = this_data_content.querySelector("ul");
  for (const [key, value] of obj) {
    const html = `
          <li><span class="bold">${key}</span>  : ${value}</li>
          `;
    ul.insertAdjacentHTML("beforeend", html);
  }
};
for (const each of formData) {
  display(each);
}

// display();

// const display = function () {
//   const obj = Object.entries(formData[0]);
//   let htmlBody = `
//           <div class="eachUser">
//               <h3 class="head">${formData[0].firstname} ${formData[0].lastname}"s Data</h3>
//               <div class="data-content">
//                <ul></ul>
//       </div>
//       `;
//   container.insertAdjacentHTML("beforeend", htmlBody);

//   const ul = document.querySelector(".data-content").querySelector("ul");
//   for (const [key, value] of obj) {
//     const html = `
//     <li><span class="bold">${key}</span>  : ${value}</li>
//     `;
//     ul.insertAdjacentHTML("beforeend", html);
//   }
// };
// display();

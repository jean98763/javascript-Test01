// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const color = "";


btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const style2 = e.currentTarget.classList;
    if (style2.contains("decrease")) {
      count--;
    } else if (style2.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style2.color = "green";
    }
    if (count < 0) {
      value.style2.color = "red";
    }
    if (count === 0) {
      value.style2.color = "#222";
    }
    value.textContent = count;
  });
});

document.addEventListener('DOMContentLoaded', ()=> {
  let count = 0;
  const value = document.querySelector("#value");
  const btns = document.querySelectorAll(".btn");
  const color = "";
  
  btns.forEach(function (btn) {
    const style2 = e.currentTarget.classList;
    btn.addEventListener("click", function (e) {
      if (style2.contains("decrease")) {
        count--;
      } else if (style2.contains("increase")) {
        count++;
      } else {
        count = 0;
      }
  
      if (count > 0) {
        value.style2.color = "green";
      }
      if (count < 0) {
        value.style2.color = "red";
      }
      if (count === 0) {
        value.style2.color = "#222";
      }
      value.textContent = count;
    });
  });

});

module.exports = {count, value, btns, color}
let elEshmatWindow = document.querySelector(".eshmat-window");
let elEshmatForm = document.querySelector(".eshmat-form");
let elToshmatForm = document.querySelector(".toshmat-form");
let elToshmatWindow = document.querySelector(".toshmat-window");

let list = [];

let showEshmatItem = (item) => {
  let elEshmatText = document.createElement("p");
  let elTextTime = document.createElement("span");
  elTextTime.textContent = `${item.time}`;
  elTextTime.classList = "ml-5";
  elEshmatText.classList = `m-3 ${item.class}`;
  elEshmatText.textContent = item.text;
  elEshmatText.append(elTextTime);
  elEshmatWindow.append(elEshmatText);
};
let showToshmatItem = (item) => {
  let elToshmatText = document.createElement("p");
  let elTextTime = document.createElement("span");
  elTextTime.textContent = `${item.time}`;
  elTextTime.classList = "ml-5";
  elToshmatText.classList = `m-3 ${item.class}`;
  elToshmatText.textContent = item.text;
  elToshmatText.append(elTextTime);
  elToshmatWindow.append(elToshmatText);
};
let showEshmatTextFunction = () => {
  elEshmatWindow.innerHTML = "";
  elToshmatWindow.innerHTML = "";
  let eshmatTextList = localStorage.getItem("list");
  eshmatTextList = JSON.parse(eshmatTextList);
  if (eshmatTextList.length > 0) {
    eshmatTextList.forEach((item) => {
      showEshmatItem(item);
      showToshmatItem(item);
    });
  }
};
elEshmatForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let time = new Date();
  let hour = time.getHours().toString(10).padStart(2, 0);
  let min = time.getMinutes().toString(10).padStart(2, 0);
  let day = hour > 12 ? "PM" : "AM";
  if (e.target[0].value) {
    list.push({
      text: e.target[0].value,
      time: `${hour}:${min} ${day}`,
      class: "eshmat",
    });
    localStorage.setItem("list", JSON.stringify(list));
    showEshmatTextFunction();
    e.target[0].value = "";
    e.target[0].focus();
  }
});

elToshmatForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let time = new Date();
  let hour = time.getHours().toString(10).padStart(2, 0);
  let min = time.getMinutes().toString(10).padStart(2, 0);
  let day = hour > 12 ? "PM" : "AM";
  if (e.target[0].value) {
    list.push({
      text: e.target[0].value,
      time: `${hour}:${min} ${day}`,
      class: "toshmat",
    });
    localStorage.setItem("list", JSON.stringify(list));
    showEshmatTextFunction();
    e.target[0].value = "";
    e.target[0].focus();
  }
});
showEshmatTextFunction();

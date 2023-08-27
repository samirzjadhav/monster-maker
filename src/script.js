const colorBtn = document.getElementById("color-btn");
const faceBtn = document.getElementById("face-btn");
const hornsBtn = document.getElementById("horns-btn");
const tailBtn = document.getElementById("tail-btn");

const docRoot = document.querySelector(":root");

const bodyColor = [
  "#a8d530",
  "#42aaff",
  "#f3d55b",
  "#ff4f51",
  "#904ae8",
  "#ffa711",
];

let color = [...bodyColor, "transparent"];
console.log(color);
let [counter1, counter2, counter3, counter4] = Array(4).fill(0);

let setCounter = (counter, len) => {
  return counter < len - 1 ? counter + 1 : 0;
};

faceBtn.addEventListener("click", () => {
  counter1 = setCounter(counter1, 6);
  document
    .getElementById("face")
    .setAttribute("src", `assets/face-${counter1}.png`);
});

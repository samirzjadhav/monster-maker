const colorBtn = document.getElementById("color-btn");
const faceBtn = document.getElementById("face-btn");
const hornsBtn = document.getElementById("horns-btn");
const tailBtn = document.getElementById("tail-btn");

const docRoot = document.querySelector(":root");

const bodyColors = [
  "#a8d530",
  "#42aaff",
  "#f3d55b",
  "#ff4f51",
  "#904ae8",
  "#ffa711",
  "#00adef",
  "#5cd2ff",
  "#FFEECC",
  "#FFDDCC",
  "#FFCCCC",
  "#FEBBCC",
  "#FF78C4",
  "#E1AEFF",
  "#FFBDF7",
  "#FFECEC",
];

let color = [...bodyColors, "transparent"];
console.log(color);
let [counter1, counter2, counter3, counter4] = Array(4).fill(0);

let setCounter = (counter, len) => {
  return counter < len - 1 ? counter + 1 : 0;
};

faceBtn.addEventListener("click", () => {
  counter1 = setCounter(counter1, 10);
  document
    .getElementById("face")
    .setAttribute("src", `assets/face-${counter1}.png`);
});

colorBtn.addEventListener("click", () => {
  counter2 = setCounter(counter2, bodyColors.length);
  docRoot.style.setProperty("--color-monster", bodyColors[counter2]);
});

hornsBtn.addEventListener("click", () => {
  counter3 = setCounter(counter3, color.length);
  docRoot.style.setProperty("--color-horns", color[counter3]);
});

tailBtn.addEventListener("click", () => {
  counter4 = setCounter(counter4, color.length);
  docRoot.style.setProperty("--color-tail", color[counter4]);
});

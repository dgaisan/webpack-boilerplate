import "./styles/main.scss";
import generateString from "./generateString";
import svgAsset from "./assets/svgAsset.svg";

const logoElem = document.getElementById("logo");
logoElem.src = svgAsset;

console.log(generateString());
console.log(123);

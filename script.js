var body = document.querySelector('body');
var css = document.querySelector('h3');
var color1 = document.querySelector('#color-1');
var color2 = document.querySelector('#color-2');
var button = document.querySelector('button');

function setGradient() {
  body.style.background =
    'linear-gradient(to right, ' + color1.value + ' , ' + color2.value + ')';
  css.textContent = body.style.background + ';';
  // console.log(color1.value);
}

function hexGen(rgb) {
  var hex = rgb.toString(16);
  if (hex.length < 2) hex = hex + '0';
  return hex;
}

function rgbToHex(red, green, blue) {
  hexR = hexGen(red);
  hexG = hexGen(green);
  hexB = hexGen(blue);
  // console.log(hexR, hexG, hexB);
  return '#' + hexR + hexG + hexB;
}

function createRandom() {
  var red = Math.ceil(Math.random() * 255);
  var green = Math.ceil(Math.random() * 255);
  var blue = Math.ceil(Math.random() * 255);
  var color = rgbToHex(red, green, blue);
  return color;
}

function setRandom() {
  color1.value = createRandom();
  color2.value = createRandom();
  setGradient();
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

button.addEventListener('click', setRandom);

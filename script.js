let input = document.getElementById("inputField");
function insertValue(e) {
  input.value += e;
}
function clearfunc() {
  input.value = "";
}
function removeOne() {
  let value = input.value;
  let createNew = value.toString().slice(0, value.length - 1);
  input.value = createNew;
}

let evalueate = () => {
  let resul = eval(input.value);
  input.value = resul;
};

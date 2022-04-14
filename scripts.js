var kg = document.getElementById("kg");
var pound = document.getElementById("pound");
kg.addEventListener("input", function () {
  var conKG = this.value;
  var conPOUND = conKG * 2.205;
  pound.value = conPOUND;
});
pound.addEventListener("input", function () {
  var conPOUND = this.value;
  var conKG = conPOUND / 2.205;
  kg.value = conKG;
});
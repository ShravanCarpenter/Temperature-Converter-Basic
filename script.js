function convert() {
  var inputTemp = document.getElementById("input-temp").value;
  var inputScale = document.getElementById("input-scale").value;
  
  var celsius;
  if (inputScale === "unit") {
    alert("Choose the unit!");
  } else if (inputScale === "celsius") {
    celsius = inputTemp;
  } else if (inputScale === "fahrenheit") {
    celsius = (inputTemp - 32) * 5 / 9;
  } else if (inputScale === "kelvin") {
    celsius = inputTemp - 273.15;
  };

  var fahrenheit = (celsius * 9 / 5) + 32;
  var kelvin = celsius + 273.15;

  document.getElementById("output-celsius").innerHTML = celsius.toFixed(2);
  document.getElementById("output-fahrenheit").innerHTML = fahrenheit.toFixed(2);
  document.getElementById("output-kelvin").innerHTML = kelvin.toFixed(2);
}
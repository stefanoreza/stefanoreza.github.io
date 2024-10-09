// const convertCelsiusToFahrenheitInConciseSyntax = 
//   (temperature) => (9 / 5) * temperature + 32;
function convert() {
  const celsius = parseFloat(document.getElementById('celsius').value);
  const fahrenheit = (celsius * 9/5) + 32;
  if (fahrenheit == " " || isNaN(fahrenheit)) {
    alert('Masukkan angka suhu dalam Celsius!');
  } else {
    document.getElementById('fahrenheit').value = fahrenheit;
    document.getElementById('kalkulasi').value = `${celsius}°C * (9/5) + 32 = ${fahrenheit}°F`;
  }
}

function reset() {
  document.getElementById('fahrenheit').value = ' ';
  document.getElementById('kalkulasi').value = ' ';
  document.getElementById('celsius').value = ' ';
}

function reverse() {
  const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
  const celsius = (fahrenheit - 32) * 5/9;
  document.getElementById('celsius').value = celsius;
  document.getElementById('kalkulasi').value = `(${fahrenheit}°F - 32°) * (5/9) = ${celsius}°C`;
}
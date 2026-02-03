const diametro = Number(prompt("Ingresa el diámetro del círculo"));
const radio = diametro / 2;
const area = Math.PI * radio * radio;

// Mostrar en la página
document.getElementById("resultado").textContent =
  "El área del círculo es: " + area.toFixed(2);

// Mostrar en alerta
alert("El área del círculo es: " + area.toFixed(2));

// Mostrar en consola
console.log("El área del círculo es:", area);
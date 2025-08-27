const { suma, resta } = require("../src/funciones");

console.assert(suma(2, 3) === 5, "Error en suma");
console.assert(resta(5, 3) === 2, "Error en resta");

console.log("✅ Todos los tests pasaron correctamente");


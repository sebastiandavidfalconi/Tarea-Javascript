//Crear una variable
let variable = 0;
//Crear la función
function local() { 
  //Crear una variable
  let variable = 5;
  //Mostrar el contenido de la variable global
  console.log("Contenido de la variable local: " + variable);
}
//Llamar a la función
local();
//Mostrar en consola el valor de la variable local
console.log("Contenido de la variable global: " + variable);

//Crear una variable
let variable2 = 0;

//Crear una función
function local(){
    //Crear una variable
    let variable = 5;
    //Mostrar en consola las dos variables
    console.log("Contenido de la variable global: " + variable);
    console.log("Contenido de la variable local: " + variable2);
}
//Mostrar en consola las dos variables
console.log("Contenido de la variable global: " + variable); //Esto mostrará un error por el alcance de la función
console.log("Contenido de la variable local: " + variable2);
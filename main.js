/*  GENERADOR DE EXCUSAS
*   Descripción: Se trata de escoger, al azar, una frase de cada columna.
*   Con el fin de elaborar una excusa que es escuche técnicamente compleja
*   a la pregunta ¿Cuándo terminamos el proyecto?
*   Autor: César Guerra
*   Fecha: 02/05/2020
*/

//Defino el contenido de mis columnas
const columnaA = [
    "La vida es una obra teatral que no importa cuánto haya durado, sino lo bien que haya sido representada (Séneca).",
    "Elige un trabajo que ames, y no tendrás que trabajar un solo día de tu vida (Confucio).",
    "Nuestra mayor gloria no es no caer nunca, sino levantarnos cada vez que caemos (Confucio).",
    "Si das pescado a un hombre hambriento lo nutrirás durante una jornada. Si le enseñas a pescar, le nutrirás toda su vida (Lao-Tsé).",
    "La victoria más difícil es la victoria sobre uno mismo (Aristóteles).",
    "Es sencillo hacer que las cosas sean complicadas, pero es difícil hacer que sean sencillas (Friedrich Nietzsche).",
    "La peor lucha es la que no se hace (Karl Marx).",
    "La felicidad no brota de la razón, sino de la imaginación (Immanuel Kant).",
    "El mundo pertenece a los optimistas; los pesimistas son meros espectadores (Dwight Einsnhower).",
    "Para cambiar la vida: comienza inmediatamente. Hazlo ostentosamente (William James)."
];

function generaFrase() {
    // Calculamos de forma aleatoria el indice para cada arreglo de frases
    const posicionA = Math.floor(Math.random()*columnaA.length);
    
    // Concatenamos las 3 partes de la excusa en una sola.
    const frase = `${columnaA[posicionA]}`
    
    //Hacemos que la función devuelva la excusa armada.
    return frase;
}

console.log(generaFrase());

//Busco en el HTML el elemento con ID excusa y reemplazo el contenido por lo que me devuelva la función generaExcusa()
function colocaFrase() {
    document.getElementById("frase").innerHTML = generaFrase();
}

//Ejecuto la función, para cuando cargue la página, automáticamente ya haya una excusa cargada.
colocaFrase();
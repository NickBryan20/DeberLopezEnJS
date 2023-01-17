//1)Se tiene una cadena de caracteres. Se pide diseñar la función que devuelve la cadena sin consonantes
//Ejemplo: Hola Esmeraldas
//Resultado esperado: "oa Eeaa"
//Utilice filter
const Consonante=["Hola Esmeraldas"]
    const vocales="aeiouAEIOU"
    const resultado=
    Consonante.join("").split("").map(char=>
         vocales.indexOf(char)!==-1?char:"").join("")
console.log(resultado)

//2)Determine si todos los elementos de la matriz son positivos

const MatrizNumeros=[[1,2,3,4],[4,5,6,7],[7,8,9,10]]
const positivos=MatrizNumeros.flat().every(elemento=>{
    return elemento > 0
})
if (positivos){
    console.log("Todos los elementos son positivos.")
}
else{
    console.log("No todos los elementos son positivos.")
}
console.log("¿Hay elementos positivos?",positivos)
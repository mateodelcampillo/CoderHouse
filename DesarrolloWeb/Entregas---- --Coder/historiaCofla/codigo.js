const obtenerInformacion = (materia)=>{
     let materias = {
        fisica: ["Perez","pedro", "pepito", "cofla", "maria"],
        programacion: ["Dalto","pedro", "juan", "pepito"],
        logica: ["Hernandez","pedro", "juan", "pepito", "cofla", "maria"],
        quimica: ["Rodriguez","pedro", "juan", "pepito", "cofla", "maria"]
    }
    if (materias[materia] !== undefined){
        return [materias[materia], materia, materias];
    }
    else{
    
    return materias;
    
    }
}
const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);

if (informacion !== false){
    let profesor = informacion[0][0];
    let alumnos = informacion[0];
    alumnos.shift()
    document.write(`El profesor de <b>${informacion[1]}</b> es : <b style = "color: red">${profesor}</b><br>
    Los alumnos presentes son: <b style = "color: red">${alumnos}</b><br><br>`)
}

}
const cantidadDeClases = (alumno)=>{
let informacion = obtenerInformacion()
let clasesPresentes = []
let cantidadTotal = 0
for (info in informacion){
    if (informacion[info].includes(alumno)){
        cantidadTotal++;
        clasesPresentes.push(" " + info);
    }

}
return `${alumno} esta en: ${cantidadTotal} clases <br><br>
Esta cursando las clases: <b>${clasesPresentes}<br><br><br></b>`;
}
mostrarInformacion("fisica")
mostrarInformacion("programacion")
mostrarInformacion("logica")
mostrarInformacion("quimica")

document.write(cantidadDeClases("cofla"))
document.write(cantidadDeClases("maria"))
document.write(cantidadDeClases("pepito"))
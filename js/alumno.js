listaAlumno = [];

function nuevoAlumno(anombre, dedad, calf1, calf2, calf3, calf4) {
  var alumno = {
    nombre: anombre,
    edad: dedad,
    cal1: calf1,
    cal2: calf2,
    cal3: calf3,
    cal4: calf4,
  };

  listaAlumno.push(alumno);


  let promedio = (calf1 + calf2 + calf3 + calf4) / 4;

  alumnoListaHTML = `${alumno.nombre} ${alumno.edad} ${alumno.cal1} ${alumno.cal2} ${alumno.cal3} ${alumno.cal4} Tu promedio es de: ${promedio} `;
  let parrafo = document.getElementById("elemento");
  parrafo.classList.add("default-error");
  parrafo.innerHTML = alumnoListaHTML;

  listaAlumno.map(function(listaAlumno){
    console.log(listaAlumno)
  })
  
}

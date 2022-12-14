document.querySelector("#btnGuardar").addEventListener("click", guardarAlumno);
document.querySelector("#btnRecorrer", recorrerAlumno);
function guardarAlumno() {
  event.preventDefault();

  dNombre = document.getElementById("nombre").value;
  dEdad = document.getElementById("edad").value;

  dmateria1 = parseFloat(document.getElementById("materia1").value);
  dmateria2 = parseFloat(document.getElementById("materia2").value);
  dmateria3 = parseFloat(document.getElementById("materia3").value);
  dmateria4 = parseFloat(document.getElementById("materia4").value);
  calificacion = document.getElementById('elemento');

 nuevoAlumno(dNombre, dEdad, dmateria1, dmateria2, dmateria3, dmateria4);
}


function recorrerAlumno(listaAlumno){
  event.preventDefault();

  for(i = 0; i<listaAlumno.length; i++){
  console.log(nuevoAlumno[i]);
  }
}

  
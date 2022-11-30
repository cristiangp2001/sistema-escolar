
function calcularPromedio() {
    event.preventDefault();


    dNombre = document.getElementById('nombre').value;
    dEdad = document.getElementById('edad').value;

    dmateria1 = parseFloat(document.getElementById('materia1').value);
    dmateria2 = parseFloat(document.getElementById('materia2').value);
    dmateria3 = parseFloat(document.getElementById('materia3').value);
    dmateria4 = parseFloat(document.getElementById('materia4').value);


    let prom = (dmateria1 + dmateria2 + dmateria3 + dmateria4) / 4;

    calificacion = document.getElementById('elemento');


    
    if (prom >= 9 && prom <= 10) {
        elemento.classList.add('excelente');
        elemento.innerHTML = "Los datos del alumno son " + dNombre + " tu edad es: "+  dEdad + "\n" + "\n\nTu promedio es de " + prom + " y es de excelencia";
    }

    else if (prom >= 8 && prom <= 8.9) {
        elemento.classList.add('aprobado'); 
        elemento.innerHTML = "Los datos del alumno son " + dNombre + " tu edad es: "+ dEdad + "\n" + "\n\nTu promedio es de " + prom + " y es aprobatoria";
    } else if (prom >= 7 && prom <= 7.9) {
        elemento.classList.add('satisfactorio');
        elemento.innerHTML = "Los datos del alumno son " + dNombre + " tu edad es: "+ dEdad + "\n" + "\n\nTu promedio es de " + prom + " es satisfactorio";
    } else {
        elemento.classList.add('reprobado');
        elemento.innerHTML = "Los datos del alumno son " + dNombre + " tu edad es: "+ dEdad + "\n" + "\n\nTu promedio es de " + prom + " es reprobado";
    }
   
}
function comenzar() {
    var inicio = document.getElementById('inicio');
    var box1 = document.getElementById('Pregunta-1');
    var box2 = document.getElementById('Pregunta-2');
    var box3 = document.getElementById('Pregunta-3');
    var box4 = document.getElementById('Pregunta-4');
    var box5 = document.getElementById('Pregunta-5');
    var box6 = document.getElementById('Pregunta-6');
    var resultado = document.getElementById('resultado');

    inicio.style.display = "none";
    box1.style.display = "flex";
    box2.style.display = "none";
    box3.style.display = "none";
    box4.style.display = "none";
    box5.style.display = "none";
    box6.style.display = "none";
    resultado.style.display = "none";
}







//PREGUNTA 1

function pregunta1(res) {
    var boton = document.getElementById('res-1');
    var check = document.getElementById('check-1');
    var incorrect = document.getElementsByClassName("incorrect-1");
    var i;
    var delay;
    var p1;

    if (res == 1) {
        boton.style.backgroundColor = "yellowgreen";
        check.style.backgroundColor = "yellowgreen";
        for (i = 0; i < incorrect.length; i++) {
            incorrect[i].style.backgroundColor = "#FF8181";
        }
        delay = setTimeout(next2, 2000);
        p1 = 1;
        return p1;
    } else {
        boton.style.backgroundColor = "yellowgreen";
        check.style.backgroundColor = "#FF8181";
        for (i = 0; i < incorrect.length; i++) {
            incorrect[i].style.backgroundColor = "#FF8181";
        }
        delay = setTimeout(next2, 2000);
        p1 = 0;
        return p1;
    }
}

function next2() {
    var inicio = document.getElementById('inicio');
    var box1 = document.getElementById('Pregunta-1');
    var box2 = document.getElementById('Pregunta-2');
    var box3 = document.getElementById('Pregunta-3');
    var box4 = document.getElementById('Pregunta-4');
    var box5 = document.getElementById('Pregunta-5');
    var box6 = document.getElementById('Pregunta-6');
    var resultado = document.getElementById('resultado');

    inicio.style.display = "none";
    box1.style.display = "none";
    box2.style.display = "flex";
    box3.style.display = "none";
    box4.style.display = "none";
    box5.style.display = "none";
    box6.style.display = "none";
    resultado.style.display = "none";
}








// PREGUNTA 2

function pregunta2(res) {
    var boton = document.getElementById('res-2');
    var check = document.getElementById('check-2');
    var incorrect = document.getElementsByClassName("incorrect-2");
    var i;
    var delay;
    var p2;

    if (res == 3) {
        boton.style.backgroundColor = "yellowgreen";
        check.style.backgroundColor = "yellowgreen";
        for (i = 0; i < incorrect.length; i++) {
            incorrect[i].style.backgroundColor = "#FF8181";
        }
        delay = setTimeout(next3, 2000);
        p2 = 1;
        return p2;
    } else {
        boton.style.backgroundColor = "yellowgreen";
        check.style.backgroundColor = "#FF8181";
        for (i = 0; i < incorrect.length; i++) {
            incorrect[i].style.backgroundColor = "#FF8181";
        }
        delay = setTimeout(next3, 2000);
        p2 = 0;
        return p2;
    }
}

function next3() {
    var inicio = document.getElementById('inicio');
    var box1 = document.getElementById('Pregunta-1');
    var box2 = document.getElementById('Pregunta-2');
    var box3 = document.getElementById('Pregunta-3');
    var box4 = document.getElementById('Pregunta-4');
    var box5 = document.getElementById('Pregunta-5');
    var box6 = document.getElementById('Pregunta-6');
    var resultado = document.getElementById('resultado');

    inicio.style.display = "none";
    box1.style.display = "none";
    box2.style.display = "none";
    box3.style.display = "flex";
    box4.style.display = "none";
    box5.style.display = "none";
    box6.style.display = "none";
    resultado.style.display = "none";
}






// PREGUNTA 3

function pregunta3(res) {
    var boton = document.getElementById('res-3');
    var check = document.getElementById('check-3');
    var incorrect = document.getElementsByClassName("incorrect-3");
    var i;
    var delay;
    var p3;

    if (res == 2) {
        boton.style.backgroundColor = "yellowgreen";
        check.style.backgroundColor = "yellowgreen";
        for (i = 0; i < incorrect.length; i++) {
            incorrect[i].style.backgroundColor = "#FF8181";
        }
        delay = setTimeout(next4, 2000);
        p3 = 1;
        return p3;
    } else {
        boton.style.backgroundColor = "yellowgreen";
        check.style.backgroundColor = "#FF8181";
        for (i = 0; i < incorrect.length; i++) {
            incorrect[i].style.backgroundColor = "#FF8181";
        }
        delay = setTimeout(next4, 2000);
        p3 = 0;
        return p3;
    }
}

function next4() {
    var inicio = document.getElementById('inicio');
    var box1 = document.getElementById('Pregunta-1');
    var box2 = document.getElementById('Pregunta-2');
    var box3 = document.getElementById('Pregunta-3');
    var box4 = document.getElementById('Pregunta-4');
    var box5 = document.getElementById('Pregunta-5');
    var box6 = document.getElementById('Pregunta-6');
    var resultado = document.getElementById('resultado');

    inicio.style.display = "none";
    box1.style.display = "none";
    box2.style.display = "none";
    box3.style.display = "none";
    box4.style.display = "flex";
    box5.style.display = "none";
    box6.style.display = "none";
    resultado.style.display = "none";
}





// PREGUNTA 4

function pregunta4(res) {
    var boton = document.getElementById('res-4');
    var check = document.getElementById('check-4');
    var incorrect = document.getElementsByClassName("incorrect-4");
    var i;
    var delay;
    var p4;

    if (res == 2) {
        boton.style.backgroundColor = "yellowgreen";
        check.style.backgroundColor = "yellowgreen";
        for (i = 0; i < incorrect.length; i++) {
            incorrect[i].style.backgroundColor = "#FF8181";
        }
        delay = setTimeout(next5, 2000);
        p4 = 1;
        return p4;
    } else {
        boton.style.backgroundColor = "yellowgreen";
        check.style.backgroundColor = "#FF8181";
        for (i = 0; i < incorrect.length; i++) {
            incorrect[i].style.backgroundColor = "#FF8181";
        }
        delay = setTimeout(next5, 2000);
        p4 = 0;
        return p4;
    }
}

function next5() {
    var inicio = document.getElementById('inicio');
    var box1 = document.getElementById('Pregunta-1');
    var box2 = document.getElementById('Pregunta-2');
    var box3 = document.getElementById('Pregunta-3');
    var box4 = document.getElementById('Pregunta-4');
    var box5 = document.getElementById('Pregunta-5');
    var box6 = document.getElementById('Pregunta-6');
    var resultado = document.getElementById('resultado');

    inicio.style.display = "none";
    box1.style.display = "none";
    box2.style.display = "none";
    box3.style.display = "none";
    box4.style.display = "none";
    box5.style.display = "flex";
    box6.style.display = "none";
    resultado.style.display = "none";
}







// PREGUNTA 5

function pregunta5(res) {
    var boton = document.getElementById('res-5');
    var check = document.getElementById('check-5');
    var incorrect = document.getElementsByClassName("incorrect-5");
    var i;
    var delay;
    var p5;

    if (res == 3) {
        boton.style.backgroundColor = "yellowgreen";
        check.style.backgroundColor = "yellowgreen";
        for (i = 0; i < incorrect.length; i++) {
            incorrect[i].style.backgroundColor = "#FF8181";
        }
        delay = setTimeout(next6, 2000);
        p5 = 1;
        return p5;
    } else {
        boton.style.backgroundColor = "yellowgreen";
        check.style.backgroundColor = "#FF8181";
        for (i = 0; i < incorrect.length; i++) {
            incorrect[i].style.backgroundColor = "#FF8181";
        }
        delay = setTimeout(next6, 2000);
        p5 = 0;
        return p5;
    }
}

function next6() {
    var inicio = document.getElementById('inicio');
    var box1 = document.getElementById('Pregunta-1');
    var box2 = document.getElementById('Pregunta-2');
    var box3 = document.getElementById('Pregunta-3');
    var box4 = document.getElementById('Pregunta-4');
    var box5 = document.getElementById('Pregunta-5');
    var box6 = document.getElementById('Pregunta-6');
    var resultado = document.getElementById('resultado');

    inicio.style.display = "none";
    box1.style.display = "none";
    box2.style.display = "none";
    box3.style.display = "none";
    box4.style.display = "none";
    box5.style.display = "none";
    box6.style.display = "flex";
    resultado.style.display = "none";
}






// PREGUNTA 6

function pregunta6(res) {
    var boton = document.getElementById('res-6');
    var check = document.getElementById('check-6');
    var incorrect = document.getElementsByClassName("incorrect-6");
    var i;
    var delay;
    var x;

    if (res == 1) {
        boton.style.backgroundColor = "yellowgreen";
        check.style.backgroundColor = "yellowgreen";
        for (i = 0; i < incorrect.length; i++) {
            incorrect[i].style.backgroundColor = "#FF8181";
        }
        delay = setTimeout(nextResultado, 2000);
        p6 = 1;
        return p6;
    } else {
        boton.style.backgroundColor = "yellowgreen";
        check.style.backgroundColor = "#FF8181";
        for (i = 0; i < incorrect.length; i++) {
            incorrect[i].style.backgroundColor = "#FF8181";
        }
        delay = setTimeout(nextResultado, 2000);
        x = resultados(0);
    }
}

function nextResultado() {
    var inicio = document.getElementById('inicio');
    var box1 = document.getElementById('Pregunta-1');
    var box2 = document.getElementById('Pregunta-2');
    var box3 = document.getElementById('Pregunta-3');
    var box4 = document.getElementById('Pregunta-4');
    var box5 = document.getElementById('Pregunta-5');
    var box6 = document.getElementById('Pregunta-6');
    var resultado = document.getElementById('resultado');

    inicio.style.display = "none";
    box1.style.display = "none";
    box2.style.display = "none";
    box3.style.display = "none";
    box4.style.display = "none";
    box5.style.display = "none";
    box6.style.display = "none";
    resultado.style.display = "flex";

    var validacion = resultados();
}

function resultados() {

    var p1, p2, p3, p4, p5, p6;

    var check1 = document.getElementById('check-1').style.backgroundColor;
    var check2 = document.getElementById('check-2').style.backgroundColor;
    var check3 = document.getElementById('check-3').style.backgroundColor;
    var check4 = document.getElementById('check-4').style.backgroundColor;
    var check5 = document.getElementById('check-5').style.backgroundColor;
    var check6 = document.getElementById('check-6').style.backgroundColor;

    if (check1 == "yellowgreen") {
        p1 = 1;
    } else {
        p1 = 0;
    }

    if (check2 == "yellowgreen") {
        p2 = 1;
    } else {
        p2 = 0;
    }

    if (check3 == "yellowgreen") {
        p3 = 1;
    } else {
        p3 = 0;
    }

    if (check4 == "yellowgreen") {
        p4 = 1;
    } else {
        p4 = 0;
    }

    if (check5 == "yellowgreen") {
        p5 = 1;
    } else {
        p5 = 0;
    }

    if (check6 == "yellowgreen") {
        p6 = 1;
    } else {
        p6 = 0;
    }

    var puntaje = p1 + p2 + p3 + p4 + p5 + p6;
    if (puntaje >= 0 && puntaje <= 2) {
        document.getElementById('titulo-resultado').innerHTML = "!Upps! esto es malo";
        document.getElementById('texto-resultado').innerHTML = "Te recomiendo investigar un poco más sobre la discapacidad. Recuerda que es importante incluir a las personas con discapacidad";
    } else if (puntaje >= 3 && puntaje <= 5) {
        document.getElementById('titulo-resultado').innerHTML = "¡Hey! Lo hiciste bien";
        document.getElementById('texto-resultado').innerHTML = "Felicidades, tu conocimiento sobre la discapacidad es considerablemente bueno. Recuerda que es importante incluir a las personas con discacidad.";
    } else {
        document.getElementById('titulo-resultado').innerHTML = "¡Wow! fue perfecto";
        document.getElementById('texto-resultado').innerHTML = "Felicidades, dominas muy bien el tema de la discapacidad. Siempre recuerda incluir a las personas con discapacidad.";
    }


}

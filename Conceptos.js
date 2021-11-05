//alert("Hola Mundo");

var nombre = "Alex Carrera";
var altura = 170;

var concatenar = nombre + altura;

//document.write(nombre);
//document.write(altura);

var datos = document.getElementById("datos");
//datos.innerHTML = concatenar;

datos.innerHTML = `
    <h1> Soy la caja de datos</h1>
    <h2> Mi nombre es: ${nombre}</h2>
    <h3> mido: ${altura}</h3>
`;

if(altura >= 190){
    datos.innerHTML += '<h1>Eres una persona alta</h1>'
}else{
    datos.innerHTML += '<h1>Eres una persona bajita</h1>'
}

function MuestraMiNombre (nombre, altura){
    var misDatos = `
    <h1> Soy la caja de datos</h1>
    <h2> Mi nombre es: ${nombre}</h2>
    <h3> mido: ${altura}</h3>
`;

    return misDatos;

}

function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML += MuestraMiNombre("Lales",190);
}

imprimir();

var nombres = ['Lales','Alex','Francisco'];


var coche = {
    modelo: 'Mercedes Clase A',
    vMaxima: 500,
    anio: 2020,
    mostrarDatos(){
        console.log(this.anio,this.modelo,this.vMaxima);
    }
};

document.write("<h1>"+coche.antiguerdad+"</h1>");
coche.mostrarDatos();
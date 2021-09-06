//Leer N numeros y determinar el promedio de solo los numeros negativos
/*
var numeros = [1, 2, 3, 4, 5, 6, -5, -3, -4];

const promedioPositivos = (numeros) => {
  var promedio = 0;
  var cantidadPositivos = 0;
  numeros.forEach((element) => {
    if (element >= 0) {
      promedio = promedio + element;
      cantidadPositivos++;
    }
  });
  promedio = promedio / cantidadPositivos;
  return promedio;
};

console.log(promedioPositivos(numeros));



//Realizar la multiplicacion de dos numeros leidos por el usuario
//pero a traves de sumas sucesivas

var valor1 = prompt("Ingrese el primer valor");
var valor2 = prompt("Ingrese el segundo valor");

const multiplicacion = (valor1, valor2) => {
  var resultado = 0;
  for (let i = 0; i < valor2; i++) {
    resultado = resultado + parseInt(valor1);
  }
  return resultado;
};

console.log(multiplicacion(valor1, valor2));

//Leer 5 notas y mostrar en pantalla las peores 2
var notas = [];
notas.push(parseInt(prompt("Ingrese el primer valor")));
notas.push(parseInt(prompt("Ingrese el primer valor")));
notas.push(parseInt(prompt("Ingrese el primer valor")));
notas.push(parseInt(prompt("Ingrese el primer valor")));
notas.push(parseInt(prompt("Ingrese el primer valor")));
console.log(notas);

const peoresNotas = (notas) => {
  var minimo1 = Math.min(...notas);
  var minimo2;
  notas.forEach((element, key) => {
    if (element != minimo1) {
      if (element < notas[key + 1]) {
        minimo2 = element;
      }
    }
  });
  return (resultado = [minimo1, minimo2]);
};

console.log(peoresNotas(notas));

//Dar 2 numeros y determinar si uno es divisor del otro
var divisor = parseInt(prompt("Ingrese divisor"));
var dividendo = parseInt(prompt("Ingrese dividendo"));

const esDivisor = (divisor, dividendo) => {
  var resultado = dividendo % divisor;
  if (resultado == 0) {
    return console.log("ES DIVISOR");
  } else {
    return console.log("NO ES DIVISOR");
  }
};

esDivisor(divisor, dividendo);



//Escribir un programa que determine si el año es bisiesto
var año = parseInt(prompt("Ingrese el año que desea consultar"));

const añoBisiesto = (año) => {
  var resto = año % 4;
  var resto2 = año % 100;
  var resto3 = año % 400;
  console.log(resto, resto2, resto3);
  if (resto == 0 && resto2 != 0) {
    return console.log("Es bisiesto");
  } else if (resto3 == 0) {
    return console.log("Es bisiesto");
  } else {
    return console.log("No es bisiesto");
  }
};

añoBisiesto(año);


//Dada la duracion de una llamada, calcular el valor.
//Si dura 3 minutos el valor es 1200
//Cada 1 minuto que se exceda se le debe sumar 1200 mas el 10%.

var duracionLlamada = parseInt(prompt("Ingrese la duracion de la llamada"));

const calculoCostoLlamada = (duracionLlamada) => {
  let valorTotal = 0;
  let costoMinimo = 1200;
  let exceso = costoMinimo * 1.1;
  if (duracionLlamada < 3) {
    valorTotal = 1200;
    return valorTotal;
  } else {
    let diferenciaMinutos = duracionLlamada - 3;
    valorTotal = costoMinimo + diferenciaMinutos * exceso;
    return valorTotal;
  }
};

console.log(calculoCostoLlamada(duracionLlamada));


//

var valor1 = parseInt(prompt("Ingrese el primer valor"));
var valor2 = parseInt(prompt("Ingrese el segundo valor"));
var valor3 = parseInt(prompt("Ingrese el tercer valor"));

const ordenDeNumeros = (valor1, valor2, valor3) => {
  if (valor1 < valor2 && valor2 < valor3)
    return console.log("Se encuentran en orden ascendiente");
  else if (valor1 > valor2 && valor2 > valor3)
    return console.log("Se encuentran en orden decreciente");
  else {
    return console.log("No tienen un orden especifico");
  }
};

console.log(ordenDeNumeros(valor1, valor2, valor3));


//Hacer una funcion que muestre la tabla de dividir de un numero

var valorIngresado = parseInt(prompt("Ingrese el numero"));

const tablaDividir = (valorIngresado) => {
  if (valorIngresado > 0) {
    for (let i = valorIngresado; i > 0; i--) {
      console.log(
        valorIngresado +
          " dividido " +
          i +
          " da como resultado " +
          valorIngresado / i
      );
    }
    return;
  } else {
    return console.log("Numero no valido");
  }
};

tablaDividir(valorIngresado);



//Leer una oracion y determinar cuantas palabras empiezan con vocal

var cadena = prompt("Ingrese una cadena de texto");

const palabrasConVocal = (palabra) => {
  var cadenaMinuscula = palabra.toLowerCase();
  var primerCaracter = cadenaMinuscula.charAt(0);
  const vocales = ["a", "e", "i", "o", "u"];

  if (vocales.indexOf(primerCaracter) === -1) {
    return console.log(palabra + " No empieza con vocal");
  } else {
    return console.log(palabra + " Empieza con vocal");
  }
};

//palabrasConVocal(cadena);

var oracion = prompt("Ingrese la oracion");

const contarPalabrasConVocal = (oracion) => {
  var oracionDividida = oracion.split(" ");
  oracionDividida.forEach((element) => {
    palabrasConVocal(element);
  });
};

contarPalabrasConVocal(oracion);

*/

//dar 10 numeros y luego ingresar uno para ver en que posicion esta
/*
var numero = parseInt(prompt("Ingrese un numero"));

const posicionDelNumero = (numero) => {
  const numeros = [1, 3, 4, 5, 6, 7, 8, 2, 9];
  var encontrado = false;
  numeros.forEach((element, key) => {
    if (element === numero) {
      encontrado = true;
      return console.log(numero + " se encuentra en la posicion:" + (key + 1));
    }
  });
  if (encontrado == false) return console.log("No se encuentra");
};

posicionDelNumero(numero);


// Ingresar 10 valores y regresarlos de forma invertida.
var nombres = ["Eze", "Juan", "Jose"];

const devolverAlReves = (nombres) => {
  var nombresInvertidos = nombres.reverse();
  return console.log(nombresInvertidos);
};

devolverAlReves(nombres);
*/

//Ingresar numeros y ordenar de menor a mayor
/*
var numeros = [2, 3, 6, 1, 23, 57, 1, 9];

const ordenarNumeros = (numeros) => {
  numeros.sort(function (a, b) {
    return a - b;
  });
  return console.log(numeros);
};

ordenarNumeros(numeros);
*/

//Devolver una palabra con las letras invertidas
/*
var palabra = prompt("Ingrese palabra jeje xd");

const invertirPlabra = (palabra) => {
  var palabraInvertida = palabra.split("").reverse().join("");
  return console.log(palabraInvertida);
};

invertirPlabra(palabra);
*/

//Dar una oracion y una palabra y que devuelva una oracion sin esa palabra
/*
var parrafo = prompt("Ingrese parrafo");
var palabra = prompt("Ingrese Palabra");

const quitarPalabra = (parrafo, palabra) => {
  var arrayParrafo = parrafo.split(" ");
  arrayParrafo.forEach((element, key) => {
    if (element === palabra) {
      arrayParrafo.splice(key, 1);
    }
  });
  arrayParrafo = arrayParrafo.join(" ");
  return console.log(arrayParrafo);
};

quitarPalabra(parrafo, palabra);
*/
//Dar un parrafo y devolverlo de forma inversa
/*
var parrafoIngresado = prompt("Ingrese parrafo");

const invertirParrafo = (parrafoIngresado) => {
  var arrayParrafo = parrafoIngresado.split(" ");
  var arrayInvertido = arrayParrafo.reverse();
  var parrafoInvertido = arrayInvertido.join(" ");
  return console.log(parrafoInvertido);
};

invertirParrafo(parrafoIngresado);
*/

//Dada una lista de personas, con nombre apellido y edad, devolver
//una lista de los mayores de 30
/*
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

const Ezequiel = new Persona("Ezequiel", 34);
const Matias = new Persona("Matias", 12);
const Jose = new Persona("Jose", 15);
const Lucas = new Persona("Lucas", 42);

var personas = [Ezequiel, Matias, Jose, Lucas];

const listaMayores = (personas) => {
  var nombreMayores = [];
  personas.forEach((element) => {
    if (element.edad > 30) {
      nombreMayores.push(element);
    }
  });
  return nombreMayores;
};

console.log(listaMayores(personas));
*/

//Introducir dos arrays y devolver un array resultado de la mezcla
// de ambos de forma intercalada.
/*
var array1 = [1, 2, 5, 6, 8, 9];
var array2 = [3, 4, 7, 10];

const concatenarOrdenar = (array1, array2) => {
  var array3 = array1.concat(array2);
  return array3.sort(function (a, b) {
    return a - b;
  });
};

console.log(concatenarOrdenar(array1, array2));
*/

//Determinar si dos palabras contienen las mismas letras
/*
var palabra1 = prompt("Ingrese la palabra 1");
var palabra2 = prompt("Ingrese la palabra 2");

palabra1 = palabra1.toLowerCase();
palabra2 = palabra2.toLowerCase();

const palabrasAnalogas = (palabra1, palabra2) => {
  if (palabra1.split("").sort().join("") === palabra2.split("").sort().join(""))
    console.log("Son analogas");
  else console.log("No son analogas");
};

palabrasAnalogas(palabra1, palabra2);
*/

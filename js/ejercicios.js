//MENU OPERACIONES
/*
let num1 = parseInt(prompt("Ingrese número 1: "))
let num2 = parseInt(prompt("Ingrese número 2: "))

let opcion = prompt("Seleccione la Operacion:\nSuma = 1\nResta = 2\nMultiplicar = 3\nDividir = 4");

switch (opcion) {
    case "1":
        document.writeln("Suma");
        document.writeln(suma(num1,num2))
        break;

    case "2":
        document.writeln("Resta");
        document.writeln(resta(num1,num2))
        break;

    case "3":
        document.writeln("Multiplicación");
        document.writeln(multiplicar(num1,num2))
        break;

    case "4":
        document.writeln("División");
        document.writeln(dividir(num1,num2))
        break;

    default:
        document.writeln("Opción no válida");
        break;
}

function suma (a,b){
    return a+b
}

function resta(a, b){
    return a-b
}

function multiplicar(a,b){
    return a*b
}

function dividir (a,b){
    return a/b
}

//PROMEDIO NOTAS

let nota1 = parseInt(prompt("Ingrese nota 1: "))
let nota2 = parseInt(prompt("Ingrese nota 2: "))
let nota3 = parseInt(prompt("Ingrese nota 3: "))

function promedio( nota1, nota2, nota3){
    return (nota1+nota2+nota3)/3
}
let prom = promedio(nota1, nota2, nota3)

if(prom >=7 ){
    document.writeln(`Su nota es ${prom} usted está Aprobado `)
}
else{
    document.writeln(`Su nota es ${prom} usted está Reprobado `)
}


//PRECIO TOTAL

let precio= parseFloat(prompt("Ingrese precio del producto: "))

function precioFinal( precio){
    return (precio*0.12)+precio
}

let preciot = precioFinal(precio)

document.writeln(`El precio total incluido impuesto es de ${preciot}`)

*/

//AUTOS

let auto = parseInt(prompt("Seleccione modelo del auto:\nFord fiesta = 1\nFord focus = 2"))
let modelo = ""
let precio = 0
let porc =0
let descp =0.0

function descuento(auto){
    if(auto == 1){
        let desc = 22000-(22000*0.05)
        return desc
    }else if (auto == 2){
        let desc = 25000-(25000*0.10)
        return desc
    } else{
        return 0
    }
}

let desc1= descuento(auto)
if(auto == 1){
     modelo = "Ford fiesta"
     precio = 22000
     porc= 5
     descp= 22000*0.05
}else if(auto == 2){
     modelo = "Ford focus"
     precio = 25000
     porc= 10
     descp= 25000*0.10
}
document.writeln(`Ustede a comprado el auto modelo ${modelo}<br>con el precio de $${precio}<br>con el descuento de ${porc}% ${descp}<br>precio final $${desc1}`)

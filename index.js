const mouseTrap = require('mousetrap')

mouseTrap.bind('1',clickUno)
mouseTrap.bind('2',clickDos)
mouseTrap.bind('3',clickTres)
mouseTrap.bind('4',clickCuatro)
mouseTrap.bind('5',clickCinco)
mouseTrap.bind('6',clickSeis)
mouseTrap.bind('7',clickSiete)
mouseTrap.bind('8',clickOcho)
mouseTrap.bind('9',clickNueve)
mouseTrap.bind('0',clickCero)
mouseTrap.bind('+',clickSuma)
mouseTrap.bind('-',clickResta)
mouseTrap.bind('*',clickMultiplicacion)
mouseTrap.bind('/',clickDivision)

document.getElementById('botonUno').addEventListener('click', clickUno)
document.getElementById('botonDos').addEventListener('click', clickDos)
document.getElementById('botonTres').addEventListener('click', clickTres)
document.getElementById('botonCuatro').addEventListener('click', clickCuatro)
document.getElementById('botonCinco').addEventListener('click', clickCinco)
document.getElementById('botonSeis').addEventListener('click', clickSeis)
document.getElementById('botonSiete').addEventListener('click', clickSiete)
document.getElementById('botonOcho').addEventListener('click', clickOcho)
document.getElementById('botonNueve').addEventListener('click', clickNueve)
document.getElementById('botonCero').addEventListener('click', clickCero)
document.getElementById('botonSuma').addEventListener('click', clickSuma)
document.getElementById('botonResta').addEventListener('click', clickResta)
document.getElementById('botonMultiplicacion').addEventListener('click', clickMultiplicacion)
document.getElementById('botonDivision').addEventListener('click', clickDivision)
document.getElementById('botonRetroceso').addEventListener('click', clickRetroceso)
document.getElementById('botonClear').addEventListener('click', clickClear)


var actualElemento = document.getElementById('numeroActual')
var resultadoElemento = document.getElementById('resultado')

var actual = ''
var resultado = 0

function clickUno(){
    actual += 1
    actualElemento.innerHTML = actual
}

function clickDos(){
    actual += 2
    actualElemento.innerHTML = actual
}

function clickTres(){
    actual += 3
    actualElemento.innerHTML = actual
}

function clickCuatro(){
    actual += 4
    actualElemento.innerHTML = actual
}

function clickCinco(){
    actual += 5
    actualElemento.innerHTML = actual
}

function clickSeis(){
    actual += 6
    actualElemento.innerHTML = actual
}

function clickSiete(){
    actual += 7
    actualElemento.innerHTML = actual
}
function clickOcho(){
    actual += 8
    actualElemento.innerHTML = actual
}
function clickNueve(){
    actual += 9
    actualElemento.innerHTML = actual
}
function clickCero(){
    actual += 0
    actualElemento.innerHTML = actual
}

function clickSuma(){
    if(actual != ''){
        resultado += parseInt(actual)
        actual = ''
        actualElemento.innerHTML = '0'
        resultadoElemento.innerHTML = resultado
    }
}
function clickResta(){
    if(actual != ''){
        resultado -= parseInt(actual)
        actual = ''
        actualElemento.innerHTML = '0'
        resultadoElemento.innerHTML = resultado
    }
}

function clickMultiplicacion(){
    if(actual != ''){
        resultado *= parseInt(actual)
        actual = ''
        actualElemento.innerHTML = '0'
        resultadoElemento.innerHTML = resultado
    }
}

function clickDivision(){
    if(actual != ''){
        resultado /= parseInt(actual)
        actual = ''
        actualElemento.innerHTML = '0'
        resultadoElemento.innerHTML = resultado
    }
}
function clickRetroceso(){
    if(actual != ''){
        actual = '0'
        actualElemento.innerHTML= actual
    }
}
function clickClear(){
    if(actual != ''){
        resultado = '0'
        actual = '0'
        actualElemento.innerHTML = '0'
        resultadoElemento.innerHTML = resultado
    }
}
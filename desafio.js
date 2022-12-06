function convertir() { 
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var dolar = 312;
    var euro = 316;
    if (document.getElementById(("uno").checked)){
        resultado = valore / dolar;
        alert("El cambio de pesos argentinos a dolares es: $" + resultado.toFixed);
    }
    else if (document.getElementById("dos").checked){
        resultado = valore / euro;
        alert ("El cambio de pesos argentinos a Euros es:"+ resultado.toFixed);
    }
    else {
        alert("Tienes que cumplir todos los requerimientos")
    }
}
let saldo = 1000;

function consultar(){  
    alert('su saldo es '+ saldo);
}

function depositar(){
    var valor1 = document.getElementById('dep').value;
    saldo = parseFloat(saldo) + parseFloat(valor1)
    alert("su saldo total es es "+saldo);

}
function retirar(){
    var valor2 = document.getElementById('ret').value;
    if ( valor2 > saldo){
        alert("La cantidad supera el saldo");
        alert("Tu saldo actual es: "+saldo);
    }else{        
        saldo = parseFloat(saldo) - parseFloat(valor2)
        alert("su saldo total es es "+saldo);
    }
} 

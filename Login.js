localStorage.setItem("Cris",1234)
setTimeout(function Wry(){
    document.getElementById("CentCar").style.visibility = "hidden";
    document.getElementById("CardLog").style.visibility = "visible";
},2000)


function validateForm(){
    var nome = document.getElementById("username").value;
    var senha = document.getElementById("password").value;
    var conta = localStorage.getItem(nome);
    if(conta == null){
        document.getElementById("password_error").innerHTML = "Conta inexistente";
        return false;
    }
    else if(senha == conta){
        return true;
    }
    else{
        document.getElementById("password_error").innerHTML = "Senha errada";
        return false;
    }
}
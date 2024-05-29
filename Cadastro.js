localStorage.setItem("A",123456)
function validateForm() {
    var NomeUser = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
    var passwordError = document.getElementById("password_error");
    if(localStorage.getItem(NomeUser) == null){
    if(NomeUser == "" || password == "" || confirmPassword == ""){
        passwordError.innerHTML = "Dados estão faltando";
        return false;
    }
    else if (password != confirmPassword) {
        passwordError.innerHTML = "As senhas não correspondem";
        return false;
    } else {
        passwordError.innerHTML = "";
        localStorage.setItem(NomeUser,password);
        localStorage.setItem("Logado",NomeUser);
        return true;
    }}
    else{
        passwordError.innerHTML = "Usuario existente";
        return false;
    }
}
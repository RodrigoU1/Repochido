//función login
function login(){
    var user = document.getElementById("nombre").value;
    var pass = document.getElementById("pass").value;
    if (user == "romecito" && pass == "1234"){
        alert("Bienvenido");
        window.location = "index.html";
    }else{
        alert("Usuario o contraseña incorrecta");
    }
}
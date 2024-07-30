const usuario = [

    {
        usuario: "allie",
        senha: "123"
    },

    {
        usuario: "skot",
        senha: "456"
    },

    {
        usuario: "ryan",
        senha: "789"
    },

    {
        usuario: "oi",
        senha: "thau"
    }
]

document.getElementById('loginform').addEventListener('submit',function login(event){
    event.preventDefault();
 
    var user = document.getElementById('user').value;
    var senha = document.getElementById('senha').value;
    var loginValido = false;
 
    for (var i in usuario){
        if (user == usuario[i].usuario && senha == usuario[i].senha){
            loginValido = true;
            break;
    }
}
 
    if(loginValido == true){
        alert('sucesso');
        location.href = "home.html";
    }else{
        alert('usuario ou senha incorreta');
    }});
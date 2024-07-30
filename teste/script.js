document.getElementById('loginform').addEventListener('submit', function login (event) {
    event.preventDefault();
   
    var user = document.getElementById('user').value;
    var senha = document.getElementById('senha').value;
   
    if (user === "allie" && senha === "123"){
        alert('sucesso');
        location.href = "home.html";  
    } else {
        alert('usuario ou senha incorreto');
    }
    });
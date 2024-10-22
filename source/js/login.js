document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const data = { email, password };
    
    window.location.href = 'home.html';
    // // Recuperar os dados salvos no localStorage
    // const savedData = JSON.parse(localStorage.getItem('loginData'));

    // // Verificar se o email e a senha existem no loginData
    // if (savedData && savedData.email === email && savedData.password === password) {
    //     console.log('Login bem-sucedido');
    //     window.location.href = 'home.html';
    // } else {
    //     document.getElementById("ErrorText").innerHTML = "Usuário ou senha inválidos";
    // }
    
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const data = { email, password };

    // Salvar os dados no localStorage
    localStorage.setItem('loginData', JSON.stringify(data));
    console.log('Usuário cadastrado com sucesso');
    window.location.href = 'home.html';
});

// Alerta ao carregar a pagina
window.onload = function() {
    alert("Atenção! Este site é apenas um exemplo e não armazena informações reais.");
};

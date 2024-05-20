function showLoginForm() {
    // Esconde o elemento checkAges
    document.querySelector('.checkAges').style.display = 'none';
    // Esconde o elemento de registro
    document.querySelector('.register').style.display = 'none';
    // Mostra o elemento de login
    document.querySelector('.login').style.display = 'block';
}

function showRegisterForm() {
    // Esconde o elemento checkAges
    document.querySelector('.checkAges').style.display = 'none';
    // Esconde o elemento de login
    document.querySelector('.login').style.display = 'none';
    // Mostra o elemento de registro
    document.querySelector('.register').style.display = 'block';
}


function cadastrar() {
    // Obtém os valores dos campos de entrada
    var email = document.getElementById("email").value;
    var userID = document.getElementById("userID").value;
    var password1 = document.getElementById("password1").value;
    
    // Verifica se os campos têm o mínimo de caracteres necessários
    if (userID.length < 3 || password1.length < 4) {
        alert("O ID deve ter no mínimo 3 caracteres e a senha deve ter no mínimo 4 caracteres.");
        return;
    }

    // Salva os dados no localStorage
    localStorage.setItem("userID", userID);
    localStorage.setItem("password", password1);

    // Exibe uma mensagem de sucesso
    alert("Cadastro realizado com sucesso!");

    // Limpa os campos de entrada
    document.getElementById("email").value = "";
    document.getElementById("userID").value = "";
    document.getElementById("password1").value = "";
    document.getElementById("password2").value = "";

    // Redireciona para a página de login
    showLoginForm();
}

function logar() {
    // Obtém os valores dos campos de entrada
    var userID = document.getElementById("loginNameInput").value;
    var password = document.getElementById("loginPasswordInput").value;

    // Verifica se o ID está presente no localStorage
    if (localStorage.getItem("userID") === userID) {
        // Verifica se a senha corresponde à senha salva
        if (localStorage.getItem("password") === password) {
            // Senha correta, redireciona para outra página
            window.location.href = "./src/pages/home.html";
        } else {
            // Senha incorreta
            alert("Senha incorreta.");
        }
    } else {
        // ID não encontrado, redireciona para a tela de registro
        showRegisterForm();
    }
}

function handleNoClick() {
    // Adicione qualquer ação que você deseja executar quando o botão "No" for clicado
    window.location.href = "./src/pages/termos.html";
}

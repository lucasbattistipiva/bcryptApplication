document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const senha = document.getElementById('loginPassword').value;

    const response = await fetch('http://localhost:3000/logar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha })
    });

    const data = await response.json();
    const messageDiv = document.getElementById('loginMessage');
    if (response.ok) {
        messageDiv.innerHTML = `<div class="alert alert-success">${data.message}</div>`;
    } else {
        messageDiv.innerHTML = `<div class="alert alert-danger">${data.message}</div>`;
    }
});

document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const nome = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const senha = document.getElementById('registerPassword').value;

    const response = await fetch('http://localhost:3000/cadastrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, senha })
    });

    const data = await response.json();
    const messageDiv = document.getElementById('registerMessage');
    if (response.ok) { //caso a resposta estiver certa registra
        messageDiv.innerHTML = `<div class="alert alert-success">Cadastro realizado com sucesso!</div>`;
    } else { // caso não esteja correta
        messageDiv.innerHTML = `<div class="alert alert-danger">${data.message}</div>`;
    }
});

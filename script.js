document.getElementById('submit-button').addEventListener('click', function() {
    const password = document.getElementById('password-input').value;
    if (password === '74924') {
        window.location.href = 'nouvelle_page.html'; // Redirection vers la nouvelle page
    } else {
        alert('Mot de passe incorrect. Veuillez réessayer.');
    }
});



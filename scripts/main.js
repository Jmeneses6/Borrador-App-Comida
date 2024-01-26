const passwordInput = document.getElementById('password');
const showPasswordCheckbox = document.getElementById('showPassword');
    
    //!El evento se activa cuando se marque la casilla
    showPasswordCheckbox.addEventListener('change', () => {
    //!El tipo de texto cambiara depende al evento si se marca sera tipo texto de lo contrario tipo password
    passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
    });
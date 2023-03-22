const nombre de usuario = document.getElementById('nombre de usuario')
const contraseña = document.getElementById('contraseña')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        nombre de usuario: nombre de usuario.value,
        contraseña: contraseña.value
    }

    console.log(data)
})
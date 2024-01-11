// Filtro de búsqueda
const inputBusqueda = document.querySelector('#texto');

// Función para actualizar la visibilidad de los usuarios según el filtro
const actualizarVisibilidadUsuarios = () => {
    const filtro = inputBusqueda.value.toLowerCase();

    // Iterar sobre todos los elementos .usuario
    document.querySelectorAll('.usuario').forEach(usuario => {
        const nombre = usuario.querySelector('.nombre').textContent.toLowerCase();
        const esVisible = nombre.includes(filtro);
        usuario.style.display = esVisible ? 'flex' : 'none';
    });
};

// Evento para actualizar la lista de usuarios al escribir en el input
inputBusqueda.addEventListener('input', actualizarVisibilidadUsuarios);

// Función para generar usuarios
const generarUsuario = async () => {
    const url = 'https://randomuser.me/api/?results=9';
    console.log('Generando usuarios');
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();

    // Iterar sobre todos los elementos .usuario
    document.querySelectorAll('.usuario').forEach((usuario, index) => {
        const datos = results[index];

        // Seleccionar elementos dentro del usuario actual
        const foto = usuario.querySelector('.foto');
        const nombre = usuario.querySelector('.nombre');
        const id = usuario.querySelector('.id');
        const pais = usuario.querySelector('.pais');
        const correo = usuario.querySelector('.correo');

        // Actualizar elementos con datos del usuario
        foto.src = datos.picture.medium;
        nombre.textContent = datos.name.first;
        id.textContent = datos.id.value;
        pais.textContent = datos.location.country;
        correo.textContent = datos.email;
    });

    // Actualizar la visibilidad después de generar los usuarios
    actualizarVisibilidadUsuarios();
};

document.addEventListener('DOMContentLoaded', generarUsuario);







// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        input.value = "";
        return;
    }

    amigos.push(nombre);
    mostrarListaAmigos();
    input.value = "";
}

// Función para mostrar la lista de amigos
function mostrarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(li);
    });
}

// Función para realizar el sorteo de un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Necesitas al menos 1 amigo en la lista para realizar el sorteo.");
        return;
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultados anteriores

    const index = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[index];

    const li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigoSecreto}`;
    resultado.appendChild(li);
}


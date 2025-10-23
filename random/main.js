function mostrarImagenes(contenedorId, imagenes) {
    let contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML = "";
    imagenes.slice(0, 10).forEach(url => {
        let img = document.createElement("img");
        img.src = url;
        img.alt = "perrito";
        img.className = "w-full h-40 object-cover rounded-md border border-blue-400";
        contenedor.appendChild(img);
    });
}

async function cargarPerritosAleatorios() {
    let res = await fetch("https://dog.ceo/api/breeds/image/random/10");
    const data = await res.json();
    mostrarImagenes("random-dogs", data.message);
}
cargarPerritosAleatorios();
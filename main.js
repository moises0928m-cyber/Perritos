async function traerPerritos() {
    try {
        let respuesta = await axios("https://dog.ceo/api/breeds/image/random/10");
        let perritosContainer = document.querySelector("#random-dogs");
        
        perritosContainer.innerHTML = "";
        
        const imagenesPerritos = respuesta.data.message.slice(0, 12);
        
        imagenesPerritos.forEach((imagen, index) => {
            perritosContainer.innerHTML += `
                <div class="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                    <div class="h-48 sm:h-64 w-full bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                        <img src="${imagen}" alt="" class="h-full w-full object-cover">
                    </div>
                    <h3 class="text-lg font-bold text-gray-800 mb-2">Perrito ${index}</h3>
                    <p class="text-2xl font-bold text-pink-600 mb-4">¡En adopción!</p>
                    <button class="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg transition-colors">
                        Conocer más
                    </button>
                </div>
            `;
        });
        
    } catch (error) {
        console.error('Error:', error);
    }
}

traerPerritos();

async function cargarPerritosAleatorios() {
    let res = await fetch("https://dog.ceo/api/breeds/image/random/10");
    const data = await res.json();
    traerPerritos("random-dogs", data.message);
}
cargarPerritosAleatorios();
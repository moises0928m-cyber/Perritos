// main.js
async function traerPerritos() {
    try {
        let respuesta = await axios("https://dog.ceo/api/breed/hound/images");
        let perritosContainer = document.querySelector("#perritos-container");
        
        perritosContainer.innerHTML = "";
        
        const imagenesPerritos = respuesta.data.message.slice(0, 10);
        
        imagenesPerritos.forEach((imagen, index) => {
            perritosContainer.innerHTML += `
                <div class="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                    <div class="h-48 sm:h-64 w-full bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                        <img src="${imagen}" alt="Perrito Hound ${index}" class="h-full w-full object-cover">
                    </div>
                    <span class="inline-block bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded mb-2">Hound</span>
                    <h3 class="text-lg font-bold text-gray-800 mb-2">Perrito Hound ${index}</h3>
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

    document.addEventListener("DOMContentLoaded", () => {

      const razaSelect = document.getElementById("razaSelect");
      const subrazaSelect = document.getElementById("subrazaSelect");
      const imagenesDiv = document.getElementById("imagenes");
      const btnMostrar = document.getElementById("mostrarBtn");

      fetch("https://dog.ceo/api/breeds/list/all")
        .then(res => res.json())
        .then(data => {
          const razas = Object.keys(data.message);
          razas.forEach(raza => {
            const option = document.createElement("option");
            option.value = raza;
            option.textContent = raza;
            razaSelect.appendChild(option);
          });
        })
        .catch(err => console.error("Error cargando razas:", err));

      razaSelect.addEventListener("change", () => {
        const raza = razaSelect.value;
        subrazaSelect.innerHTML = '<option value="">Selecciona una subraza</option>';
        subrazaSelect.disabled = true;

        if (!raza) return;

        fetch(`https://dog.ceo/api/breed/${raza}/list`)
          .then(res => res.json())
          .then(data => {
            const subrazas = data.message;
            if (subrazas.length > 0) {
              subrazaSelect.disabled = false;
              subrazas.forEach(subraza => {
                const option = document.createElement("option");
                option.value = subraza;
                option.textContent = subraza;
                subrazaSelect.appendChild(option);
              });
            }
          })
          .catch(err => console.error("Error cargando subrazas:", err));
      });


      btnMostrar.addEventListener("click", () => {
        const raza = razaSelect.value;
        const subraza = subrazaSelect.value;

        if (!raza) {
          alert("Por favor selecciona una raza primero 🐶");
          return;
        }

        let url = `https://dog.ceo/api/breed/${raza}/images`;
        if (subraza) {
          url = `https://dog.ceo/api/breed/${raza}/${subraza}/images`;
        }

        fetch(url)
          .then(res => res.json())
          .then(data => {
            imagenesDiv.innerHTML = "";
            data.message.slice(0, 12).forEach(imgUrl => {
              const img = document.createElement("img");
              img.src = imgUrl;
              imagenesDiv.appendChild(img);
            });
          })
          .catch(err => console.error("Error cargando imágenes:", err));
      });

    });
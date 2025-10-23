export function cargarSubrazas() {
  const breedSelect = document.getElementById("breedSelect");
  const dogsContainer = document.getElementById("dogs");

  if (!breedSelect || !dogsContainer) {
    console.error("Missing HTML elements. Make sure 'breedSelect' and 'dogs' exist.");
    return;
  }

  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => {
      const breeds = data.message;
      let options = "";

      for (let breed in breeds) {
        const subBreeds = breeds[breed];
        if (subBreeds.length > 0) {
          subBreeds.forEach((sub) => {
            options += `<option value="${breed}/${sub}">${breed} (${sub})</option>`;
          });
        } else {
          options += `<option value="${breed}">${breed}</option>`;
        }
      }

      breedSelect.innerHTML = options;
    });

  breedSelect.addEventListener("change", function () {
    const selected = breedSelect.value;

    fetch(`https://dog.ceo/api/breed/${selected}/images/random/10`)
      .then((response) => response.json())
      .then((data) => {
        const images = data.message;
        let html = "";

        images.forEach((img) => {
          html += `
            <div style="border:1px solid gray; padding:10px; margin:10px; width:200px; display:inline-block; text-align:center;">
              <img src="${img}" alt="dog" style="width:100%; height:150px; object-fit:cover;">
              <p>${selected}</p>
            </div>
          `;
        });

        dogsContainer.innerHTML = html;
      });
  });
}

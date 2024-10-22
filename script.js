async function buscarPersonaje() {
    const characterId = document.getElementById("personajeId").value;
    if (characterId === ""){
        alert("Por favor ingresa un ID de personaje");
        return;
    } 

    try {
        const response = await fetch(
            `https://rickandmortyapi.com/api/character/${characterId}`
        )

        if(!response.ok){
            throw new Error("Personaje no encontrado");

        }

        const data = await response.json();


        const characterCard = document.getElementById("personaje");

        characterCard.style.display = "block";

        characterCard.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.image}" alt="${data.name}"/>
            <p><strong>Estado: </strong>${data.status}</p>
            <p><strong>Especie: </strong>${data.species}</p>
            <p><strong>Género: </strong>${data.gender}</p>
            <p><strong>Origen: </strong>${data.origin.name}</p>
        `;

    } catch (error) {
        console.error("Error", error)
        const characterCard = document.getElementById("personaje");
        characterCard.style.display = "block";
        characterCard.innerHTML = "<p>No se encontró el personaje</p>";
    }
}

document.getElementById("buscarBtn").addEventListener("click", buscarPersonaje);
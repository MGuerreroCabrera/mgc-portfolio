import "./Card.css";


// Crear la función que devuelve una card

export const Card = (title, description, imgSrc, altImg, urlProject) => {
    
    // Crear div contenedor de la card <article>
    const card = document.createElement("article");
    card.className = "card";
    // Crear el título de la card <h3>
    const h2 = document.createElement("h2");
    h2.textContent = title;
    // Inyectar el título a la card
    card.appendChild(h2);
    // Crear la descripción de la card <p>
    const p = document.createElement("p");
    p.textContent = description;
    // Inyectar la descripción a la card
    card.appendChild(p);
    // Crear contenedor de la imagen    
    const divImgContainer = document.createElement("div");
    divImgContainer.className = "img-container";
    // Crear la imagen <img>
    const imgCard = document.createElement("img");
    imgCard.src = imgSrc;
    imgCard.alt = altImg;
    // Inyectar la imagen en el contenedor de la imagen
    divImgContainer.appendChild(imgCard);
    // Inyectar el contenedor de la imagen a la card
    card.appendChild(divImgContainer);
    // Crear elemento bottom card para "ir al proyecto" <a>
    const a = document.createElement("a");
    a.href = urlProject;
    a.textContent = "+ ver más";
    a.addEventListener("click", () => {
        alert("Estos proyectos son un ejemplo. Pronto proyectos reales 🚀")
    });
    // Inyectar enlace a la card
    card.appendChild(a);
    // Devolver la card
    return card;

}
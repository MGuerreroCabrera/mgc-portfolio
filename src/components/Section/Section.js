import "./Section.css";

// Crear la función que devuelve una Section
//* Recibe por parámetro el título de la sección, el id de la sección y la clase
export const Section = (title, sectionId, sectionClass) => {

    // Crear el elemento HTML section con el id recibido por parámetro
    const section = document.createElement("section");
    // Indicar el id
    section.id = sectionId;
    // Indicar la clase
    section.className = sectionClass;
    // Crear título de la sección
    const sectionTitle = document.createElement("h2");
    sectionTitle.className = "section-title";
    sectionTitle.textContent = title;
    // Inyectar el título en la sección
    section.appendChild(sectionTitle);
    // Devolver la section
    return section;

}
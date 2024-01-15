import "./Section.css";

// Crear la función que devuelve una Section
export const Section = (sectionId, sectionClass) => {

    // Crear el elemento HTML section con el id recibido por parámetro
    const section = document.createElement("section");
    // Indicar el id
    section.id = sectionId;
    // Indicar la clase
    section.className = sectionClass;
    // Devolver la section
    return section;

}
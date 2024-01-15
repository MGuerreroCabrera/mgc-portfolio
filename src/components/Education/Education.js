import "./Education.css";

// Crear la función que devuelve la capa con el contenido de la formación
export const Education = (section) => {

    // Crear la capa contenedora de la info Formación
    const divEducation = document.createElement("div");
    divEducation.id = "education-container";
    // Crear elemento subtítulo
    const h2Education = document.createElement("h2");
    h2Education.textContent = "Formación";
    // Crear elemento subtítulo pequeño
    const h3Education = document.createElement("h3");
    h3Education.textContent = "Ingeniero Técnico de desarrollo de Software por Escuela de Sistemas Informáticos";
    // Crear el párrafo con datos de la fecha
    const pData = document.createElement("p");
    pData.textContent = "Mallorca 2005";
    // Inyectar contenido a la capaFormación
    divEducation.appendChild(h2Education);
    divEducation.appendChild(h3Education);
    divEducation.appendChild(pData);
    // Inyectar capaFormacion a la section creada
    section.appendChild(divEducation);

    // Devolver la section
    return section;

}
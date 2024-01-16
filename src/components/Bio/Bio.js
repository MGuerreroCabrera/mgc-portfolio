import "./Bio.css";

// Crear la función que devuelve la capa con el contenido de la formación
export const Bio = (section) => {

    // Crear capa contenedora de los botones
    const divButtonsContainer = document.createElement("div");
    divButtonsContainer.id = "buttons-container";
    // Crear botones Formación y experiencia
    const btEducation = document.createElement("button");
    btEducation.textContent = "Formación";
    // Añadir id para poder recogerlo y hacer funcionalidad muestra - oculta capa
    btEducation.id = "bt-education";
    // Añadir la clase activo - inactivo
    btEducation.className = "bt-enabled";
    const btExperience = document.createElement("button");    
    btExperience.textContent = "Ver Experiencia";
    // Añadir id para poder recogerlo y hacer funcionalidad muestra - oculta capa
    btExperience.id = "bt-experience";
    // Añadir la clase activo - inactivo
    btExperience.className = "bt-disabled";
    // Añadir botones a la capa
    divButtonsContainer.appendChild(btEducation);
    divButtonsContainer.appendChild(btExperience);
    // Añadir capa a la sección    
    section.appendChild(divButtonsContainer);

    // CAPA CONTENEDORA DE FORMACIÓN
    const divEducationContainer = document.createElement("div");
    divEducationContainer.id = "education-container";
    divEducationContainer.className = "info-container";
    // Crear elemento subtítulo pequeño
    const h3Education = document.createElement("h3");
    h3Education.textContent = "Ingeniero Técnico de desarrollo de Software por la Escuela de Sistemas Informáticos";
    // Crear el párrafo con datos de la fecha
    const pData = document.createElement("p");
    pData.textContent = "Mallorca 2005";
    // Crear elemento "Otra formación de interés"
    const h3Others = document.createElement("h3");
    // Crear cursos interesantes
    const otherEducationList = document.createElement("ul");
    otherEducationList.innerHTML = `
        <li>Full Stack Developer by ThePowerMBA 2024</li>
    `;
    h3Others.textContent = "Otros cursos interesantes ...";
    // Inyectar elementos en el divEducationContainer
    divEducationContainer.appendChild(h3Education);
    divEducationContainer.appendChild(pData);
    divEducationContainer.appendChild(h3Others);
    divEducationContainer.appendChild(otherEducationList);
    // Inyectar educación a la section
    section.appendChild(divEducationContainer);
   
        

    // Devolver la section
    return section;

}
/*
// Crear la capa contenedora de la info Formación
const divEducation = document.createElement("div");
divEducation.id = "education-container";
// Crear capa para la cabecera con efecto mostrar - ocultar capa
const headerContainer = document.createElement("div");
headerContainer.className = "header-container";    
// Crear elementos subtítulos
const h2Education = document.createElement("h2");
h2Education.textContent = "Formación";
// Añadir id para poder recogerlo y hacer funcionalidad muestra - oculta capa
h2Education.id = "bt-education";
// Añadir la clase activo - inactivo
h2Education.className = "bt-enabled";
const h2Experience = document.createElement("h2");    
h2Experience.textContent = "Ver Experiencia";
// Añadir id para poder recogerlo y hacer funcionalidad muestra - oculta capa
 h2Experience.id = "bt-experience";
// Añadir la clase activo - inactivo
 h2Experience.className = "bt-disabled";
// Inyectar elementos h2 en el div headerContainer
headerContainer.appendChild(h2Education);
headerContainer.appendChild(h2Experience);
// Crear elemento subtítulo pequeño
const h3Education = document.createElement("h3");
h3Education.textContent = "Ingeniero Técnico de desarrollo de Software por la Escuela de Sistemas Informáticos";
// Crear el párrafo con datos de la fecha
const pData = document.createElement("p");
pData.textContent = "Mallorca 2005";
// Crear elemento "Otra formación de interés"
const h2Others = document.createElement("h3");
// Crear cursos interesantes
const otherEducationList = document.createElement("ul");
otherEducationList.innerHTML = `
    <li>Full Stack Developer by ThePowerMBA 2024</li>
`;
h2Others.textContent = "Otros cursos interesantes ...";
// Inyectar contenido a la capaFormación
divEducation.appendChild(headerContainer);
divEducation.appendChild(h3Education);
divEducation.appendChild(pData);
divEducation.appendChild(h2Others);
divEducation.appendChild(otherEducationList);
// Inyectar capaFormacion a la section creada
section.appendChild(divEducation);
*/
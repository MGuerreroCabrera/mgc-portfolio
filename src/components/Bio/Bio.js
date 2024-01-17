import "./Bio.css";

const experience = [
    {
        duration: "2009 - Actualidad",
        title: "Asesor de Startups en Fundació Balear d'Innovació y Tecnologia.",
        description: "Acompañamiento dando soporte y apoyo a StartUps en el diseño y validación de modelos de negocio, búsqueda de financiación y búsqueda de partners."
    },
    {
        duration: "2007 - 2009",
        title: "Freelace",
        description: "Desarrollador web Freelance. Entre otros, desarrollos en el sector salud y promoción inmobiliaria."
    },
    {
        duration: "2006 - 2007",
        title: "Responsable del Dpto. de Internet en la Recaudación de Tributos Autonómicos.",
        description: "Diseño y desarrollo del primer portal de las Islas Baleares con capacidad del cobro de tributos on-line."
    },
    {
        duration: "2004 - 2006",
        title: "HP - Consultor senior en Hospital Son Llatzer.",
        description: "Responsable del desarrollo de aplicaciones informáticas para centros de salud y desarrollador de procedimientos para áreas de UCI, Admisión de Urgencias y Traumatología."
    }
];

const showHide = () => {

    // Seleccionar todos los elementos a tratar
    const btEducation = document.querySelector("#bt-education");
    const btExperience = document.querySelector("#bt-experience");
    const divEducation = document.querySelector("#education-container");
    const divExperience = document.querySelector("#experience-container");

    // Comprobar elementos activos
    if(btExperience.classList.contains("bt-disabled") && divExperience.classList.contains("disabled")) {
        console.log("activando experiencia");
        btExperience.classList.remove("bt-disabled");
        btExperience.classList.add("bt-enabled");
        btEducation.classList.remove("bt-enabled");
        btEducation.classList.add("bt-disabled");
        divEducation.classList.add("disabled");
        divExperience.classList.remove("disabled");
    }else{
        console.log("activando formación");
        divExperience.classList.add("disabled");
        divEducation.classList.remove("disabled");
        btEducation.classList.remove("bt-disabled");
        btEducation.classList.add("bt-enabled");
        btExperience.classList.remove("bt-enabled");
        btExperience.classList.add("bt-disabled");
    }

}

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
    btEducation.addEventListener("click", showHide);
    const btExperience = document.createElement("button");    
    btExperience.textContent = "Experiencia";
    // Añadir id para poder recogerlo y hacer funcionalidad muestra - oculta capa
    btExperience.id = "bt-experience";
    // Añadir la clase activo - inactivo
    btExperience.className = "bt-disabled";
    //********** */

    btExperience.addEventListener("click", showHide);

    //********** */
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

    // CAPA CONTENEDORA DE LA EXPERIENCIA PROFESIONAL
    const divExperienceContainer = document.createElement("div");
    divExperienceContainer.id = "experience-container";
    divExperienceContainer.className = "experience-container";
    divExperienceContainer.classList.add("disabled");
    // Obtener datos del array experience
    const durations = experience.map((element) => {
        return element.duration;
    });
    const titles = experience.map((element) => {
        return element.title;
    });
    const descriptions = experience.map((element) => {
        return element.description;
    });

    // Crear el listado de capas contenedoras de las experiencias
    for(let i = 0; i < experience.length; i++) {

        // Crear la capa para cada experiencia
        const divExperice = document.createElement("div");
        // Asignar clase a la capa
        divExperice.className = "div-experience";
        // Crear la duración
        const duration = document.createElement("h2");
        duration.textContent = durations[i];
        // Inyectar la duración
        divExperice.appendChild(duration);
        // Crear el título
        const title = document.createElement("h3");
        title.textContent = titles[i];
        // Inyectar el títtulo
        divExperice.appendChild(title);
        // Crear la descripción
        const description = document.createElement("p");
        description.textContent = descriptions[i];
        // Inyectar la descripción
        divExperice.appendChild(description);
        // Añadir la capa con la información al divExperienceContainer
        divExperienceContainer.appendChild(divExperice);

    }

    section.appendChild(divExperienceContainer);

    // Devolver la section
    return section;

}
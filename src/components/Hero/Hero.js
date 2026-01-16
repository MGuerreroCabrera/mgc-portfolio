import "./Hero.css";

// Definir array de objetos para las skills
const skills = [
    {
        skill: "HTML5",
        acquired: true
    },
    {
        skill: "CSS3",
        acquired: true
    },
    {
        skill: "JAVASCRIPT",
        acquired: true
    },
    {
        skill: "NODE",
        acquired: true
    },
    {
        skill: "MONGO",
        acquired: true
    },
    {
        skill: "REACT",
        acquired: true
    },
    {
        skill: "GIT",
        acquired: true
    }
];

// Crear la función que devuelve el Hero
export const Hero = () => {

    // Crear el fondo del hero
    const hero = document.createElement("div");
    hero.id = "hero";

    // Crear capa contenedora del Hero
    const divContainer = document.createElement("div");
    divContainer.id = "div-hero-container";

    // Crear el contenedor para la parte izquierda 
    const divLeftContainer = document.createElement("div");
    divLeftContainer.id = "div-left-hero-container";

    // Crear el h1 y h2 para el contendor izquierdo
    const h1 = document.createElement("h1");
    // h1.textContent = "Hola 👋, soy Manuel Guerrero Cabrera";
    h1.innerHTML = 'Hola <span class="wave">👋</span>, soy Manuel Guerrero Cabrera';
    const h2 = document.createElement("h2");
    h2.textContent = "Experto en diseño y desarrollo de MVP para Startups.";

    // Inyectar contenido al contenedor izquierdo
    divLeftContainer.appendChild(h1);
    divLeftContainer.appendChild(h2);

    // Crear el contenedor izquierdo
    const divRightContainer = document.createElement("div");
    divRightContainer.id = "div-right-hero-container";

    // Crear lista con elementos skills
    const ul = document.createElement("ul");
    ul.id = "skills";

    // Obtener elementos del array de skills
    const namesSkills = skills.map((element) => {
        return element.skill;
    });
    const acquireds = skills.map((element) => {
        return element.acquired;
    });

    for(let i = 0; i < skills.length; i++) {

        // Crear elemento HTML li
        let li = document.createElement("li");
        // Añadir el texto del elemento HTML li
        li.textContent = namesSkills[i];
        // Comprobar si se ha adquirido la habilidad y asignar clase
        (acquireds[i]) ? li.className = "acquired" : li.className = "not-acquired";
        // Inyectar el li al ul
        ul.appendChild(li);
    }

    divRightContainer.appendChild(ul);

    divContainer.appendChild(divLeftContainer);
    divContainer.appendChild(divRightContainer);

    hero.appendChild(divContainer);

    return hero;
    
}
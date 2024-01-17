import "./Footer.css";

const rrssContainer = [
    {
        url: "https://twitter.com/manu_gc",
        title: "Ver mi twitter",
        imgPath: "./assets/img/twitter.png",
        alt: "Logo twitter"
    },
    {
        url: "https://github.com/MGuerreroCabrera",
        title: "Ver mi GitHub",
        imgPath: "./assets/img/github.png",
        alt: "Logo GitHub"
    },
    {
        url: "https://www.linkedin.com/in/manuel-guerrero-cabrera-43580510/",
        title: "Ver mi perfil",
        imgPath: "./assets/img/linkedin.png",
        alt: "Logo Linkedin"
    }
];

// Crear la función que devuelve el footer
export const Footer = () => {

    // Crear el elemento HTML footer
    const footer = document.createElement("footer");
    // Añadir id al elemento
    footer.id = "footer";
    // Añadir contenido
    // Crear elemento div que contendrá los iconos de las redes
    const divRRSSContainer = document.createElement("div");
    // Añadir la clase
    divRRSSContainer.className = "rrss-container";
    // Recoger los valores del array
    const urls = rrssContainer.map((element) => {
        return element.url;
    });
    const titles = rrssContainer.map((element) =>{
        return element.title;
    });
    const imgPaths = rrssContainer.map((element) => {
        return element.imgPath;
    });
    const alts = rrssContainer.map((element) => {
        return element.alt;
    });
    
    // Recorrido de objetos para ir creando los elementos
    for(let i = 0; i< rrssContainer.length; i++) {

        // Crear elementos HTML a y img
        const linkElement = document.createElement("a");
        const imgElement = document.createElement("img");
        // Asignar valores a los elementos creados
        linkElement.href = urls[i];
        linkElement.title = titles[i];
        linkElement.target = "_blank";
        imgElement.src = imgPaths[i];
        imgElement.alt = alts[i];
        // Inyectar elemento img en el elemento a
        linkElement.append(imgElement);
        // Inyectar elemento link con el icono al divRRSSContainer
        divRRSSContainer.appendChild(linkElement);
        
    }

    // Inyectar el elemento HTML div al footer
    footer.appendChild(divRRSSContainer);

    // Crear el párrafo del pie
    const p = document.createElement("p");
    p.innerHTML = `© 2024 - Progresando en mi evolución como <span class="special-footer-txt">Full Stack Developer</span>`;
    // Inyectar el párrafo en el footer
    footer.appendChild(p);

    // Devolver el footer
    return footer;

}
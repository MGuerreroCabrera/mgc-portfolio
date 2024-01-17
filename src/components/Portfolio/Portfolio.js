import { Card } from "../Card/Card";
import "./Portfolio.css";

// Crear el Array con los datos de cada proyecto
const projects = [
    {
        title: "Social Network",
        description: "Red social para grupos de excursionistas extremos creada en el año 2021.",
        imgSrc: "./assets/img/red-social.jpg",
        altImg: "Imagen red social", 
        urlProject: "#"
    },
    {
        title: "Blog",
        description: "Blog de tecnología y tendencias digitales creado en 2022.",
        imgSrc: "./assets/img/blog.jpg",
        altImg: "Imagen del blog", 
        urlProject: "#"
    },
    {
        title: "E-Commerce",
        description: "Tienda on-line de productos especializados para mascotas creada en 2020.",
        imgSrc: "./assets/img/e-commerce.jpg",
        altImg: "Imagen tienda on-line", 
        urlProject: "#"
    }
];

// Crear la funcion que devuelve el portfolio

export const Porfolio = () => {

    // Crear la capa contenedora de la sección
    const cardsContainer = document.createElement("div");
    cardsContainer.id = "cards-container";

    // Recoger los datos del array de proyectos
    const titles = projects.map((element) => {
        return element.title;
    });
    const descriptions = projects.map((element) => {
        return element.description;
    });
    const imgSrcs = projects.map((element) => {
        return element.imgSrc;
    });
    const altsImg = projects.map((element) => {
        return element.altImg;
    });
    const urlProjects = projects.map((element) => {
        return element.urlProject;
    });

    // Recorrer los elementos del array proyectos y crear cada card
    for(let i = 0; i < projects.length; i++) {

        // Crear la card usando componente Card
        const card = Card(titles[i], descriptions[i], imgSrcs[i], altsImg[i], urlProjects[i]);
        // Inyectar la card obtenida en el cardsContainer
        cardsContainer.appendChild(card);        

    }

    // Devolver el cardsContainer
    return cardsContainer;

}
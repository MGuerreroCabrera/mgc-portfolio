import { Hero } from "../Hero/Hero";
import "./Main.css";

// Crear función que devuelve el componente Main
export const Main = () => {

    // Crear elemento HTML main
    const main = document.createElement("main");
    main.id = "main";
    
    // Añadir hero
    const hero = Hero();
    main.appendChild(hero);

    // Devolver el main
    return main;
}
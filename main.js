import { Education } from './src/components/Education/Education';
import { Footer } from './src/components/Footer/Footer';
import { Header } from './src/components/Header/Header';
import { HorizontalList } from './src/components/HorizontalList/HorizontalList';
import { Main } from './src/components/Main/Main';
import { Section } from './src/components/Section/Section';
import './style.css';

const divApp = document.querySelector("#app");

// Crear elemento Header
const header = Header();

// Crear elemento HorizontalList
const navMenu = HorizontalList();
// Añadir al header el namMenu
header.appendChild(navMenu);

// Pintar el header
divApp.appendChild(header);

// Crear elemento main e inyectarlo en el DOM
const main = Main();
divApp.appendChild(main);

// Crear la sección para experiencia y formación
let bioSection = Section("bio", "generic-section");

// Crear la capa con el contenido de la formación
bioSection = Education(bioSection);


// Inyectar elemento HTML bio al DOM
divApp.appendChild(bioSection);



// Crear elemento footer e inyectarlo en el DOM
const footer = Footer();
divApp.appendChild(footer);

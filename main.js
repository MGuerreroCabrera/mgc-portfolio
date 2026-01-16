import { Bio } from './src/components/Bio/Bio';
import { Footer } from './src/components/Footer/Footer';
import { Header } from './src/components/Header/Header';
import { HorizontalList } from './src/components/HorizontalList/HorizontalList';
import { Main } from './src/components/Main/Main';
import { Porfolio } from './src/components/Portfolio/Portfolio';
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
let bioSection = Section("Bio", "bio", "generic-section");

// Crear la capa con el contenido de la formación
bioSection = Bio(bioSection);

// Inyectar elemento HTML bio al DOM
divApp.appendChild(bioSection);

// Crear la sección para el portfolio
let portfolio = Section("Portfolio", "portfolio", "generic-section");

// Crear el contenido del portfolio
const contentPorfolio = Porfolio();

// Inyectar el contenido del porfolio a la sección
portfolio.appendChild(contentPorfolio);

// Inyectar portfolio al DOM
//divApp.appendChild(portfolio);

// Crear elemento footer e inyectarlo en el DOM
const footer = Footer();
divApp.appendChild(footer);

import { Footer } from './src/components/Footer/Footer';
import { Header } from './src/components/Header/Header';
import { HorizontalList } from './src/components/HorizontalList/HorizontalList';
import { Main } from './src/components/Main/Main';
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


// Crear elemento footer e inyectarlo en el DOM
const footer = Footer();
divApp.appendChild(footer);

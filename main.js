import { Header } from './src/components/Header/Header';
import { HorizontalList } from './src/components/HorizontalList/HorizontalList';
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



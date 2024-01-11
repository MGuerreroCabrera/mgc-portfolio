import { Header } from './src/components/Header/Header';
import './style.css';

const divApp = document.querySelector("#app");

// Crear elemento Header
const header = Header();

// Pintar el header
divApp.appendChild(header);

import "./Header.css";

// Crear función que devuelve un Header para pintar en el DOM
export const Header = () => {

    // Crear elemento HTML Header
    const header = document.createElement("header");
    header.id = "app-header";
    // Devolver elemento Header
    return header;

}
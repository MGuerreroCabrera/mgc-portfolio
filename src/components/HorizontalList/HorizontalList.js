import "./HorizontalList.css";

const optionsMenu = [
    {
        url: '#bio',
        textcontent: 'Bio',
        title: 'Bio'
    },
    {
        url: '#',
        textcontent: 'Portfolio',
        title: 'Portfolio'
    },
    {
        url: '#',
        textcontent: 'Contáctame',
        title: 'Contacto'
    }
];

export const HorizontalList = () => {

    // Crear elemento ul
    const ul = document.createElement("ul");
    // Incluir el id nav-menu al elemento
    ul.id = "nav-menu";
    // Obtener valores del array de objetos optionsMenu creando un li con una a para cada elemento y añadirlo a la lista    
    const aUrl = optionsMenu.map((a) => {
        return a.url;
    });
    const aTextContent = optionsMenu.map((a) => {
        return a.textcontent;
    });
    const aTitle = optionsMenu.map((a) => {
        return a.title;
    });

    // Crear los elementos li e incluir los elementos a
    for(let i = 0; i < optionsMenu.length; i++){
        
        // Crear elemento li
        const li = document.createElement("li");
        // Crear elemento a
        const aHTML = document.createElement("a");
        aHTML.href = aUrl[i];
        aHTML.title = aTitle[i];
        aHTML.textContent = aTextContent[i];
        // Inyectar elemento a en el li
        li.appendChild(aHTML);
        // Inyectar el elemento li al ul
        ul.appendChild(li);

    }
    
    // Devolver el ul con los li
    return ul;

}

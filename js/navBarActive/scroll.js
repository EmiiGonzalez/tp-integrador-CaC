const sections = document.querySelectorAll("section");
const navLink = document.querySelectorAll(".nav-link");

export const scrollControl = () =>{
    window.onscroll = () =>{
        sections.forEach( section => {
            let desplazado = window.scrollY;
            let distancia = section.offsetTop - 90;
            let alturaElemento = section.offsetHeight;
            let id = section.getAttribute("id");
            //controlo si lo desplazado esta dentro del section
            const control = (desplazado >= distancia) && (desplazado < distancia + alturaElemento)
            
            if(control){
                navLink.forEach(link => {
                    if (!link.classList.contains("tickets-color") && !link.classList.contains("nav-color-orador")){
                        link.classList.remove("active");
                        link.classList.add("nav-color-link")
                        document.querySelector(`.nav-item a[href*=${id}]`).classList.add("active")
                    }
                })
            }
        })
        const header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY>100);

    }
}
export const revelar = () =>{

    ScrollReveal({ 
        distance: "80px",
        duration: 1500,
        delay: 150
    });
    
    ScrollReveal().reveal('#cabecera', { origin: "top" });
    ScrollReveal().reveal('#carrusel', {origin: "top"});
    ScrollReveal().reveal('#oradores', {origin: "left"});
    ScrollReveal().reveal('#bsas', {origin: "bottom"});
    ScrollReveal().reveal('#footer', {origin: "left"});
}
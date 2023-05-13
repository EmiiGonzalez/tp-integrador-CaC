export const validar = (input) =>{
    const elemento = input.target;
    const valorElemento = elemento.value.trim().length;
    const largoBoolean = valorElemento >= 3 && valorElemento <= 25
    const tipoDeInput = elemento.dataset.tipo;
    const span = elemento.nextElementSibling;
    console.log(elemento.validity.valid && largoBoolean);
    if(elemento.validity.valid && largoBoolean){
        elemento.classList.remove("campo-error")
        span.classList.remove("error")
        span.innerText  = "";
        console.log("entro");
    }else {
        elemento.classList.add("campo-error")
        span.classList.add("error")
        span.innerText  = mostrarMensajeDeError(tipoDeInput, elemento);
        elemento.setCustomValidity(mensajesDeError[tipoDeInput].errorPersonalizado)
        console.log("no entro");
    }
}

const tipoDeErrores = ["valueMissing", "typeMismatch"];

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacio",
        errorPersonalizado: "El nombre debe ser mayor a 3 letras y menor a 25"
    },
    email: {
        valueMissing: "El campo correo no puede estar vacio",
        errorPersonalizado: "El correo ingresado no es valido",
        typeMismatch: "El formato del correo no es valido"
    }
};

const mostrarMensajeDeError = (tipoDeInput, input) =>{
    let mensaje = "";
    tipoDeErrores.forEach(error => {
        if (input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error]
        }
    })   
    return mensaje;
}
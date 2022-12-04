const precio = document.querySelector('#precio');
const descuento= document.querySelector('#descuento');
const calcular = document.querySelector('#calcular');
const resultado = document.querySelector('#resultado');

    calcular.addEventListener('click', calcularDescuento);

function calcularDescuento(){
    const precioP = precio.value;
    const descuentoP = descuento.value;

    const nuevoPrecio = (precioP * (100 - descuentoP)) / 100;

    if(!precioP || !descuentoP){
        alert('Error, por favor agregar algún dígito');
    }
    else if(descuentoP > 0 && descuentoP  <= 100){
        resultado.innerText = `Precio final: ${nuevoPrecio}`;
    }
    else{
        resultado.innerText = 'Error, solo puedes calcular un porcentaje menor a 100'
    }

}

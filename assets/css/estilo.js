var light = document.querySelector(".light");
light.style.animation = "move 05s linear infinite";
function fadeOutLight() {
    light.classList.add("fade-out");
    setTimeout(function(){
        light.classList.remove("fade-out")
    },500);
}

setInterval(fadeOutLight, 1000);
/*Este código utiliza la propiedad CSS transition para definir una transición de 0,5 segundos
en la propiedad opacity de la clase "light", lo que permite que el elemento desvanezca suavemente
al agregar la clase "fade-out". El javascript agrega y quita la clase "fade-out" cada segundo.
Ten en cuenta que debes añadir el elemento con la clase "light" en tu HTML para que pueda ser seleccionado
por el código JavaScript. Además, puedes modificar el tiempo de transición para adaptarlo a tus necesidades específicas.
Es importante mencionar que para que el efecto sea visto en ambas puntas, debes aplicar el mismo efecto en ambos extremos de la luz. */
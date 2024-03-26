let gen1 = document.getElementById('gen-1')

console.log(document.title);

console.log(document.body);

//Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
console.log(gen1);
gen1.innerText = 'Generasión 1 Pokimon';

//Cambia el color de fondo de la primera generación de Pokimon.
const color = document.querySelectorAll('.infocard-list')
console.log(color);
const info = color[0].querySelectorAll('.infocard')
console.log(info);
info.forEach(info => {
    info.style.background = 'red'
});


//imprime por consola la URL de la página.
//Imprime por consola el dominio de la página.

const url = document.URL;

console.log(url);

const dominio = document.domain;
console.log(dominio)

//Imprime todos los nodos de imagen.
const imgs = document.getElementsByTagName('img')
console.log(imgs)

//Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

//El Gif sale de forma RANDOM.

let imagen = document.querySelectorAll('img');

for(let i = 0; i < imagen.length; i++) {
    imagen[i].addEventListener('click', function(){
        cambiarGIF(imagen[i])
    })
}
function cambiarGIF(image) {
    let random = Math.floor(Math.random() * 6) + 1;
    image.src = `https://media.giphy.com/media/2v170e71aanfi/giphy.gif`
}

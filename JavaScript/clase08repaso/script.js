let productoElegido;

class Producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

const fideos = new Producto(1, "golosinas", 200);
const arroz = new Producto(2, "arroz", 300);
const queso = new Producto(3, "queso", 500);
const polenta = new Producto(4, "polenta", 350);

const productos = [fideos, arroz, queso, polenta];

const carrito = [];

let container = document.querySelector(".container");

const saludar = () => {
  alert("Bienvenido al Kiosko 24hs");
  let nombre = prompt("Ingrese su nombre:");
  while (nombre === "" || !isNaN(parseInt(nombre))) {
    nombre = prompt("Ingrese su nombre:");
  }
  container.innerHTML = `<h1>Bienvenido ${nombre}</h1>`;
};

const consultarProductos = () => {
  let texto = "";
  for (const p of productos) {
    texto += `${p.id}) ${p.nombre}\n`;
  }
  let prod = parseInt(prompt(`Que producto llevara?\n ${texto}`));

  while (prod < 1 || prod > 4 || isNaN(prod)) {
    prod = parseInt(prompt(`Que producto l
consultarProductos();

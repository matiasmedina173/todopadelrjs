const productos = [
  {
    id: "1",
    nombre: "Paleta Adidas",
    precio: 249999,
    img: "../img/paletaadidas.webp",
    idCat: "2",
  },
  {
    id: "2",
    nombre: "Paleta BullPadel",
    precio: 219999,
    img: "../img/paletabullpadel.webp",
    idCat: "2",
  },
  {
    id: "3",
    nombre: "Paleta Royal Padel",
    precio: 149999,
    img: "../img/paletaroyal.webp",
    idCat: "2",
  },
  {
    id: "4",
    nombre: "Paleta NOX",
    precio: 69999,
    img: "../img/paleta nox.webp",
    idCat: "2",
  },
  {
    id: "5",
    nombre: "Zapatillas Joma 1",
    precio: 74999,
    img: "../img/zapatillasjoma.webp",
    idCat: "3",
  },
  {
    id: "6",
    nombre: "Zapatillas Joma 2",
    precio: 79999,
    img: "../img/zapatillasjoma2.webp",
    idCat: "3",
  },
  {
    id: "7",
    nombre: "Zapatillas Joma 3",
    precio: 119999,
    img: "../img/zapatillasjoma3",
    idCat: "3",
  },
  {
    id: "8",
    nombre: "Bolso Adidas 1",
    precio: 119999,
    img: "../img/bolsoadidas.webp",
    idCat: "3",
  },
  {
    id: "9",
    nombre: "Bolso Adidas 2",
    precio: 199999,
    img: "../img/bolsoadidas2.webp",
    idCat: "3",
  },
  {
    id: "10",
    nombre: "Bolso Adidas 3",
    precio: 99999,
    img: "../img/bolsoadidas3.webp",
    idCat: "3",
  },
  {
    id: "11",
    nombre: "Bolso Adidas 4",
    precio: 99999,
    img: "../img/bolsoadidas4.webp",
    idCat: "3",
  },
  {
    id: "12",
    nombre: "Paleta Siux",
    precio: 179999,
    img: "../img/paletasiux.webp",
    idCat: "2",
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 100);
  });
};

//Funcion que retorne un solo Item
export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productos.find((prod) => prod.id === id);
      resolve(producto);
    }, 100);
  });
};

//Funcion que retorne la categoria

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosCategoria = productos.filter(
        (prod) => prod.idCat === idCategoria
      );
      resolve(productosCategoria);
    }, 100);
  });
};

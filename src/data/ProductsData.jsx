export const items = [
    {
        id:1,
        titulo:"Torta especial",
        variedad:"1kg, Vainilla",
        precio:25,
        imgUrl:"https://res.cloudinary.com/carlosshmc/image/upload/v1626984428/Regalarte/IMG-20200227-WA0032-01_ylqfoz.jpg",
        qty:1
    },
    {
        id:2,
        titulo:"Brownies",
        variedad:"Pack 8 Uunidades",
        precio:10,
        imgUrl:"https://res.cloudinary.com/carlosshmc/image/upload/v1626985089/Regalarte/IMG-20201219-WA0031-01_ggyg37.jpg",
        qty:2
    },
    {
        id:3,
        titulo:"Pasapalos",
        variedad:"Pack 60 piezas",
        precio:15,
        imgUrl:"https://res.cloudinary.com/carlosshmc/image/upload/v1626987046/Regalarte/IMG-20201024-WA0025-01_n0aj3k.jpg",
        qty:3
    },
    {
        id:4,
        titulo:"Mini donas",
        variedad:"Pack 12 unidades",
        precio:12,
        imgUrl:"https://res.cloudinary.com/carlosshmc/image/upload/v1626985087/Regalarte/df095418-07fd-442c-8a04-008404604d73-01_esntcf.jpg",
        qty:1
    },
]

export async function DolarData() {
    try {
      const response = await fetch("https://s3.amazonaws.com/dolartoday/data.json");
      const data = await response.json();
      return data.USD.promedio; // muestra la información obtenida en la consola
    } catch (error) {
      console.error(error); // muestra el error en la consola
    }
  }
  
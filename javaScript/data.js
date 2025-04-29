let productos = [];

if (localStorage.getItem('productos')) {
    productos = JSON.parse(localStorage.getItem('productos'));
} else {
    productos = [
        {
            nombre: "Rosa Roja",
            categoria: "Rosas",
            imagen: "rosa1.jpg",
            codigo: "RR01ab23",
            precio: 25000,
            color: "Rojo",
            tamaño: "Mediano"
        },
        {
            nombre: "Tulipán Amarillo",
            categoria: "Tulipanes",
            imagen: "tulipan1.jpg",
            codigo: "TA02bc34",
            precio: 22000,
            color: "Amarillo",
            tamaño: "Pequeño"
        },
        {
            nombre: "Orquídea Blanca",
            categoria: "Orquídeas",
            imagen: "orquidea1.jpg",
            codigo: "OB03cd45",
            precio: 40000,
            color: "Blanco",
            tamaño: "Grande"
        },
        {
            nombre: "Lirio Azul",
            categoria: "Lirios",
            imagen: "lirio1.jpg",
            codigo: "LA04de56",
            precio: 28000,
            color: "Azul",
            tamaño: "Mediano"
        },
        {
            nombre: "Girasol Grande",
            categoria: "Girasoles",
            imagen: "girasol1.jpg",
            codigo: "GG05ef67",
            precio: 30000,
            color: "Amarillo",
            tamaño: "Grande"
        },
        {
            nombre: "Flor Especial 6",
            categoria: "Rosas",
            imagen: "flor6.jpg",
            codigo: "COD6ab54",
            precio: 27000,
            color: "Rosado",
            tamaño: "Pequeño"
        },
        {
            nombre: "Flor Especial 7",
            categoria: "Tulipanes",
            imagen: "flor7.jpg",
            codigo: "COD7ab87",
            precio: 23000,
            color: "Naranja",
            tamaño: "Mediano"
        },
        {
            nombre: "Flor Especial 8",
            categoria: "Orquídeas",
            imagen: "flor8.jpg",
            codigo: "COD8ab22",
            precio: 42000,
            color: "Morado",
            tamaño: "Grande"
        },
        {
            nombre: "Flor Especial 9",
            categoria: "Lirios",
            imagen: "flor9.jpg",
            codigo: "COD9ab45",
            precio: 29000,
            color: "Blanco",
            tamaño: "Pequeño"
        },
        {
            nombre: "Flor Especial 10",
            categoria: "Girasoles",
            imagen: "flor10.jpg",
            codigo: "COD10ab78",
            precio: 31000,
            color: "Amarillo",
            tamaño: "Mediano"
        },
        {
            nombre: "Flor Especial 11",
            categoria: "Rosas",
            imagen: "flor1.jpg",
            codigo: "COD11ab12",
            precio: 26000,
            color: "Rojo",
            tamaño: "Grande"
        },
        {
            nombre: "Flor Especial 12",
            categoria: "Tulipanes",
            imagen: "flor2.jpg",
            codigo: "COD12ab90",
            precio: 24000,
            color: "Rosa",
            tamaño: "Pequeño"
        },
        {
            nombre: "Flor Especial 13",
            categoria: "Orquídeas",
            imagen: "flor3.jpg",
            codigo: "COD13ab34",
            precio: 41000,
            color: "Blanco",
            tamaño: "Mediano"
        },
        {
            nombre: "Flor Especial 14",
            categoria: "Lirios",
            imagen: "flor4.jpg",
            codigo: "COD14ab67",
            precio: 27000,
            color: "Morado",
            tamaño: "Grande"
        },
        {
            nombre: "Flor Especial 15",
            categoria: "Girasoles",
            imagen: "flor5.jpg",
            codigo: "COD15ab23",
            precio: 32000,
            color: "Amarillo",
            tamaño: "Pequeño"
        },
        {
            nombre: "Flor Especial 16",
            categoria: "Rosas",
            imagen: "flor6.jpg",
            codigo: "COD16ab45",
            precio: 28000,
            color: "Rojo",
            tamaño: "Mediano"
        },
        {
            nombre: "Flor Especial 17",
            categoria: "Tulipanes",
            imagen: "flor7.jpg",
            codigo: "COD17ab78",
            precio: 25000,
            color: "Naranja",
            tamaño: "Grande"
        },
        {
            nombre: "Flor Especial 18",
            categoria: "Orquídeas",
            imagen: "flor8.jpg",
            codigo: "COD18ab12",
            precio: 43000,
            color: "Morado",
            tamaño: "Pequeño"
        },
        {
            nombre: "Flor Especial 19",
            categoria: "Lirios",
            imagen: "flor9.jpg",
            codigo: "COD19ab90",
            precio: 30000,
            color: "Blanco",
            tamaño: "Mediano"
        },
        {
            nombre: "Flor Especial 20",
            categoria: "Girasoles",
            imagen: "flor10.jpg",
            codigo: "COD20ab34",
            precio: 33000,
            color: "Amarillo",
            tamaño: "Grande"
        },
        {
            nombre: "Flor Especial 21",
            categoria: "Rosas",
            imagen: "flor1.jpg",
            codigo: "COD21ab67",
            precio: 29000,
            color: "Rosado",
            tamaño: "Pequeño"
        },
         {
            nombre: "Flor Especial 22",
            categoria: "Tulipanes",
            imagen: "flor2.jpg",
            codigo: "COD22ab23",
            precio: 26000,
            color: "Rosa",
            tamaño: "Mediano"
        },
        {
            nombre: "Flor Especial 23",
            categoria: "Orquídeas",
            imagen: "flor3.jpg",
            codigo: "COD23ab45",
            precio: 44000,
            color: "Blanco",
            tamaño: "Grande"
        },
        {
            nombre: "Flor Especial 24",
            categoria: "Lirios",
            imagen: "flor4.jpg",
            codigo: "COD24ab78",
            precio: 31000,
            color: "Morado",
            tamaño: "Pequeño"
        },
        {
            nombre: "Flor Especial 25",
            categoria: "Girasoles",
            imagen: "flor5.jpg",
            codigo: "COD25ab12",
            precio: 34000,
            color: "Amarillo",
            tamaño: "Mediano"
        },
        {
            nombre: "Flor Especial 26",
            categoria: "Rosas",
            imagen: "flor6.jpg",
            codigo: "COD26ab90",
            precio: 30000,
            color: "Rojo",
            tamaño: "Grande"
        },
        {
            nombre: "Flor Especial 27",
            categoria: "Tulipanes",
            imagen: "flor7.jpg",
            codigo: "COD27ab34",
            precio: 27000,
            color: "Naranja",
            tamaño: "Pequeño"
        },
        {
            nombre: "Flor Especial 28",
            categoria: "Orquídeas",
            imagen: "flor8.jpg",
            codigo: "COD28ab67",
            precio: 45000,
            color: "Morado",
            tamaño: "Mediano"
        },
        {
            nombre: "Flor Especial 29",
            categoria: "Lirios",
            imagen: "flor9.jpg",
            codigo: "COD29ab23",
            precio: 32000,
            color: "Blanco",
            tamaño: "Grande"
        },
        {
            nombre: "Flor Especial 30",
            categoria: "Girasoles",
            imagen: "flor10.jpg",
            codigo: "COD30ab45",
            precio: 35000,
            color: "Amarillo",
            tamaño: "Pequeño"
        },
        {
            nombre: "Flor Especial 31",
            categoria: "Rosas",
            imagen: "flor1.jpg",
            codigo: "COD31ab78",
            precio: 31000,
            color: "Rosado",
            tamaño: "Mediano"
        },
        {
            nombre: "Flor Especial 32",
            categoria: "Tulipanes",
            imagen: "flor2.jpg",
            codigo: "COD32ab12",
            precio: 28000,
            color: "Rosa",
            tamaño: "Grande"
        },
        {
            nombre: "Flor Especial 33",
            categoria: "Orquídeas",
            imagen: "flor3.jpg",
            codigo: "COD33ab90",
            precio: 46000,
            color: "Blanco",
            tamaño: "Pequeño"
        },
        {
            nombre: "Flor Especial 34",
            categoria: "Lirios",
            imagen: "flor4.jpg",
            codigo: "COD34ab34",
            precio: 33000,
            color: "Morado",
            tamaño: "Mediano"
        },
        {
            nombre: "Flor Especial 35",
            categoria: "Girasoles",
            imagen: "flor5.jpg",
            codigo: "COD35ab67",
            precio: 36000,
            color: "Amarillo",
            tamaño: "Grande"
        },
        {
            nombre: "Flor Especial 36",
            categoria: "Rosas",
            imagen: "flor6.jpg",
            codigo: "COD36ab23",
            precio: 32000,
            color: "Rojo",
            tamaño: "Pequeño"
        },
        {
            nombre: "Flor Especial 37",
            categoria: "Tulipanes",
            imagen: "flor7.jpg",
            codigo: "COD37ab45",
            precio: 29000,
            color: "Naranja",
            tamaño: "Mediano"
        },
        {
            nombre: "Flor Especial 38",
            categoria: "Orquídeas",
            imagen: "flor8.jpg",
            codigo: "COD38ab78",
            precio: 47000,
            color: "Morado",
            tamaño: "Grande"
        },
        {
            nombre: "Flor Especial 39",
            categoria: "Lirios",
            imagen: "flor9.jpg",
            codigo: "COD39ab12",
            precio: 34000,
            color: "Blanco",
            tamaño: "Pequeño"
        },
        {
            nombre: "Flor Especial 40",
            categoria: "Girasoles",
            imagen: "flor10.jpg",
            codigo: "COD40ab90",
            precio: 37000,
            color: "Amarillo",
            tamaño: "Mediano"
        },
        {
            nombre: "Flor Especial 41",
            categoria: "Rosas",
            imagen: "flor1.jpg",
            codigo: "COD41ab34",
            precio: 33000,
            color: "Rosado",
            tamaño: "Grande"
        },
        {
            nombre: "Flor Especial 42",
            categoria: "Tulipanes",
            imagen: "flor2.jpg",
            codigo: "COD42ab67",
            precio: 30000,
            color: "Rosa",
            tamaño: "Pequeño"
        },
        {
            nombre: "Flor Especial 43",
            categoria: "Orquídeas",
            imagen: "flor3.jpg",
            codigo: "COD43ab23",
            precio: 48000,
            color: "Blanco",
            tamaño: "Mediano"
        },
        {
            nombre: "Flor Especial 44",
            categoria: "Lirios",
            imagen: "flor4.jpg",
            codigo: "COD44ab45",
            precio: 35000,
            color: "Morado",
            tamaño: "Grande"
        },
        {
            nombre: "Flor Especial 45",
            categoria: "Girasoles",
            imagen: "flor5.jpg",
            codigo: "COD45ab78",
            precio: 38000,
            color: "Amarillo",
            tamaño: "Pequeño"
        },
        {
            nombre: "Flor Especial 46",
            categoria: "Rosas",
            imagen: "flor6.jpg",
            codigo: "COD46ab12",
            precio: 34000,
            color: "Rojo",
            tamaño: "Mediano"
        },
        {
            nombre: "Flor Especial 47",
            categoria: "Tulipanes",
            imagen: "flor7.jpg",
            codigo: "COD47ab90",
            precio: 31000,
            color: "Naranja",
            tamaño: "Grande"
        },
        {
            nombre: "Flor Especial 48",
            categoria: "Orquídeas",
            imagen: "flor8.jpg",
            codigo: "COD48ab34",
            precio: 49000,
            color: "Morado",
            tamaño: "Pequeño"
        },
        {
            nombre: "Flor Especial 49",
            categoria: "Lirios",
            imagen: "flor9.jpg",
            codigo: "COD49ab67",
            precio: 36000,
            color: "Blanco",
            tamaño: "Mediano"
        },
        {
            nombre: "Flor Especial 50",
            categoria: "Girasoles",
            imagen: "flor10.jpg",
            codigo: "COD50ab23",
            precio: 39000,
            color: "Amarillo",
            tamaño: "Grande"
        }
    ];

    localStorage.setItem('productos', JSON.stringify(productos));
}

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
    ];

    // Agregamos las flores especiales
    for (let i = 6; i <= 50; i++) {
        productos.push({
            nombre: `Flor Especial ${i}`,
            categoria: ["Rosas", "Tulipanes", "Orquídeas", "Lirios", "Girasoles"][Math.floor(Math.random() * 5)],
            imagen: `flor${i % 10 + 1}.jpg`,
            codigo: `COD${i}ab${Math.floor(Math.random() * 90 + 10)}`,
            precio: Math.floor(Math.random() * 30000) + 15000,
            color: ["Rojo", "Amarillo", "Blanco", "Azul", "Naranja", "Rosado"][Math.floor(Math.random() * 6)],
            tamaño: ["Pequeño", "Mediano", "Grande"][Math.floor(Math.random() * 3)]
        });
    }

    localStorage.setItem('productos', JSON.stringify(productos));
}

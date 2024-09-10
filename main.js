const products = [
    {
      nombre: "Pure Whey Isolate 95 - 2.2 kg",
      vendedor: "Olimp Sport Nutrition",
      urlImagen: "https://www.pontemasfuerte.com/media/products/1762/pure-whey-isolate-95-1473497167.jpg?1664789297",
      precio: 97.37
    },
    {
      nombre: "Sports Vitamins - 60 caps.",
      vendedor: "Perfect Nutrition",
      urlImagen: "https://www.pontemasfuerte.com/media/products/955/sports-vitamins-1722605582.jpeg?1722605582",
      precio: 13.95
    },
    {
      nombre: "Iso Whey Zero - 2.27 kg",
      vendedor: "Biotech USA",
      urlImagen: "https://www.pontemasfuerte.com/media/products/2439/iso-whey-zero-1620313289.jpg?1664794356",
      precio: 89.90
    },
    {
      nombre: "Glutamine Micronized - 500 gr",
      vendedor: "AMIX Performance",
      urlImagen: "https://www.pontemasfuerte.com/media/products/515/glutamine-micropowder-500-gr-1482308743.jpg?1664788206",
      precio: 25.90
    },
    {
      nombre: "Creatina Creapure - 300 gr",
      vendedor: "Quamtrax Nutrition",
      urlImagen: "https://www.pontemasfuerte.com/media/products/10801/creatine-monohydrate-creapure-lollipop-1682329737.png",
      precio: 19.90
    },
    {
      nombre: "L-Carnitina 3000 - 20 ampollas",
      vendedor: "Quamtrax Nutrition",
      urlImagen: "https://www.pontemasfuerte.com/media/products/1853/l-carnitine-3000-20-viales-1584359519.jpg?1664789305",
      precio: 19.90
    },
    {
      nombre: "Omega 3 - 90 perlas",
      vendedor: "Now Foods",
      urlImagen: "https://www.pontemasfuerte.com/media/products/7321/omega-3-weider-1697809081.jpg?1697809081",
      precio: 18.99
    },
    {
      nombre: "Amino BCAA 2:1:1 - 300 tabls.",
      vendedor: "Trec Nutrition",
      urlImagen: "https://www.pontemasfuerte.com/media/products/5830/super-bcaa-system-1624454468.jpg?1664802970",
      precio: 43.90
    },
    {
      nombre: "Proteína de guisante - 1 kg",
      vendedor: "Haya Labs",
      urlImagen: "https://www.hayalabs.es/937-thickbox_default/proteina-vegana-750-grms-fresa-natural.jpg",
      precio: 22.50
    },
    {
      nombre: "Gainer Mass XXL - 4 kg",
      vendedor: "Max Protein",
      urlImagen: "https://www.pontemasfuerte.com/media/products/5828/mass-xxl-1624453423.jpg?1664802831",
      precio: 49.90
    },
    {
      nombre: "Casein Zero - 908 gr",
      vendedor: "Biotech USA",
      urlImagen: "https://www.pontemasfuerte.com/media/products/2449/casein-zero-1590408940.jpg?1664794358",
      precio: 38.90
    }
  ];

  const news = [
     "https://www.hypertrophynutrition.com/img/cms/banners/BANNER-PRESENTACION-N1-500G.jpg",
      "https://www.hypertrophynutrition.com/img/cms/20240104234916/banner4.jpg",
     "https://www.hypertrophynutrition.com/img/cms/20240104234915/banner2.jpg",
     "https://www.pontemasfuerte.com/media/banners/2935.jpg?1725213312"
  ];


  

let currentIndex = 0; // Índice de la imagen actual

// Crear el elemento img y añadirlo al contenedor
const container = document.getElementById('novedades');
const imgElement = document.createElement('img');
imgElement.id = 'novedades';
imgElement.src = news[currentIndex]; // Establecer la imagen inicial
container.appendChild(imgElement);

function changeImage() {
    // Actualizar el índice de la imagen
    currentIndex = (currentIndex + 1) % news.length; // Volver al inicio si es necesario

    // Aplicar transición de opacidad para suavizar el cambio de imagen
    imgElement.style.opacity = 0; // Desvanecer la imagen actual

    setTimeout(() => {
        // Cambiar la imagen después de la transición
        imgElement.src = news[currentIndex];
        imgElement.style.opacity = 1; // Mostrar la nueva imagen con suavidad
    }, 1000); // Tiempo para que la imagen se desvanezca (1 segundo)
}
setInterval(changeImage, 5000);


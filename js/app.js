var hoteles = {
    "Alhambra Palace": {
    name: "Alhambra Palace",
    location: "Pl. Arquitecto García de Paredes, 1, 18009 Granada",
    img: "img/alhambra_palace.jpeg" 
  },
    "Washington Irving": {
    name: "Washington Irving",
    location: "P.º del Generalife, 10, 18009 Granada",
    img: "img/washington_irving.jpeg"
  },
    "Palacio de Santa Paula": {
    name: "Palacio de Santa Paula",
    location: "C/ Gran Vía de Colón, 31, 18001 Granada",
    img: "img/palacio_santa_paula.jpeg"
  },
    "Palacio de Los Patos": {
    name: "Palacio de Los Patos",
    location: "C/ Solarillo de Gracia, 1, 18002 Granada",
    img: "img/palacio_de_los_patos.jpeg"
  },
};

var selectedHotel = prompt(
    "Indique el hotel sobre el que quiere hacer la reseña: Alhambra Palace, Washington Irving, Palacio de Santa Paula o Palacio de Los Patos",
);

document.getElementById("name-hotel").innerHTML = "Hotel " + hoteles[selectedHotel].name;
document.getElementById("location-hotel").innerHTML = "Ubicado en " + hoteles[selectedHotel].location;
document.getElementById("img-hotel").src = hoteles[selectedHotel].img;

var stars = {
    una:
      "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
  };

var rating = prompt("Puntuación: una, dos, tres, cuatro o cinco Estrellas");
document.getElementById("rating").innerHTML = stars[rating];

var anonymous = confirm("¿Quiere que la reseña sea anónima?");
document.getElementById("anonymous").checked = anonymous;
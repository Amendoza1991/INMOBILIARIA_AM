let casa = [{
    Tipo: "Casa",
    color: "blanca",
    nombre: "Sicarare",
    direccion: "7004 SW 40th St, Miami, FL 33155",
    habitaciones: "3",
    banos: "2",
    tamanoImg: 400,
    website: "Visit Windsor Ludlam Trail website",
    foto: "https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/newsletter/_FI.jpg?1563747560",
    precio: "250.000",
    Estado: "Sale"
},
{
    Tipo: "Apartamento",
    color: "blanca",
    nombre: "Dangond",
    direccion: "7004 SW 40th St, Miami, FL 33155",
    habitaciones: "1",
    banos: "2",
    tamanoImg: 400,
    website: "Visit Windsor Ludlam Trail website",
    foto: "https://interimage.es/wp-content/uploads/2020/01/ya-conoces-las-ventajas-de-comprar-un-apartaestudio.jpg",
    precio: "150.000",
    Estado: "Rent"
},

{
    Tipo: "Apartamento",
    color: "blanca",
    nombre: "Novalito",
    direccion: "7004 SW 40th St, Miami, FL 33155",
    habitaciones: "4",
    banos: "5",
    tamanoImg: 400,
    website: "Visit Windsor Ludlam Trail website",
    foto: "https://obrienwebassets.s3.us-east-2.amazonaws.com/wpms-cluster1/wp-content/uploads/sites/17/2022/05/CityMax-Luxury-740x430.jpg",
    precio: "500.000",
    Estado: "Sale"
},

{
    Tipo: "Apartamento",
    color: "blanca",
    nombre: "Los Milagros",
    direccion: "7004 SW 40th St, Miami, FL 33155",
    habitaciones: "3",
    banos: "2",
    tamanoImg: 400,
    website: "Visit Windsor Ludlam Trail website",
    foto: "https://i.pinimg.com/originals/14/4e/07/144e074fe4fe5cf6f1c3b8cbbb13432f.jpg",
    precio: "300.000",
    Estado: "Rent"
},

{
    Tipo: "Apartamento",
    color: "blanca",
    nombre: "El Carmen",
    direccion: "7004 SW 40th St, Miami, FL 33155",
    habitaciones: "5",
    banos: "6",
    tamanoImg: 400,
    website: "Visit Windsor Ludlam Trail website",
    foto: "https://apartamentosmadridplaza.es/wp-content/uploads/deluxe-plus-superior.jpg",
    precio: "800.000",
    Estado: "Sale"
},

{
    Tipo: "Apartamento",
    color: "blanca",
    nombre: "Alfonso Lopez",
    direccion: "7004 SW 40th St, Miami, FL 33155",
    habitaciones: "1",
    banos: "2",
    tamanoImg: 400,
    website: "Visit Windsor Ludlam Trail website",
    foto: "https://th.bing.com/th/id/OIP.0JijaApNl5rauvtiURQW1AHaFj?rs=1&pid=ImgDetMain",
    precio: "100.000",
    Estado: "Rent"
},

{
    Tipo: "Apartamento",
    color: "blanca",
    nombre: "Obrero",
    direccion: "7004 SW 40th St, Miami, FL 33155",
    habitaciones: "3",
    banos: "2",
    tamanoImg: 400,
    website: "Visit Windsor Ludlam Trail website",
    foto: "https://i.pinimg.com/originals/bb/4f/27/bb4f27f3bd589d39db1fa8db7ca78365.jpg",
    precio: "280.000",
    Estado: "Sale"
},

{
    Tipo: "Apartamento",
    color: "blanca",
    nombre: "Esperanza",
    direccion: "7004 SW 40th St, Miami, FL 33155",
    habitaciones: "2",
    banos: "2",
    tamanoImg: 400,
    website: "Visit Windsor Ludlam Trail website",
    foto: "https://3.bp.blogspot.com/-npoQCK0iPlw/XExrjSUu_3I/AAAAAAACRiI/P3KNSllJFjYensZTOLBoPPczydlnWTQQACLcBGAs/s1600/4.jpg",
    precio: "180.000",
    Estado: "Rent"
},

{
    Tipo: "Casa",
    color: "blanca",
    nombre: "Los Cortijos",
    direccion: "7004 SW 40th St, Miami, FL 33155",
    habitaciones: "5",
    banos: "8",
    tamanoImg: 400,
    website: "Visit Windsor Ludlam Trail website",
    foto: "https://www.ivanandmike.com/wp-content/uploads/2021/02/2288-SUNSET-DR-MIAMI-BEACH-FL-33140-1-1170x0-c-center.jpg",
    precio: "1.180.000",
    Estado: "Sale"
},

{
    Tipo: "Casa",
    color: "blanca",
    nombre: "Zapato en Mano",
    direccion: "7004 SW 40th St, Miami, FL 33155",
    habitaciones: "3",
    banos: "4",
    tamanoImg: 400,
    website: "Visit Windsor Ludlam Trail website",
    foto: "https://th.bing.com/th/id/R.fa8536509d96d939f450bae7db486591?rik=sTMu%2fdmk7BQ8EQ&riu=http%3a%2f%2fwww.invierteconmigoenflorida.com%2fwp-content%2fuploads%2f2020%2f07%2fdoral4-850x580.jpg&ehk=SBRSgeQ%2bCJZSoJeIgra6I1CT83JsvqBSMPHeW%2fQgl40%3d&risl=&pid=ImgRaw&r=0",
    precio: "630.000",
    Estado: "Rent"
},
];

let listaActual = casa

function mostrarCartas(propiedades) {
    listaActual = propiedades
    $("#Cardcontent").empty();
    for (let i = 0; i < propiedades.length; i++) {
        let cardClass = "card w-[350px] shadow-2xl rounded-[8px] ";
        if (i % 2 == 0) {
            cardClass += "bg-sky-100"
        } else {
            cardClass += "bg-teal-50"
        }

        $("#Cardcontent").append(
            '<div class="' + cardClass + '" data-index="' + i + '" />' +
            '<img class="w-[400px] h-[200px] rounded-[3px]" src="' + propiedades[i].foto + '" />' +
            '<p class="pl-2"> Nombre: ' + propiedades[i].nombre + '</p>' +
            '<p class="pl-2"> Dirección: ' + propiedades[i].direccion + '</p>' +
            '<p class="pl-2"> Habitaciones: ' + '<span class="font-bold">' + propiedades[i].habitaciones + '</span>' + '</p>' +
            '<p class="pl-2"> Baños: ' + '<span class="font-bold">' + propiedades[i].banos + '</span>' + '</p>' +
            '<p class="pl-2"> Estado: ' + '<span class="font-bold">' + propiedades[i].Estado + '</span>' + '</p>' +
            '<p class="pl-2"> Tipo: ' + propiedades[i].Tipo + '</p>' +
            '<p class="pl-2 font-bold"> $' + propiedades[i].precio + '</p>'

            + '</div>'


        );
    }
}

$(document).ready(function () {
    //$("#Nombre").html(casa[0].nombre)
    // $("#direccion").html(casa[0].direccion)
    // $("#website").html(casa[0].website)
    // $(".BigImg").html('<img src="' + casa[0].foto + '"/>')
    // $("#banos").html("Banos:  " + casa[0].banos)
    // $("#cuartos").html("Habitaciones:  " + casa[0].habitaciones)
    // $("#precio").html("Precio: $" + casa[0].precio)
    mostrarCartas(casa)
    $(".buscar").click(function () {
        let ingreso = $("#ingreso").val().toLowerCase().trim();
        let arrayBusqueda = [];
        if (ingreso == "") {
            mostrarCartas(casa)
        } else {
            for (let i = 0; i < casa.length; i++) {
                if (ingreso == casa[i].nombre.toLowerCase().trim()) {
                    arrayBusqueda.push(casa[i])
                }

            }
            mostrarCartas(arrayBusqueda)
        }


    })

    // $("#rent1").change(function(){

    //     var seleccionarRoS = $(this).children(":selected").text();
    //     $("#ren").val(seleccionarRoS);
    //     $("#sale1").change();
    // })

    $("#rent1").change(function () {

        let estadoSeleccionado = $("#rent1").val()
        let arrayFiltrado = [];
        if (estadoSeleccionado === "for") {
            mostrarCartas(casa)

        } else {
            for (let i = 0; i < casa.length; i++) {
                if (casa[i].Estado === estadoSeleccionado) {
                    arrayFiltrado.push(casa[i])
                }

            }
            mostrarCartas(arrayFiltrado)
        }

    })

    $("#Homet").change(function () {

        let tipoSeleccionado = $("#Homet").val()
        let arrayFiltrado = [];
        if (tipoSeleccionado === "type") {
            mostrarCartas(casa)

        } else {
            for (let i = 0; i < casa.length; i++) {
                if (casa[i].Tipo === tipoSeleccionado) {
                    arrayFiltrado.push(casa[i])
                }

            }

            mostrarCartas(arrayFiltrado)
        }

    })

    $("#habitac").change(function () {

        let habSeleccionado = $("#habitac").val()
        let arrayFiltrado = [];
        if (habSeleccionado === "Hab") {
            mostrarCartas(casa)

        } else {
            for (let i = 0; i < casa.length; i++) {
                if (casa[i].habitaciones === habSeleccionado) {
                    arrayFiltrado.push(casa[i])
                }

            }

            mostrarCartas(arrayFiltrado)
        }

    })

    $(document).on('click', '.card', function () {
        let index = $(this).data("index");
        let propiedades = listaActual[index];
        console.log(index)
        $("#Nombre").html(propiedades.nombre)
        $("#direccion").html(propiedades.direccion)
        $(".BigImg").html('<img class="w-[450px] h-[450px]" src=" ' + propiedades.foto + '"/>')
        $("#banos").html("Banos:  " + propiedades.banos)
        $("#cuartos").html("Habitaciones:  " + propiedades.habitaciones)
        $("#precio").html("Precio: $" + propiedades.precio)
        $("#Estado").html("Estado: " + propiedades.Estado)
        $("#Tipo").html("Tipo: " + propiedades.Tipo)


        $("#popup-container").removeClass("hidden");
    })
    $("#cerrar").click(function () {
        $("#popup-container").addClass("hidden");
    })
})


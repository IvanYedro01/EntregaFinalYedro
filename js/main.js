
const productos = [
    {
        imagen: "../assets/1proteina.webp",
        nombre: "Proteína ENA",
        descripcion: "Ena Whey Protein True Made 1000 gr."
    }
    ,
    {
        imagen: "../assets/2creatina.webp",
        nombre: "Creatina Star Nutrition",
        descripcion: "Star Nutrition Creatina 300 gr."
    }
    ,
    {
        imagen: "../assets/3combo-prote-crea.webp",
        nombre: "Combo nutricion",
        descripcion: "Combo NF Nutrition Whey Protein + Creatina."
    }
    ,
    {
        imagen: "../assets/4barra-proteica.webp",
        nombre: "Barra proteica",
        descripcion: "ENA Protein Bar (1 U.) 30% OFF por Caja (16u.)"
    }
    ,
    {
        imagen: "../assets/5proteina.webp",
        nombre: "Proteína Whey",
        descripcion: "Advanced Whey Protein (1000 gr.) (33 sv.)"
    }
    ,
    {
        imagen: "../assets/6pre-entreno.webp",
        nombre: "Pre-Entreno",
        descripcion: "Nf Nutrition Focus PreWork. 240gr."
    }
    ,
    {
        imagen: "../assets/7barra-proteica.webp",
        nombre: "Barra proteíca",
        descripcion: "Lowcarb Protein Bar - Gentech."
    }
    ,
    {
        imagen: "../assets/8proteina-premium.webp",
        nombre: "Proteína premium",
        descripcion: " Bsn Syntha-6 Ultlra Premium Protein 1320 gr."
    }
    ,
    {
        imagen: "../assets/9colageno.webp",
        nombre: "Colageno nutricion",
        descripcion: "Nf Nutrition Collagen 240gr."
    }
]


let contenedor = document.querySelector("#contenedorCards");

function cargarProductos(){

    productos.forEach(producto =>{

        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
        <div class="h-100 orden" data-aos="zoom-in">
          <img src=${producto.imagen} class="card-img-top suplemento" alt="Imagen de producto, proteina Ena" />
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.descripcion}.</p>
          </div>
        </div>
        `;

        contenedor.append(div);
    })

}

cargarProductos();
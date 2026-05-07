//Arreglo de las tarjetas de servicios express
const serviciosExpress = [
    {  
        id:1,
        nombre: "Cimentacion Profunda",
        categoria: "Estructura",
        imagen: "img/serviciosExpress/cimentacion.jpg",
        descripcion: "Evaluacion tecnica y refuerzo estructural para grietas criticas en la base de tu construccion",
        tiempo: "2-5 dias",
        precio: "Desde $5,000 MXN"
    },
    {  
        id:2,
        nombre: "Remodelacion de interiores",
        categoria: "Acabados",
        imagen: "img/serviciosExpress/remodelacion.jpg",
        descripcion: "Transforma tus espacios con acabdos modernos y funcionales, adaptados a tu estilo de vida",
        tiempo: "3-7 dias",
        precio: "Desde $10,000 MXN"
    },
    {  
        id:3,
        nombre: "Diseño de planos 3D",
        categoria: "Arquitectura",
        imagen: "img/serviciosExpress/planos.jpg",
        descripcion: "Creacion de planos arquitectonicos en 3D para visualizar tu proyecto antes de construirlo",
        tiempo: "5-10 dias",
        precio: "Desde $8,000 MXN"
    },
    {  
        id:4,
        nombre: "Instalacion Electrica",
        categoria: "Instalaciones",
        imagen: "img/serviciosExpress/electrica.jpg",
        descripcion: "Instalacion electrica segura y eficiente para tu hogar o negocio, cumpliendo con los estandares de calidad",
        tiempo: "1-3 dias",
        precio: "Desde $5,000 MXN"
    },
    {  
        id:5,
        nombre: "Pintura y acabados",
        categoria: "Acabados",
        imagen: "img/serviciosExpress/pintura.jpg",
        descripcion: "Servicio de pintura profesional para interiores y exteriores, con acabados duraderos y de alta calidad",
        tiempo: "2-4 dias",
        precio: "Desde $3,000 MXN"
    },
    {  
        id:6,
        nombre: "Reparacion de techos",
        categoria: "Estructura",
        imagen: "img/serviciosExpress/techos.jpg",
        descripcion: "Reparacion y mantenimiento de techos para garantizar su integridad estructural y resistencia",
        tiempo: "1-3 dias",
        precio: "Desde $7,000 MXN"
    },

{
id:7,
nombre: "Construcción de muros y bardas",
categoria: "Estructura",
imagen: "img/serviciosExpress/muros.jpg",
descripcion: "Construcción de muros y bardas resistentes para delimitar y proteger espacios residenciales, comerciales e industriales",
tiempo: "2-5 dias",
precio: "Desde $8,500 MXN"
},

{
id:8,
nombre: "Levantamiento de columnas y trabes",
categoria: "Estructura",
imagen: "img/serviciosExpress/columnas.jpg",
descripcion: "Construcción de columnas y trabes de concreto para brindar soporte y estabilidad a la estructura",
tiempo: "3-7 dias",
precio: "Desde $12,000 MXN"
},

{
id:9,
nombre: "Construcción de losas",
categoria: "Estructura",
imagen: "img/serviciosExpress/losas.jpg",
descripcion: "Colado y construcción de losas de concreto para techos y entrepisos con alta resistencia",
tiempo: "4-8 dias",
precio: "Desde $18,000 MXN"
},

{
id:10,
nombre: "Albañilería general",
categoria: "Estructura",
imagen: "img/serviciosExpress/albanileria.jpg",
descripcion: "Trabajos de albañilería en construcción, ampliaciones y reparaciones para todo tipo de proyectos",
tiempo: "1-5 dias",
precio: "Desde $4,500 MXN"
},

{
id:11,
nombre: "Instalación hidráulica",
categoria: "Instalaciones",
imagen: "img/serviciosExpress/hidraulica.jpg",
descripcion: "Instalación y reparación de tuberías hidráulicas para suministro eficiente de agua",
tiempo: "1-4 dias",
precio: "Desde $5,000 MXN"
},

{
id:12,
nombre: "Instalación sanitaria",
categoria: "Instalaciones",
imagen: "img/serviciosExpress/sanitaria.jpg",
descripcion: "Montaje de sistemas sanitarios y tuberías para desagüe y manejo adecuado de aguas residuales",
tiempo: "2-5 dias",
precio: "Desde $6,500 MXN"
},

{
id:13,
nombre: "Instalación de drenaje",
categoria: "Instalaciones",
imagen: "img/serviciosExpress/drenaje.jpg",
descripcion: "Construcción e instalación de sistemas de drenaje para viviendas y proyectos comerciales",
tiempo: "2-6 dias",
precio: "Desde $7,500 MXN"
},

{
id:14,
nombre: "Impermeabilización",
categoria: "Acabados",
imagen: "img/serviciosExpress/impermeabilizacion.jpg",
descripcion: "Aplicación de impermeabilizantes para proteger superficies contra humedad y filtraciones",
tiempo: "1-2 dias",
precio: "Desde $3,500 MXN"
},

{
id:15,
nombre: "Colocación de pisos y azulejos",
categoria: "Acabados",
imagen: "img/serviciosExpress/pisos.jpg",
descripcion: "Instalación profesional de pisos, azulejos y recubrimientos para interiores y exteriores",
tiempo: "2-6 dias",
precio: "Desde $5,500 MXN"
},

{
id:16,
nombre: "Carpintería residencial y comercial",
categoria: "Acabados",
imagen: "img/serviciosExpress/carpinteria.jpg",
descripcion: "Fabricación e instalación de muebles, puertas y acabados de madera para hogares y negocios",
tiempo: "3-7 dias",
precio: "Desde $8,000 MXN"
},

{
id:17,
nombre: "Herrería y cancelería",
categoria: "Acabados",
imagen: "img/serviciosExpress/herreria.jpg",
descripcion: "Fabricación e instalación de estructuras metálicas, rejas, barandales y cancelería de aluminio",
tiempo: "2-6 dias",
precio: "Desde $7,000 MXN"
},

{
id:18,
nombre: "Instalación de puertas y ventanas",
categoria: "Acabados",
imagen: "img/serviciosExpress/puertas.jpg",
descripcion: "Colocación de puertas y ventanas de aluminio, madera o vidrio con acabados de calidad",
tiempo: "1-3 dias",
precio: "Desde $4,000 MXN"
},

{
id:19,
nombre: "Construcción de cisternas",
categoria: "Estructura",
imagen: "img/serviciosExpress/cisternas.jpg",
descripcion: "Diseño y construcción de cisternas para almacenamiento seguro y eficiente de agua",
tiempo: "4-8 dias",
precio: "Desde $15,000 MXN"
},

{
id:20,
nombre: "Construcción de banquetas y guarniciones",
categoria: "Urbanización",
imagen: "img/serviciosExpress/banquetas.jpg",
descripcion: "Construcción de banquetas y guarniciones de concreto para proyectos urbanos y residenciales",
tiempo: "2-5 dias",
precio: "Desde $9,000 MXN"
},
];



function mostrarServicios(lista) {
    const contenedor = document.getElementById('contenedor-grid');
    if (!contenedor) return;
    
    contenedor.innerHTML = '';

    lista.forEach(servicio => {
        contenedor.innerHTML += `
            <div class="servicio-card">
                <img src="${servicio.imagen}" alt="${servicio.nombre}">
                <div style="padding: 15px;">
                    <h3>${servicio.nombre}</h3>
                    <p>${servicio.categoria}</p>
                    <button onclick="verDetalles(${servicio.id})" class="cta-button">Ver Detalles</button>
                </div>
            </div>
        `;
    });
}

function verDetalles(id) {
    const servicio = serviciosExpress.find(s => s.id === id);
    const modal = document.getElementById('modalServicio');
    const contenido = document.getElementById('modal-body-content');

    contenido.innerHTML = `
        <img src="${servicio.imagen}" class="modal-detalle-img">
        <h2>${servicio.nombre}</h2>
        <p style="color:#f39c12; font-weight:bold;">${servicio.categoria}</p>
        <hr>
        <p style="margin: 20px 0; line-height: 1.6;">${servicio.descripcion}</p>
        <div class="modal-info-extra">
            <span><strong>⏱ Tiempo:</strong> ${servicio.tiempo}</span>
            <span><strong>💰 Inversión:</strong> ${servicio.precio}</span>
        </div>
        <div style="text-align:center; margin-top:20px;">
            <a href="contacto.html" class="cta-button">Ir a Contacto</a>
        </div>
    `;
    modal.style.display = "block";
}

// Inicialización 
mostrarServicios(serviciosExpress);

// Configuración del filtro
const btnFiltrar = document.getElementById('btnFiltrar');
const inputBusqueda = document.getElementById('inputBusqueda');

const filtrarServicios = () => {
    const termino = inputBusqueda.value.toLowerCase();
    const filtrados = serviciosExpress.filter(s => s.nombre.toLowerCase().includes(termino) || s.categoria.toLowerCase().includes(termino));
    mostrarServicios(filtrados);
};

if (btnFiltrar) btnFiltrar.addEventListener('click', filtrarServicios);
if (inputBusqueda) inputBusqueda.addEventListener('keypress', (e) => { if (e.key === 'Enter') filtrarServicios(); });

// Eventos para cerrar el Modal
const closeBtn = document.querySelector('.close-btn');
if (closeBtn) closeBtn.onclick = () => document.getElementById('modalServicio').style.display = "none";

window.addEventListener('click', (event) => {
    const modal = document.getElementById('modalServicio');
    if (modal && event.target === modal) modal.style.display = "none";
});

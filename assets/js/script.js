// =========================
// PROPIEDADES EN VENTA
// =========================
const propiedades_venta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    costo: 5000,
    smoke: false,
    pets: false
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con vistas impresionantes",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    costo: 1200,
    smoke: true,
    pets: true
  },
  {
    nombre: "Penthouse con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion: "Penthouse con terraza panorámica y vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    costo: 4500,
    smoke: false,
    pets: true
  }
];

// =========================
// PROPIEDADES EN ALQUILER
// =========================
const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    descripcion: "Apartamento con excelente ubicación en el centro",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    costo: 2000,
    smoke: false,
    pets: true
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09",
    descripcion: "Hermosa vista al mar, amplio y luminoso",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    costo: 2500,
    smoke: true,
    pets: true
  },
  {
    nombre: "Condominio moderno",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a",
    descripcion: "Elegante condominio moderno en zona tranquila",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    costo: 2200,
    smoke: false,
    pets: false
  }
];

// =========================
// TEMPLATE BOOTSTRAP
// =========================

function crearTarjeta(prop) {
  return `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="${prop.src}" class="card-img-top" alt="${prop.nombre}">
        <div class="card-body">
          <h5 class="card-title">${prop.nombre}</h5>
          <p class="card-text">${prop.descripcion}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}</p>
          <p><strong>Habitaciones:</strong> ${prop.habitaciones}</p>
          <p><strong>Precio:</strong> $${prop.costo}</p>

          ${prop.smoke 
            ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>` 
            : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`}

          ${prop.pets 
            ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>` 
            : `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`}
        </div>
      </div>
    </div>
  `;
}

// =========================
// DETECCIÓN DE PÁGINA
// =========================
const pagina = window.location.pathname;

// =========================
// INDEX → 3 + 3
// =========================
if (pagina.includes("index")) {
  const contAlq = document.getElementById("alquiler-index");
  const contVen = document.getElementById("venta-index");

  propiedades_alquiler.slice(0, 3).forEach(p => contAlq.innerHTML += crearTarjeta(p));
  propiedades_venta.slice(0, 3).forEach(p => contVen.innerHTML += crearTarjeta(p));
}

// =========================
// ALQUILER → TODAS
// =========================
if (pagina.includes("propiedades_alquiler")) {
  const cont = document.getElementById("alquiler-container");
  propiedades_alquiler.forEach(p => cont.innerHTML += crearTarjeta(p));
}

// =========================
// VENTAS → TODAS
// =========================
if (pagina.includes("propiedades_venta")) {
  const cont = document.getElementById("venta-container");
  propiedades_venta.forEach(p => cont.innerHTML += crearTarjeta(p));
}

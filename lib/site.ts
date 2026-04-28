export const site = {
  name: "Dra. Ana Rojas",
  role: "Cirujana Dentista",
  tagline: "Sonrisas saludables, radiantes y para toda la vida",
  city: "Querétaro, México",
  address: "Querétaro, México",
  phoneDisplay: "—",
  whatsapp: "https://wa.me/52",
  whatsappMessage:
    "Hola Dra. Ana, me gustaría agendar una consulta dental. ¿Tiene disponibilidad esta semana?",
  appointmentUrl:
    "https://www.doctoralia.com.mx/ana-rojas/dentista-odontologo/queretaro?prevent-patient-app-banner=true&utm_source=google&utm_medium=gmb&utm_campaign=399163&utm_content=book_visit&rwg_token=AFd1xnFkKUXjGgPX6zVTAjZhJAphEJCwd8q_sB-ZRRiloGROqg0H1nZk1B6pcea3DEDZNOvuidUEdz6g1Wlg5Y2zLHlpeigdDA%3D%3D#highlight-calendar",
  email: "contacto@draanarojas.com",
  rating: {
    stars: 5,
    reviews: 100,
    source: "Google Maps",
  },
  hours: [
    { day: "Lunes a Viernes", time: "9:00 — 19:00" },
    { day: "Sábado", time: "9:00 — 14:00" },
    { day: "Domingo", time: "Cerrado" },
  ],
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14942.79028348928!2d-100.391!3d20.5888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDM1JzE5LjciTiAxMDDCsDIzJzI3LjYiVw!5e0!3m2!1ses-419!2smx!4v1714329600000",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Dentista+Querétaro",
};

export type Site = typeof site;

import React, { useState } from 'react';
import { 
  MapPin, 
  Maximize, 
  Building2, 
  BedDouble, 
  Palmtree, 
  Waves,
  Ruler,
  TrendingUp,
  Map,
  Info,
  Camera,
  Globe,
  FileBox,
  X // <--- Añadido el icono de la X para cerrar la foto
} from 'lucide-react';

// --- DICCIONARIO DE IDIOMAS ---
const translations = {
  es: {
    langBtn: "ES",
    subtitle: "Oportunidad de Inversión Exclusiva",
    title1: "HOTEL",
    title2: "MOJÁCAR",
    heroDesc: "Un oasis de lujo y tranquilidad a un paso del Mar Mediterráneo.",
    stat1Label: "De la playa",
    stat2Label: "Parcela Total",
    stat3Label: "M² Edificables",
    stat4Label: "Habitaciones",
    tab1: "Resumen y Ubicación",
    tab2: "Datos Urbanísticos y Planos",
    tab3: "Instalaciones y Habitaciones",
    tab4: "Galería Visual",
    locTitle: "Ubicación Estratégica",
    locDesc: "Ubicado a 250 metros de la playa, pero con la tranquilidad necesaria en este tipo de establecimientos. Muy cerca de restaurantes, campos de golf, puertos deportivos y playas.",
    locList1: "A 2 km de Mojácar Pueblo, reconocido como uno de los Pueblos más Bonitos de España.",
    locList2: "Mojácar es la entrada norte al Parque Natural de Cabo de Gata.",
    locList3: "Recientemente reformado y decorado por interioristas profesionales.",
    urbanTitle: "Datos Técnicos y Urbanísticos",
    urbanDesc: "Características excepcionales para su explotación y gran potencial de ampliación.",
    plotTitle: "Parcela y Edificabilidad",
    row1: "Superficie Total Parcela",
    row2: "Clasificación del Suelo",
    row2Val: "Suelo Urbano Directo",
    row3: "Ratio Edificabilidad",
    row4: "Superficie Máx. Edificable",
    row5: "Construido Actualmente",
    row6: "Disponible para Construir",
    row7: "Altura Máxima Permitida",
    row7Val: "3 plantas sobre rasante",
    catTitle: "Resumen Catastral",
    catClass: "Clase:",
    catClassVal: "Urbano",
    catUse: "Uso Principal:",
    catUseVal: "Ocio / Hostelería",
    catYear: "Año Construcción:",
    catYearVal: "1986 (Reformado)",
    catBox: "El espacio disponible en su amplio terreno permite construir nuevas habitaciones sin perder su encanto y armonía con el entorno.",
    techPlansTitle: "Documentación Técnica y Planimetría",
    facTitle: "Distribución y Habitaciones",
    floor1: "Nivel Sótano",
    floor1Desc: "Discoteca y áreas de apoyo (aseos y almacenes).",
    floor2: "Planta Baja",
    floor2Desc: "Recepción, salón, bar, restaurante, cocina de 80m² y salones para eventos de 150m².",
    floor3: "Planta Alta",
    floor3Desc: "10 diferentes tipos de habitaciones, terrazas y áreas comunes.",
    floor4: "Planta Ático",
    floor4Desc: "2 habitaciones tipo suite, unidas a través de patio y terrazas.",
    roomTitle: "Tipos de Alojamiento",
    roomDescGeneral: "Doce habitaciones con todas las comodidades, varias con terraza privada y vistas al mar o montaña.",
    room1Title: "Habitación Doble Deluxe",
    room1Desc: "Diseñada para ofrecer una estancia acogedora y perfecta para el descanso y la relajación.",
    room2Title: "Doble con Terraza",
    room2Desc: "Ideal para disfrutar de las vistas y el entorno natural. Totalmente equipada.",
    room3Title: "Suite Junior con Terraza",
    room3Desc: "La más amplia y lujosa del hotel. Sorprende por su estilo y visuales.",
    extTitle: "Jardines Exóticos y Zonas de Ocio",
    ext1Title: "Jardines para Eventos",
    ext1Desc: "Amplios jardines arreglados para eventos sobre unos 2.000 m².",
    ext2Title: "Zona de Expansión",
    ext2Desc: "Disponibilidad de otros 2.000 m² reservados para futuros desarrollos.",
    ext3Title: "Piscina y Deportes",
    ext3Desc: "Piscina nueva de 14x5m, zona de hamacas, chiringuito de 60m² y 2 pistas de tenis.",
    galTitle: "Galería de Imágenes",
    carTitle: "Un Vistazo al Paraíso",
    footerSubtitle: "Dossier de Inversión",
    copyright: "© 2026 OpenGroup. Todos los derechos reservados." // <--- Añadido
  },
  en: {
    langBtn: "EN",
    subtitle: "Exclusive Investment Opportunity",
    title1: "HOTEL",
    title2: "MOJÁCAR",
    heroDesc: "An oasis of luxury and tranquility just a step away from the Mediterranean Sea.",
    stat1Label: "From the beach",
    stat2Label: "Total Plot Size",
    stat3Label: "Buildable Area",
    stat4Label: "Current Rooms",
    tab1: "Overview & Location",
    tab2: "Urban Data & Plans",
    tab3: "Facilities & Rooms",
    tab4: "Visual Gallery",
    locTitle: "A Prime Location",
    locDesc: "Located just 250 meters from the beach, the hotel offers the perfect balance between proximity to the sea and tranquility. Close to high-end restaurants, golf courses, and marinas.",
    locList1: "2 km from Mojácar Pueblo, recognized as one of the Most Beautiful Villages in Spain.",
    locList2: "Serves as the northern entrance to the spectacular Cabo de Gata Natural Park.",
    locList3: "Recently renovated and exquisitely decorated by professional interior designers.",
    urbanTitle: "Technical & Urban Data",
    urbanDesc: "Exceptional technical characteristics for immediate exploitation and significant future expansion.",
    plotTitle: "Plot & Buildability",
    row1: "Total Plot Surface",
    row2: "Land Classification",
    row2Val: "Direct Urban Land",
    row3: "Buildability Ratio",
    row4: "Maximum Buildable Area",
    row5: "Currently Built",
    row6: "Remaining to Build",
    row7: "Max Height Allowed",
    row7Val: "3 floors above ground",
    catTitle: "Cadastral Summary",
    catClass: "Class:",
    catClassVal: "Urban",
    catUse: "Main Use:",
    catUseVal: "Leisure / Hospitality",
    catYear: "Year of Construction:",
    catYearVal: "1986 (Renovated)",
    catBox: "The available space on this expansive plot allows for the construction of new rooms and facilities without losing the hotel's charm and harmony with its natural surroundings.",
    techPlansTitle: "Technical Documentation & Floor Plans",
    facTitle: "Hotel Distribution & Rooms",
    floor1: "Basement",
    floor1Desc: "Nightclub and support areas (toilets, storage).",
    floor2: "Ground Floor",
    floor2Desc: "Reception, lounge, bar, restaurant, 80m² kitchen, and 150m² event halls.",
    floor3: "First Floor",
    floor3Desc: "10 diverse rooms, private terraces, and common areas.",
    floor4: "Attic",
    floor4Desc: "2 suite rooms connected by an exclusive patio and terraces.",
    roomTitle: "Accommodation Types",
    roomDescGeneral: "Twelve exclusive rooms with all amenities, several featuring private terraces with sea or mountain views.",
    room1Title: "Double Deluxe",
    room1Desc: "Designed to offer a cozy stay, perfect for rest and relaxation.",
    room2Title: "Double with Terrace",
    room2Desc: "Ideal for enjoying the views and natural surroundings. Fully equipped.",
    room3Title: "Junior Suite with Terrace",
    room3Desc: "The most spacious and luxurious in the hotel. Surprising style and visuals.",
    extTitle: "Exotic Gardens & Amenities",
    ext1Title: "Event Gardens",
    ext1Desc: "2,000 m² of landscaped gardens ready for exclusive events.",
    ext2Title: "Expansion Area",
    ext2Desc: "Additional 2,000 m² available for future developments.",
    ext3Title: "Pool & Leisure",
    ext3Desc: "New 14x5m pool, hammock area, 60m² beach bar, and 2 tennis courts.",
    galTitle: "Image Gallery",
    carTitle: "Glimpse of Paradise",
    footerSubtitle: "Investment Dossier",
    copyright: "© 2026 OpenGroup. All rights reserved." // <--- Añadido
  },
  fr: {
    langBtn: "FR",
    subtitle: "Opportunité d'Investissement Exclusive",
    title1: "HÔTEL",
    title2: "MOJÁCAR",
    heroDesc: "Une oasis de luxe et de tranquillité à deux pas de la mer Méditerranée.",
    stat1Label: "De la plage",
    stat2Label: "Taille du Terrain",
    stat3Label: "Surface Constructible",
    stat4Label: "Chambres Actuelles",
    tab1: "Aperçu et Emplacement",
    tab2: "Données Urbaines et Plans",
    tab3: "Installations et Chambres",
    tab4: "Galerie Visuelle",
    locTitle: "Un Emplacement de Choix",
    locDesc: "Situé à seulement 250 mètres de la plage, l'hôtel offre l'équilibre parfait entre proximité de la mer et tranquillité. Proche des restaurants, golfs et marinas.",
    locList1: "À 2 km de Mojácar Pueblo, reconnu comme l'un des plus beaux villages d'Espagne.",
    locList2: "Sert d'entrée nord au spectaculaire parc naturel de Cabo de Gata.",
    locList3: "Récemment rénové et décoré de manière exquise par des architectes d'intérieur.",
    urbanTitle: "Données Techniques et Urbaines",
    urbanDesc: "Caractéristiques techniques exceptionnelles pour une exploitation immédiate et une extension future.",
    plotTitle: "Terrain et Constructibilité",
    row1: "Surface Totale du Terrain",
    row2: "Classification du Sol",
    row2Val: "Terrain Urbain Direct",
    row3: "Taux de Constructibilité",
    row4: "Surface Max. Constructible",
    row5: "Actuellement Construit",
    row6: "Restant à Construire",
    row7: "Hauteur Max. Autorisée",
    row7Val: "3 étages au-dessus du sol",
    catTitle: "Résumé Cadastral",
    catClass: "Classe:",
    catClassVal: "Urbain",
    catUse: "Usage Principal:",
    catUseVal: "Loisirs / Hôtellerie",
    catYear: "Année de Construction:",
    catYearVal: "1986 (Rénové)",
    catBox: "L'espace disponible sur ce vaste terrain permet la construction de nouvelles chambres et installations sans perdre le charme de l'hôtel.",
    techPlansTitle: "Documentation Technique et Plans",
    facTitle: "Distribution de l'Hôtel",
    floor1: "Sous-sol",
    floor1Desc: "Boîte de nuit et zones de soutien (toilettes, stockage).",
    floor2: "Rez-de-chaussée",
    floor2Desc: "Réception, salon, bar, restaurant, cuisine de 80m² et salles d'événements de 150m².",
    floor3: "Premier Étage",
    floor3Desc: "10 chambres diverses, terrasses privées et espaces communs.",
    floor4: "Attique",
    floor4Desc: "2 suites reliées par un patio exclusif et des terrasses.",
    roomTitle: "Types d'Hébergement",
    roomDescGeneral: "Douze chambres exclusives avec toutes les commodités, plusieurs avec terrasse privée et vue sur mer ou montagne.",
    room1Title: "Double Deluxe",
    room1Desc: "Conçue pour offrir un séjour chaleureux, parfaite pour le repos et la détente.",
    room2Title: "Double avec Terrasse",
    room2Desc: "Idéale pour profiter de la vue et de la nature environnante. Entièrement équipée.",
    room3Title: "Suite Junior avec Terrasse",
    room3Desc: "La plus spacieuse et luxueuse de l'hôtel. Style et visuels surprenants.",
    extTitle: "Jardins Exotiques et Loisirs",
    ext1Title: "Jardins d'Événements",
    ext1Desc: "2 000 m² de jardins paysagers prêts pour des événements exclusifs.",
    ext2Title: "Zone d'Expansion",
    ext2Desc: "2 000 m² supplémentaires disponibles pour de futurs développements.",
    ext3Title: "Piscine et Sports",
    ext3Desc: "Nouvelle piscine de 14x5m, espace hamacs, bar de plage de 60m² et 2 courts de tennis.",
    galTitle: "Galerie d'Images",
    carTitle: "Aperçu du Paradis",
    footerSubtitle: "Dossier d'Investissement",
    copyright: "© 2026 OpenGroup. Tous droits réservés." // <--- Añadido
  }
};

const HotelMojacarDossier = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [lang, setLang] = useState('es');
  
  // --- ESTADOS PARA EL MODAL DE LAS FOTOS ---
  const [selectedImage, setSelectedImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* LANGUAGE SELECTOR */}
      <div className="fixed top-6 right-6 z-40 bg-white/90 backdrop-blur shadow-lg rounded-full px-2 py-1 flex items-center border border-slate-200">
        <Globe size={18} className="text-slate-500 ml-2 mr-2" />
        <button onClick={() => setLang('es')} className={`px-3 py-1.5 text-xs font-bold rounded-full transition-colors ${lang === 'es' ? 'bg-amber-500 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>ES</button>
        <button onClick={() => setLang('en')} className={`px-3 py-1.5 text-xs font-bold rounded-full transition-colors ${lang === 'en' ? 'bg-amber-500 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>EN</button>
        <button onClick={() => setLang('fr')} className={`px-3 py-1.5 text-xs font-bold rounded-full transition-colors ${lang === 'fr' ? 'bg-amber-500 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>FR</button>
      </div>

      {/* HEADER HERO */}
      <header className="relative bg-slate-900 text-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-600 via-slate-900 to-black"></div>
        <img src="/img/fachada.png" alt="Hotel Fondo" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <span className="uppercase tracking-[0.3em] text-amber-500 text-sm font-semibold mb-4 block">
            {t.subtitle}
          </span>
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            {t.title1} <span className="font-bold">{t.title2}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            {t.heroDesc}
          </p>
        </div>
      </header>

      {/* QUICK STATS */}
      <div className="max-w-6xl mx-auto -mt-12 relative z-20 px-4">
        <div className="bg-white rounded-xl shadow-xl grid grid-cols-2 md:grid-cols-4 gap-6 p-8 border border-slate-100">
          <Stat icon={<MapPin className="text-amber-500" />} value="250m" label={t.stat1Label} />
          <Stat icon={<Maximize className="text-amber-500" />} value="12.800 m²" label={t.stat2Label} />
          <Stat icon={<TrendingUp className="text-amber-500" />} value="4.401 m²" label={t.stat3Label} />
          <Stat icon={<BedDouble className="text-amber-500" />} value="12" label={t.stat4Label} />
        </div>
      </div>

      {/* TABS NAVEGACIÓN */}
      <div className="max-w-6xl mx-auto mt-16 px-4">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 border-b border-slate-200 pb-4">
          <TabButton active={activeTab === 'overview'} onClick={() => setActiveTab('overview')}>{t.tab1}</TabButton>
          <TabButton active={activeTab === 'urban'} onClick={() => setActiveTab('urban')}>{t.tab2}</TabButton>
          <TabButton active={activeTab === 'facilities'} onClick={() => setActiveTab('facilities')}>{t.tab3}</TabButton>
          <TabButton active={activeTab === 'gallery'} onClick={() => setActiveTab('gallery')}>{t.tab4}</TabButton>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-6xl mx-auto py-12 px-4 mb-20 min-h-[60vh]">
        
        {/* --- TAB 1: OVERVIEW (Resumen) --- */}
        {activeTab === 'overview' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-slate-900">{t.locTitle}</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">{t.locDesc}</p>
                <ul className="space-y-4">
                  <ListItem icon={<Map />} text={t.locList1} />
                  <ListItem icon={<Palmtree />} text={t.locList2} />
                  <ListItem icon={<Building2 />} text={t.locList3} />
                </ul>
              </div>
              <div 
                className="bg-slate-200 rounded-2xl h-[450px] flex items-center justify-center relative overflow-hidden shadow-lg border border-slate-200 cursor-pointer group"
                onClick={() => setSelectedImage('/img/fachada.png')}
              >
                 <img src="/img/fachada.png" alt="Fachada Principal" className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center">
                    <Maximize className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" size={32} />
                 </div>
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 2: URBAN DATA (La Parte Técnica) --- */}
        {activeTab === 'urban' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">{t.urbanTitle}</h2>
              <p className="text-slate-500 mt-4 max-w-2xl mx-auto">{t.urbanDesc}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
                <h3 className="text-xl font-bold mb-6 flex items-center text-slate-800">
                  <Ruler className="mr-3 text-amber-500" /> {t.plotTitle}
                </h3>
                <div className="space-y-4">
                  <DataRow label={t.row1} value="12.800 m²" />
                  <DataRow label={t.row2} value={t.row2Val} />
                  <DataRow label={t.row3} value="0.422 m² / m²" />
                  <DataRow label={t.row4} value="5.401,6 m²" />
                  <DataRow label={t.row5} value="~ 1.000 m²" />
                  <DataRow label={t.row6} value="4.401,6 m²" highlight={true} />
                  <DataRow label={t.row7} value={t.row7Val} />
                </div>
              </div>

              <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <Info className="mr-3 text-amber-500" /> {t.catTitle}
                  </h3>
                  <div className="space-y-4 text-slate-300">
                    <p><strong className="text-white">{t.catClass}</strong> {t.catClassVal}</p>
                    <p><strong className="text-white">{t.catUse}</strong> {t.catUseVal}</p>
                    <p><strong className="text-white">{t.catYear}</strong> {t.catYearVal}</p>
                  </div>
                </div>
                {/* MAPA CATASTRO */}
                <div 
                  className="mt-6 rounded-xl overflow-hidden h-40 bg-white relative border border-slate-700 cursor-pointer group"
                  onClick={() => setSelectedImage('/img/mapa-catastro.png')}
                >
                   <img src="/img/mapa-catastro.png" alt="Mapa Catastral" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                   <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all">
                      <Maximize className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" size={24} />
                   </div>
                </div>
              </div>
            </div>

            {/* SECCIÓN DE PLANOS */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center justify-center">
                <FileBox className="mr-3 text-amber-500" /> {t.techPlansTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                  <div key={item} className="bg-white p-2 rounded-xl shadow-sm border border-slate-200 group hover:shadow-md transition-shadow">
                    <div 
                      className="bg-slate-100 aspect-video rounded-lg relative overflow-hidden flex items-center justify-center cursor-pointer"
                      onClick={() => setSelectedImage(`/img/plano-${item}.png`)}
                    >
                      <img src={`/img/plano-${item}.png`} alt={`Plano Técnico ${item}`} className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform" />
                      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors z-10 flex items-center justify-center">
                         <Maximize className="text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 rounded-full p-1.5" size={28} />
                      </div>
                    </div>
                    <p className="text-center text-xs font-semibold text-slate-400 mt-3 uppercase tracking-wider">PLANO 0{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 3: FACILITIES (Instalaciones) --- */}
        {activeTab === 'facilities' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">{t.facTitle}</h2>
            <div className="grid md:grid-cols-4 gap-4 mb-16">
              <FloorCard title={t.floor1} area="423,70 m²" desc={t.floor1Desc} />
              <FloorCard title={t.floor2} area="607,75 m²" desc={t.floor2Desc} />
              <FloorCard title={t.floor3} area="317,05 m²" desc={t.floor3Desc} />
              <FloorCard title={t.floor4} area="86,45 m²" desc={t.floor4Desc} />
            </div>
            <hr className="border-slate-200 mb-16" />
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center justify-center">
                <BedDouble className="mr-3 text-amber-500" /> {t.roomTitle}
              </h3>
              <p className="text-slate-500 mt-3">{t.roomDescGeneral}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <RoomCard title={t.room1Title} area="23 m²" desc={t.room1Desc} featured={false} />
              <RoomCard title={t.room2Title} area="32 m²" desc={t.room2Desc} featured={false} />
              <RoomCard title={t.room3Title} area="54 m²" desc={t.room3Desc} featured={true} />
            </div>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 relative overflow-hidden">
              <h3 className="text-2xl font-bold text-slate-900 mb-10 text-center">{t.extTitle}</h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <Amenity icon={<Palmtree />} title={t.ext1Title} desc={t.ext1Desc} />
                <Amenity icon={<Maximize />} title={t.ext2Title} desc={t.ext2Desc} />
                <Amenity icon={<Waves />} title={t.ext3Title} desc={t.ext3Desc} />
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 4: GALLERY (La Parte Bonita) --- */}
        {activeTab === 'gallery' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center flex items-center justify-center gap-3">
              <Camera className="text-amber-500" /> {t.galTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                <div 
                  key={item} 
                  className="bg-slate-200 aspect-[4/3] rounded-2xl flex items-center justify-center text-slate-500 overflow-hidden group relative shadow-sm border border-slate-100 cursor-pointer"
                  onClick={() => setSelectedImage(`/img/carrusel-${item}.png`)}
                >
                  <img src={`/img/carrusel-${item}.png`} alt={`Galería ${item}`} className="w-full h-full object-cover absolute inset-0 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all duration-500 z-10 flex items-center justify-center">
                     <Maximize className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" size={32} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* --- CARRUSEL INFERIOR (Parte Bonita en Bucle) --- */}
      <section className="bg-slate-900 py-12 overflow-hidden border-t border-slate-800">
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
            display: flex;
            width: max-content;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="text-center mb-8">
          <h3 className="text-amber-500 text-sm tracking-[0.2em] uppercase font-semibold">{t.carTitle}</h3>
        </div>
        
        <div className="animate-scroll gap-6 px-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <div 
              key={index} 
              className="w-80 h-52 bg-slate-800 rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden relative group cursor-pointer shadow-lg shadow-black/40"
              onClick={() => setSelectedImage(`/img/carrusel-${item}.png`)}
            >
              <img src={`/img/carrusel-${item}.png`} alt={`Carrusel ${item}`} className="w-full h-full object-cover absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 z-10 flex items-center justify-center">
                 <Maximize className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" size={24} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- MODAL PARA VER FOTO EN GRANDE (ZOOM) --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center overflow-auto"
          onClick={() => { setSelectedImage(null); setIsZoomed(false); }}
        >
          {/* Botón Cerrar */}
          <button 
            className="fixed top-6 right-6 text-white hover:text-amber-500 bg-white/10 hover:bg-white/20 rounded-full p-2 z-[110] transition-colors shadow-lg"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); setIsZoomed(false); }}
          >
            <X size={28} />
          </button>
          
          {/* Imagen (clicable para hacer zoom) */}
          <div className="p-4 md:p-8 flex items-center justify-center min-h-full min-w-full">
            <img 
              src={selectedImage} 
              alt="Vista Ampliada" 
              className={`transition-all duration-300 ease-out shadow-2xl rounded-md ${
                isZoomed 
                  ? "scale-[1.8] md:scale-[2.5] cursor-zoom-out" // Estado con ZOOM
                  : "max-w-[90vw] max-h-[90vh] object-contain cursor-zoom-in" // Estado NORMAL ajustado a pantalla
              }`}
              onClick={(e) => { 
                e.stopPropagation(); 
                setIsZoomed(!isZoomed); // Alternar zoom al hacer clic
              }}
            />
          </div>
        </div>
      )}

      {/* FOOTER CON COPYRIGHT OPENGROUP */}
      <footer className="bg-slate-950 text-slate-400 py-16 text-center">
        <p className="text-sm uppercase tracking-widest font-semibold text-slate-500 mb-3">{t.footerSubtitle}</p>
        <p className="text-2xl text-white font-light tracking-wide mb-8">{t.title1} <span className="font-bold">{t.title2}</span></p>
        
        <div className="border-t border-slate-800/50 pt-8 mt-2 max-w-sm mx-auto">
          <p className="text-xs text-slate-500 tracking-wide font-medium">
            {t.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
};

/* --- COMPONENTS REUTILIZABLES --- */
const Stat = ({ icon, value, label }) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className="mb-4 bg-amber-50 p-3 rounded-full">{icon}</div>
    <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">{value}</div>
    <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">{label}</div>
  </div>
);

const TabButton = ({ children, active, onClick }) => (
  <button onClick={onClick} className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${active ? 'bg-amber-500 text-white shadow-md transform -translate-y-0.5' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}>
    {children}
  </button>
);

const ListItem = ({ icon, text }) => (
  <li className="flex items-start">
    <div className="mt-1 mr-4 text-amber-500 flex-shrink-0 bg-amber-50 p-1.5 rounded-full">{icon}</div>
    <p className="text-slate-700 leading-relaxed">{text}</p>
  </li>
);

const DataRow = ({ label, value, highlight }) => (
  <div className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0">
    <span className="text-slate-600 font-medium text-sm md:text-base">{label}</span>
    <span className={`font-bold text-sm md:text-base ${highlight ? 'text-amber-700 bg-amber-100 px-3 py-1 rounded-md border border-amber-200' : 'text-slate-900'}`}>{value}</span>
  </div>
);

const FloorCard = ({ title, area, desc }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
    <h4 className="font-bold text-lg text-slate-900 mb-1">{title}</h4>
    <p className="text-amber-600 font-bold text-sm mb-3 bg-amber-50 inline-block px-2 py-0.5 rounded">{area}</p>
    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

const RoomCard = ({ title, area, desc, featured }) => (
  <div className={`p-8 rounded-3xl border transition-transform hover:-translate-y-1 duration-300 ${featured ? 'bg-slate-900 text-white border-slate-900 shadow-2xl shadow-slate-900/20' : 'bg-white text-slate-800 border-slate-200 shadow-sm'}`}>
    <div className="flex justify-between items-start mb-6">
      <h4 className="font-bold text-xl w-2/3 leading-tight">{title}</h4>
      <span className={`text-sm font-bold px-3 py-1.5 rounded-full ${featured ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-600'}`}>{area}</span>
    </div>
    <p className={`text-sm leading-relaxed ${featured ? 'text-slate-300' : 'text-slate-600'}`}>{desc}</p>
  </div>
);

const Amenity = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center p-6">
    <div className="h-20 w-20 bg-white border-2 border-amber-50 rounded-full flex items-center justify-center text-amber-500 mb-5 shadow-sm">
      {React.cloneElement(icon, { size: 36 })}
    </div>
    <h4 className="font-bold text-lg text-slate-900 mb-3">{title}</h4>
    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default HotelMojacarDossier;
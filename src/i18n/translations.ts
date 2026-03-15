export const translations = {
  es: {
    // Meta / SEO
    title: 'Marcos a medida | Enmarcaciones El Peñón | Puerto de la Cruz',
    description: 'Marco a medida, marcos aluminio, enmarcaciones Tenerife. Marcos personalizados 40x40, 50x50 y más. Enmarcaciones El Peñón en Puerto de la Cruz.',

    // Hero
    shopName: 'Enmarcaciones El Peñón',
    tagline: 'Marcos a medida para cada momento',
    callUs: 'Llámanos',
    services: ['Fotos', 'Diplomas', 'Dibujos', 'Óleos', 'Espejos', 'Pósters', 'Láminas'],

    // Gallery
    galleryTitle: 'Galería',
    photoComingSoon: 'Foto próximamente',

    // AR Visualizer
    arButton: 'Ver en tu pared',
    arInstruction: 'Apunta a la pared para visualizar el tamaño',
    arCameraError: 'Cámara no disponible',
    arClose: 'Cerrar',

    // Calculator
    calculatorTitle: 'Calculadora de precios',
    widthLabel: 'Ancho (cm)',
    heightLabel: 'Alto (cm)',
    frameTypeLabel: 'Tipo de marco',
    withGlassLabel: '¿Con cristal?',
    glassTypeLabel: 'Tipo de cristal',
    withBackingLabel: '¿Con trasera de cartón?',
    calculateButton: 'Calcular',
    frameCostLabel: 'Coste del marco',
    glassCostLabel: 'Coste del cristal',
    totalLabel: 'Total estimado',
    orderWhatsApp: 'Pedir por WhatsApp',
    whatsappMessage: 'Hola! Me gustaría encargar un marco: {width}x{height}cm, {frameLabel}, {glassLabel}. Precio estimado: €{total}',
    noGlass: 'Sin cristal',

    // Map / Contact
    mapTitle: 'Cómo encontrarnos',
    getDirections: 'Cómo llegar',
    address: 'Transversal C/ Mequínez, 138, Puerto de la Cruz, Tenerife',

    // Footer
    footer: '© {year} Enmarcaciones El Peñón, S.L. Todos los derechos reservados.',

    // Language
    langLabel: 'Idioma',
  },
  de: {
    title: 'Bilderrahmen nach Maß | Enmarcaciones El Peñón | Puerto de la Cruz',
    description: 'Bilderrahmen nach Maß, Aluminiumrahmen, Einrahmungen Teneriffa. Individuelle Rahmen 40x40, 50x50 und mehr. Enmarcaciones El Peñón in Puerto de la Cruz.',

    shopName: 'Enmarcaciones El Peñón',
    tagline: 'Bilderrahmen nach Maß für jeden Moment',
    callUs: 'Rufen Sie uns an',
    services: ['Fotos', 'Diplome', 'Zeichnungen', 'Gemälde', 'Spiegel', 'Poster', 'Drucke'],

    galleryTitle: 'Galerie',
    photoComingSoon: 'Foto kommt bald',

    arButton: 'An deiner Wand',
    arInstruction: 'Richte die Kamera auf die Wand, um die Größe zu sehen',
    arCameraError: 'Kamera nicht verfügbar',
    arClose: 'Schließen',

    calculatorTitle: 'Preisrechner',
    widthLabel: 'Breite (cm)',
    heightLabel: 'Höhe (cm)',
    frameTypeLabel: 'Rahmentyp',
    withGlassLabel: 'Mit Glas?',
    glassTypeLabel: 'Glasart',
    withBackingLabel: 'Mit Kartonrückwand?',
    calculateButton: 'Berechnen',
    frameCostLabel: 'Rahmenkosten',
    glassCostLabel: 'Glaskosten',
    totalLabel: 'Geschätzter Gesamtpreis',
    orderWhatsApp: 'Über WhatsApp bestellen',
    whatsappMessage: 'Hallo! Ich möchte einen Rahmen bestellen: {width}x{height}cm, {frameLabel}, {glassLabel}. Geschätzter Preis: €{total}',
    noGlass: 'Ohne Glas',

    mapTitle: 'So finden Sie uns',
    getDirections: 'Wegbeschreibung',
    address: 'Transversal C/ Mequínez, 138, Puerto de la Cruz, Teneriffa',

    footer: '© {year} Enmarcaciones El Peñón, S.L. Alle Rechte vorbehalten.',

    langLabel: 'Sprache',
  },
  en: {
    title: 'Custom Frames | Enmarcaciones El Peñón | Puerto de la Cruz',
    description: 'Custom frames, aluminium frames, framing in Tenerife. Personalised frames 40x40, 50x50 and more. Enmarcaciones El Peñón in Puerto de la Cruz.',

    shopName: 'Enmarcaciones El Peñón',
    tagline: 'Custom frames for every moment',
    callUs: 'Call us',
    services: ['Photos', 'Diplomas', 'Drawings', 'Paintings', 'Mirrors', 'Posters', 'Prints'],

    galleryTitle: 'Gallery',
    photoComingSoon: 'Photo coming soon',

    arButton: 'See on your wall',
    arInstruction: 'Point at the wall to visualise the size',
    arCameraError: 'Camera not available',
    arClose: 'Close',

    calculatorTitle: 'Price calculator',
    widthLabel: 'Width (cm)',
    heightLabel: 'Height (cm)',
    frameTypeLabel: 'Frame type',
    withGlassLabel: 'With glass?',
    glassTypeLabel: 'Glass type',
    withBackingLabel: 'With cardboard backing?',
    calculateButton: 'Calculate',
    frameCostLabel: 'Frame cost',
    glassCostLabel: 'Glass cost',
    totalLabel: 'Estimated total',
    orderWhatsApp: 'Order via WhatsApp',
    whatsappMessage: 'Hi! I would like to order a frame: {width}x{height}cm, {frameLabel}, {glassLabel}. Estimated price: €{total}',
    noGlass: 'No glass',

    mapTitle: 'How to find us',
    getDirections: 'Get directions',
    address: 'Transversal C/ Mequínez, 138, Puerto de la Cruz, Tenerife',

    footer: '© {year} Enmarcaciones El Peñón, S.L. All rights reserved.',

    langLabel: 'Language',
  },
} as const;

export type Lang = keyof typeof translations;
export type TranslationKey = keyof typeof translations['es'];

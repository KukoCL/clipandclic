export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: 'utiles' | 'navidad' | 'mouses' | 'audio' | 'cables' | 'almacenamiento';
  image?: string;
};

export const products: Product[] = [
  // Útiles Escolares
  {
    id: 1,
    title: 'Cuaderno Espiral A4',
    description: 'Cuaderno de alta calidad con 100 hojas rayadas, perfecto para estudiantes.',
    price: 5990,
    category: 'utiles',
  },
  {
    id: 2,
    title: 'Set de Lápices de Colores',
    description: 'Set de 24 lápices de colores profesionales para arte y creatividad.',
    price: 8990,
    category: 'utiles',
  },
  {
    id: 3,
    title: 'Mochila Ergonómica',
    description: 'Mochila escolar ergonómica con múltiples compartimientos y soporte lumbar.',
    price: 34990,
    category: 'utiles',
  },
  {
    id: 4,
    title: 'Estuche Organizador',
    description: 'Estuche con compartimientos para organizar útiles y materiales escolares.',
    price: 12990,
    category: 'utiles',
  },
  {
    id: 5,
    title: 'Calculadora Científica',
    description: 'Calculadora científica con funciones avanzadas para estudiantes de matemática.',
    price: 24990,
    category: 'utiles',
  },
  {
    id: 6,
    title: 'Marcadores Permanentes',
    description: 'Set de 12 marcadores permanentes con colores vibrantes y durables.',
    price: 6990,
    category: 'utiles',
  },

  // Especial Navidad
  {
    id: 7,
    title: 'Set de Regalos Navideños',
    description: 'Set especial de navidad con útiles escolares y accesorios temáticos.',
    price: 49990,
    category: 'navidad',
  },
  {
    id: 8,
    title: 'Luminarias LED Navideñas',
    description: 'Luces LED navideñas para decoración de espacios de estudio.',
    price: 19990,
    category: 'navidad',
  },
  {
    id: 9,
    title: 'Adorno Escritorio Navidad',
    description: 'Adornos navideños para decorar tu espacio de trabajo y estudio.',
    price: 9990,
    category: 'navidad',
  },
  {
    id: 10,
    title: 'Paquete Premium Navidad',
    description: 'Pack premium con productos tecnológicos y accesorios para navidad.',
    price: 79990,
    category: 'navidad',
  },

  // Tecnología - Mouses/Teclados
  {
    id: 11,
    title: 'Mouse Inalámbrico Logitech',
    description: 'Mouse inalámbrico ergonómico con batería de larga duración.',
    price: 19990,
    category: 'mouses',
  },
  {
    id: 12,
    title: 'Teclado Mecánico RGB',
    description: 'Teclado mecánico gaming con iluminación RGB y switches de calidad.',
    price: 59990,
    category: 'mouses',
  },
  {
    id: 13,
    title: 'Combo Mouse + Teclado',
    description: 'Combo inalámbrico de mouse y teclado con receptor USB unificado.',
    price: 44990,
    category: 'mouses',
  },
  {
    id: 14,
    title: 'Mouse Gamer Profesional',
    description: 'Mouse gamer con 7 botones programables y sensor de alta precisión.',
    price: 34990,
    category: 'mouses',
  },

  // Tecnología - Audio
  {
    id: 15,
    title: 'Auriculares Inalámbricos',
    description: 'Auriculares bluetooth con cancelación de ruido y 30 horas de batería.',
    price: 79990,
    category: 'audio',
  },
  {
    id: 16,
    title: 'Parlante Portátil Bluetooth',
    description: 'Parlante portátil resistente al agua con batería de 20 horas.',
    price: 49990,
    category: 'audio',
  },
  {
    id: 17,
    title: 'Micrófono USB Condenser',
    description: 'Micrófono profesional para streaming y podcasts con soporte incluido.',
    price: 54990,
    category: 'audio',
  },
  {
    id: 18,
    title: 'Headset Gamer',
    description: 'Headset gaming con micrófono integrado, 7.1 surround y confort duradero.',
    price: 69990,
    category: 'audio',
  },

  // Tecnología - Cables
  {
    id: 19,
    title: 'Cable USB-C 2m',
    description: 'Cable USB-C de carga rápida certificado, compatible con múltiples dispositivos.',
    price: 12990,
    category: 'cables',
  },
  {
    id: 20,
    title: 'Cable HDMI 4K',
    description: 'Cable HDMI 2.1 para transmisión 4K a 120Hz con conectores reforzados.',
    price: 9990,
    category: 'cables',
  },
  {
    id: 21,
    title: 'Set 5 Cables Variados',
    description: 'Set de 5 cables: USB-C, Lightning, Micro USB, HDMI y adaptador.',
    price: 29990,
    category: 'cables',
  },
  {
    id: 22,
    title: 'Cable Ethernet CAT6',
    description: 'Cable de red CAT6 de 10m con velocidad gigabit y blindaje mejorado.',
    price: 14990,
    category: 'cables',
  },

  // Tecnología - Almacenamiento
  {
    id: 23,
    title: 'SSD 500GB',
    description: 'SSD externo portátil 500GB USB 3.0 con velocidades de lectura ultrarrápidas.',
    price: 49990,
    category: 'almacenamiento',
  },
  {
    id: 24,
    title: 'Pendrive 128GB',
    description: 'Pendrive 128GB USB 3.1 ultrarrápido con diseño compacto y resistente.',
    price: 16990,
    category: 'almacenamiento',
  },
  {
    id: 25,
    title: 'Disco Duro Externo 1TB',
    description: 'Disco duro externo 1TB con batería de backup y compatibilidad universal.',
    price: 69990,
    category: 'almacenamiento',
  },
  {
    id: 26,
    title: 'SSD Externo 1TB',
    description: 'SSD externo 1TB portátil con velocidades de lectura hasta 1050MB/s.',
    price: 89990,
    category: 'almacenamiento',
  },
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

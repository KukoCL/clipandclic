import type { Product } from '@/infrastructure/types';

const getImagePath = (filename: string): string => {
  return `${import.meta.env.BASE_URL}images/products/${filename}`;
};

export const products: Product[] = [
  // Útiles Escolares
  {
    id: 1,
    title: 'Cuaderno Espiral A4',
    description: 'Cuaderno de alta calidad con 100 hojas rayadas, perfecto para estudiantes.',
    price: 5990,
    category: 'utiles',
    images: ['https://picsum.photos/400/300?random=1'],
  },
  {
    id: 2,
    title: 'Set de Lápices de Colores',
    description: 'Set de 24 lápices de colores profesionales para arte y creatividad.',
    price: 8990,
    category: 'utiles',
    images: ['https://picsum.photos/400/300?random=2'],
  },
  {
    id: 3,
    title: 'Mochila Ergonómica',
    description: 'Mochila escolar ergonómica con múltiples compartimientos y soporte lumbar.',
    price: 34990,
    category: 'utiles',
    images: ['https://picsum.photos/400/300?random=3'],
  },
  {
    id: 4,
    title: 'Estuche Organizador',
    description: 'Estuche con compartimientos para organizar útiles y materiales escolares.',
    price: 12990,
    category: 'utiles',
    images: ['https://picsum.photos/400/300?random=4'],
  },
  {
    id: 5,
    title: 'Calculadora Científica',
    description: 'Calculadora científica con funciones avanzadas para estudiantes de matemática.',
    price: 24990,
    category: 'utiles',
    images: ['https://picsum.photos/400/300?random=5'],
  },
  {
    id: 6,
    title: 'Marcadores Permanentes',
    description: 'Set de 12 marcadores permanentes con colores vibrantes y durables.',
    price: 6990,
    category: 'utiles',
    images: ['https://picsum.photos/400/300?random=6'],
  },

  // Especial Navidad
  {
    id: 7,
    title: 'Papel de Regalo Navideño',
    description: 'Papel de regalo navideño 70x100cm 1 pliego Libesa, variedades de diseños navideños.',
    price: 49990,
    category: 'navidad',
    inBanner: true,
    images: [
      getImagePath('PAPEL DE REGALO NAVIDEÑO 70X100CM 1 PLIEGO LIBESA ADORNOS.png'),
      getImagePath('PAPEL DE REGALO NAVIDEÑO 70X100CM 1 PLIEGO LIBESA BOTAS.jpg'),
      getImagePath('PAPEL_DE_REGALO_NAVIDEÑO_70X100CM_1_PLIEGO_LIBESA_MERRY_CHRISTMAS.png'),
      getImagePath('PAPEL DE REGALO NAVIDEÑO 70X100CM 1 PLIEGO LIBESA PASCUERO.jpg'),
    ],
  },
  {
    id: 9,
    title: 'Etiquetas Navideñas Autoadhesivas',
    description: 'Etiquetas navideñas autoadhesivas y papel de regalo navideño Merry Christmas, variedades de diseños.',
    price: 9990,
    category: 'navidad',
    inBanner: true,
    images: [
      getImagePath('ETIQUEAS NAVIDEÑAS AUTOADHESIVAS.jpg'),
    ],
  },
  {
    id: 10,
    title: 'Cinta Mágica Lisa',
    description:
      'Cinta mágica lisa 2.7x48cm, variedades de colores (dorada, plata, roja, verde) para decoración.',
    price: 79990,
    category: 'navidad',
    inBanner: true,
    images: [
      getImagePath('CINTA MAGICA LISA DORADA 2,7X48CM.png'),
      getImagePath('CINTA MAGICA LISA PLATA 2,7X48CM.png'),
      getImagePath('CINTA MAGICA LISA ROJA 2,7X48CM.png'),
      getImagePath('CINTA MAGICA LISA VERDE 2,7X48CM.png'),
    ],
  },
  {
    id: 11,
    title: 'Cinta Adhesiva Ancha',
    description: 'Cinta adhesiva ancha 12mm x 30mts Nuovo, resistente y de larga duración.',
    price: 2990,
    category: 'navidad',
    inBanner: true,
    images: [getImagePath('CINTA ADHESIVA ANCHA 12MMX30MTS NUOVO.png')],
  },

  // Tecnología - Mouses/Teclados
  {
    id: 12,
    title: 'Mouse Inalámbrico Logitech',
    description: 'Mouse inalámbrico ergonómico con batería de larga duración.',
    price: 19990,
    category: 'mouses-teclados',
    images: ['https://picsum.photos/400/300?random=11'],
  },
  {
    id: 13,
    title: 'Teclado Mecánico RGB',
    description: 'Teclado mecánico gaming con iluminación RGB y switches de calidad.',
    price: 59990,
    category: 'mouses-teclados',
    images: ['https://picsum.photos/400/300?random=12'],
  },
  {
    id: 14,
    title: 'Combo Mouse + Teclado',
    description: 'Combo inalámbrico de mouse y teclado con receptor USB unificado.',
    price: 44990,
    category: 'mouses-teclados',
    images: ['https://picsum.photos/400/300?random=13'],
  },
  {
    id: 15,
    title: 'Mouse Gamer Profesional',
    description: 'Mouse gamer con 7 botones programables y sensor de alta precisión.',
    price: 34990,
    category: 'mouses-teclados',
    images: ['https://picsum.photos/400/300?random=14'],
  },

  // Tecnología - Audio
  {
    id: 16,
    title: 'Auriculares Inalámbricos',
    description: 'Auriculares bluetooth con cancelación de ruido y 30 horas de batería.',
    price: 79990,
    category: 'audio',
    images: ['https://picsum.photos/400/300?random=15'],
  },
  {
    id: 17,
    title: 'Parlante Portátil Bluetooth',
    description: 'Parlante portátil resistente al agua con batería de 20 horas.',
    price: 49990,
    category: 'audio',
    images: ['https://picsum.photos/400/300?random=16'],
  },
  {
    id: 18,
    title: 'Micrófono USB Condenser',
    description: 'Micrófono profesional para streaming y podcasts con soporte incluido.',
    price: 54990,
    category: 'audio',
    images: ['https://picsum.photos/400/300?random=17'],
  },
  {
    id: 19,
    title: 'Headset Gamer',
    description: 'Headset gaming con micrófono integrado, 7.1 surround y confort duradero.',
    price: 69990,
    category: 'audio',
    images: ['https://picsum.photos/400/300?random=18'],
  },

  // Tecnología - Cables
  {
    id: 20,
    title: 'Cable USB-C 2m',
    description: 'Cable USB-C de carga rápida certificado, compatible con múltiples dispositivos.',
    price: 12990,
    category: 'cables',
    images: ['https://picsum.photos/400/300?random=19'],
  },
  {
    id: 21,
    title: 'Cable HDMI 4K',
    description: 'Cable HDMI 2.1 para transmisión 4K a 120Hz con conectores reforzados.',
    price: 9990,
    category: 'cables',
    images: ['https://picsum.photos/400/300?random=20'],
  },
  {
    id: 22,
    title: 'Set 5 Cables Variados',
    description: 'Set de 5 cables: USB-C, Lightning, Micro USB, HDMI y adaptador.',
    price: 29990,
    category: 'cables',
    images: ['https://picsum.photos/400/300?random=21'],
  },
  {
    id: 23,
    title: 'Cable Ethernet CAT6',
    description: 'Cable de red CAT6 de 10m con velocidad gigabit y blindaje mejorado.',
    price: 14990,
    category: 'cables',
    images: ['https://picsum.photos/400/300?random=22'],
  },

  // Tecnología - Almacenamiento
  {
    id: 24,
    title: 'SSD 500GB',
    description: 'SSD externo portátil 500GB USB 3.0 con velocidades de lectura ultrarrápidas.',
    price: 49990,
    category: 'almacenamiento',
    images: ['https://picsum.photos/400/300?random=23'],
  },
  {
    id: 25,
    title: 'Pendrive 128GB',
    description: 'Pendrive 128GB USB 3.1 ultrarrápido con diseño compacto y resistente.',
    price: 16990,
    category: 'almacenamiento',
    images: ['https://picsum.photos/400/300?random=24'],
  },
  {
    id: 26,
    title: 'Disco Duro Externo 1TB',
    description: 'Disco duro externo 1TB con batería de backup y compatibilidad universal.',
    price: 69990,
    category: 'almacenamiento',
    images: ['https://picsum.photos/400/300?random=25'],
  },
  {
    id: 27,
    title: 'SSD Externo 1TB',
    description: 'SSD externo 1TB portátil con velocidades de lectura hasta 1050MB/s.',
    price: 89990,
    category: 'almacenamiento',
    images: ['https://picsum.photos/400/300?random=26'],
  },
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
  {
    id: '329944b2-1237-4271-9876-aaa4b6a6882a',
    name: 'admin',
    email: 'admin@admin.com',
    password: 'admin',
  },
];

const customers = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Hector Simpson',
    email: 'hector@simpson.com',
    image_url: '/customers/hector-simpson.png',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Steven Tey',
    email: 'steven@tey.com',
    image_url: '/customers/steven-tey.png',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Steph Dietz',
    email: 'steph@dietz.com',
    image_url: '/customers/steph-dietz.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    name: 'Emil Kowalski',
    email: 'emil@kowalski.com',
    image_url: '/customers/emil-kowalski.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[7].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[6].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-18',
  },
  {
    customer_id: customers[0].id,
    amount: 8945,
    status: 'paid',
    date: '2023-10-04',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

const products = [
  {
    name: 'Yerba',
    price: '48',
    imageSrc: '/yerba.png',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    description: 'Yerba mate de alta calidad, ideal para preparar una infusión energizante y tradicional.'
  },
  {
    name: 'Poroto',
    price: '35',
    imageSrc:  '/porotos.png',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    description: 'Porotos frescos y nutritivos, perfectos para guisos, ensaladas y platos vegetarianos.'
  },
  {
    name: 'Lenteja',
    price: '89',
    imageSrc:  '/lentejas.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    description: 'Lentejas de excelente calidad, ricas en proteínas y fibra, ideales para una dieta equilibrada.'
  },
  {
    name: 'Alfajor',
    price: '35',
    imageSrc:  '/alfajor.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    description: 'Delicioso alfajor relleno de dulce de leche y cubierto con chocolate, una clásica golosina argentina.'
  },
  {
    name: 'Quinoa',
    price: '120',
    imageSrc: '/quinoa.jpg',
    imageAlt: 'Granos de quinoa en un bol de madera.',
    description: 'Quinoa orgánica, alta en proteínas y perfecta para ensaladas y platos principales.'
  },
  {
    name: 'Chía',
    price: '60',
    imageSrc: '/chia.jpg',
    imageAlt: 'Semillas de chía en una cuchara de madera.',
    description: 'Semillas de chía ricas en omega-3 y fibra, ideales para batidos y yogures.'
  },
  {
    name: 'Almendra',
    price: '200',
    imageSrc: '/almendra.jpeg',
    imageAlt: 'Un puñado de almendras en una mesa de madera.',
    description: 'Almendras crudas, ricas en vitamina E y grasas saludables, ideales para snacks y repostería.'
  },
  {
    name: 'Avena',
    price: '75',
    imageSrc: '/avena.jpg',
    imageAlt: 'Copos de avena en un bol blanco.',
    description: 'Avena integral, ideal para desayunos energéticos y saludables.'
  },
  {
    name: 'Arroz Integral',
    price: '90',
    imageSrc: '/arroz_integral.jpg',
    imageAlt: 'Granos de arroz integral en una bolsa de papel.',
    description: 'Arroz integral, alto en fibra y nutrientes, perfecto para una alimentación balanceada.'
  },
  {
    name: 'Sésamo',
    price: '50',
    imageSrc: '/sesamo.jpg',
    imageAlt: 'Semillas de sésamo en un bol de cerámica.',
    description: 'Semillas de sésamo, ricas en minerales y perfectas para ensaladas y panes.'
  },
  {
    name: 'Harina de Coco',
    price: '120',
    imageSrc: '/harina_coco.jpg',
    imageAlt: 'Harina de coco en un tarro de vidrio.',
    description: 'Harina de coco, sin gluten y baja en carbohidratos, ideal para recetas saludables.'
  },
  {
    name: 'Cacao',
    price: '140',
    imageSrc: '/cacao.jpg',
    imageAlt: 'Polvo de cacao en un tarro de vidrio.',
    description: 'Cacao puro y natural, perfecto para bebidas y postres con un toque saludable.'
  },
  {
    name: 'Galletas de Avena',
    price: '50',
    imageSrc: '/galletas_avena.jpeg',
    imageAlt: 'Galletas de avena en un plato de cerámica.',
    description: 'Galletas crujientes de avena, ideales para una merienda saludable y nutritiva.'
  },
  {
    name: 'Muffins de Chocolate',
    price: '80',
    imageSrc: '/muffins_chocolate.jpg',
    imageAlt: 'Muffins de chocolate con chispas en una bandeja.',
    description: 'Deliciosos muffins de chocolate, perfectos para acompañar con un café o té.'
  },
  {
    name: 'Barritas de Cereal',
    price: '60',
    imageSrc: '/barritas_cereal.jpg',
    imageAlt: 'Barritas de cereal envueltas individualmente.',
    description: 'Barritas de cereal con frutas, ideales para una merienda rápida y energética.'
  },
  {
    name: 'Galletas Integrales',
    price: '55',
    imageSrc: '/galletas_integrales.jpg',
    imageAlt: 'Galletas integrales en una bandeja de madera.',
    description: 'Galletas integrales ricas en fibra, perfectas para un snack saludable.'
  },
  {
    name: 'Brownies',
    price: '100',
    imageSrc: '/brownies.jpg',
    imageAlt: 'Brownies de chocolate en un plato blanco.',
    description: 'Deliciosos brownies de chocolate, ideales para un postre o merienda dulce.'
  },
  {
    name: 'Queso Vegano',
    price: '120',
    imageSrc: '/queso_vegano.jpg',
    imageAlt: 'Bloque de queso vegano.',
    description: 'Queso vegano en paquete, perfecto para sandwiches y recetas saludables.'
  },
  {
    name: 'Tofu',
    price: '80',
    imageSrc: '/tofu.jpeg',
    imageAlt: 'Bloque de tofu con vegetales.',
    description: 'Tofu en paquete, ideal para platos vegetarianos y veganos.'
  },
  {
    name: 'Alfajor Vegano',
    price: '50',
    imageSrc: '/alfajor_vegano.jpg',
    imageAlt: 'Alfajor vegano.',
    description: 'Pack de alfajor vegano, delicioso y libre de productos animales.'
  },
  {
    name: 'Helado Vegano',
    price: '150',
    imageSrc: '/helado_vegano.jpg',
    imageAlt: 'Tarrina de helado vegano.',
    description: 'Tarrina de helado vegano, ideal para un postre refrescante y saludable.'
  },
  {
    name: 'Té',
    price: '40',
    imageSrc: '/te.jpg',
    imageAlt: 'Taza de té caliente.',
    description: 'Paquete de té, perfecto para una bebida caliente y relajante.'
  },
  {
    name: 'Hamburguesas de Porotos',
    price: '100',
    imageSrc: '/hamburguesas_porotos.jpeg',
    imageAlt: 'Hamburguesas de porotos.',
    description: 'Pack de hamburguesas de porotos, ideal para una comida vegana y nutritiva.'
  },
  {
    name: 'Milanesas de Seitan',
    price: '110',
    imageSrc: '/milanesas_seitan.jpg',
    imageAlt: 'Milanesas de seitan.',
    description: 'Pack de milanesas de seitan, perfecto para una comida vegana y rica en proteínas.'
  }

  // More products...
]


module.exports = {
  users,
  customers,
  invoices,
  revenue,
  products,
};

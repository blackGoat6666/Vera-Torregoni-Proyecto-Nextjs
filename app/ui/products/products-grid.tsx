import Image from 'next/image';

const products = [
    {
      id: 1,
      name: 'Yerba',
      href: '#',
      price: '$48',
      imageSrc: '/yerba.png',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Poroto',
      href: '#',
      price: '$35',
      imageSrc:  '/porotos.png',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Lenteja',
      href: '#',
      price: '$89',
      imageSrc:  '/lentejas.png',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Alfajor',
      href: '#',
      price: '$35',
      imageSrc:  '/alfajor.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Poroto',
      href: '#',
      price: '$35',
      imageSrc:  '/porotos.png',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 6,
      name: 'Lenteja',
      href: '#',
      price: '$89',
      imageSrc:  '/lentejas.png',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 7,
      name: 'Alfajor',
      href: '#',
      price: '$35',
      imageSrc:  '/alfajor.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]

  export default function ProductsGrid() {
    return (   
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 p-2 pt-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width={500}
                  height={300}
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
    )
  }
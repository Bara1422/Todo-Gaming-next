export const formatPrice = (price) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS'
  }).format(price)
}

export const products = [
  {
    name: 'Placa de Video Gigabyte Radeon RX 590 Gaming 8GB GDDR5',
    imgUrl: '/img/rx590.jpg',
    categoryId: 1,
    price: 40000
  },
  {
    name: 'Micro AMD Ryzen 5 5600 - 6 Nucleos / 12 Threads 4.4Ghz AM4',
    imgUrl: '/img/imagen.png',
    categoryId: 3,
    price: 50000
  },
  {
    name: 'Mother Gigabyte GA-A320M-H DDR4 USB3.1 AM4',
    imgUrl: '/img/mother_a320m.png',
    categoryId: 2,
    price: 47000
  },
  {
    name: 'Micro Intel Core I5 11400 6 Núcleos / 12 Threads HT 4.4Ghz (11va Gen) LGA1200',
    imgUrl: '/img/i511400.png',
    categoryId: 3,
    price: 47000
  },
  {
    name: 'Mother MSI H310M PRO-VDH (8va/9na Gen) S1151',
    imgUrl: '/img/msih310m.jpg',
    categoryId: 2,
    price: 12000
  },
  {
    name: 'Placa de Video Palit NVIDIA GeForce GTX 1660 DUAL 6GB GDDR5',
    imgUrl: '/1660.png',
    categoryId: 1,
    price: 65000
  }
]

export const arraySections = [
  {
    section: 'Placas de Video'
  },
  {
    section: 'Motherboard'
  },
  {
    section: 'Microprocesador'
  }
]

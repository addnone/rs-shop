// {
//   "id": "612dc77a81234c2a49350b06",
//   "name": "Стеклоочиститель Bosch GlassVac (0.600.8B7.000)",
//   "imageUrls": [
//     "https://cdn21vek.by/img/galleries/902/805/preview_b/glassvac_bosch_5c7fe0363852e.jpeg",
//     "https://cdn21vek.by/img/galleries/902/805/preview_b/glassvac_bosch_5c7fe03fc5b03.jpeg",
//     "https://cdn21vek.by/img/galleries/902/805/preview_b/glassvac_bosch_5c7fe0446e1a3.jpeg"
//   ],
//   "rating": 3,
//   "availableAmount": 7,
//   "price": 190.28,
//   "description": "nostrud ad est eu esse eu cillum Lorem pariatur ullamco eu aute est sunt tempor pariatur do cillum incididunt enim esse ut labore fugiat aliqua elit dolore non commodo fugiat qui anim velit sint eiusmod tempor velit voluptate non sunt",
//   "isInCart": false,
//   "isFavorite": false,
//   "category": "appliances",
//   "subCategory": "vacuum"
// }

export interface IProduct {
  id: string,
  name: string,
  imageUrls: string[],
  rating: number,
  availableAmount: number,
  price: number,
  description: string,
  isInCart: boolean,
  isFavorite: boolean,
  category: string,
  subCategory: string
}

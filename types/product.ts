export interface Product {
  id: string
  slug: string
  nameAr: string
  nameFull: string
  tagline: string
  price: number
  accentColor: string
  rating: number
  reviewCount: number
  stock: number
  imageUrl: string
  ingredients: Ingredient[]
  claims: string[]
  howToUse: string[]
  faqs: FAQ[]
}

export interface Ingredient {
  name: string
  nameAr: string
  benefit: string
}

export interface FAQ {
  q: string
  a: string
}

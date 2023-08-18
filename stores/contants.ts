export type TProduct = {
  id: Number;
  name: String;
  price: Number;
  createdAt: String;
  defaultImageUrl: String;
};

export type TProductStoreState = {
  products: TProduct[];
};

export const PRODUCT_STORE = "products";

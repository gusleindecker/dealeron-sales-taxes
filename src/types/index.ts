export interface Product {
  id: string;
  name: string;
  isImported: boolean;
  price: number;
  quantity?: number;
  category: string;
}

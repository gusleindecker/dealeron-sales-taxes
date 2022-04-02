import { Product } from '../types';

export const productList: Product[] = [
  { id: '1', name: 'Book', isImported: false, price: 12.49, category: 'books' },
  {
    id: '2',
    name: 'Music CD',
    isImported: false,
    price: 14.99,
    category: 'music',
  },
  {
    id: '3',
    name: 'Chocolate bar',
    isImported: false,
    price: 0.85,
    category: 'food',
  },
  {
    id: '4',
    name: 'Imported box of chocolates',
    isImported: true,
    price: 10.0,
    category: 'food',
  },
  {
    id: '5',
    name: 'Imported bottle of perfume',
    isImported: true,
    price: 47.5,
    category: 'hygiene and beauty',
  },
  {
    id: '6',
    name: 'Bottle of perfume',
    isImported: false,
    price: 18.99,
    category: 'hygiene and beauty',
  },
  {
    id: '7',
    name: 'Packet of headache pills',
    isImported: false,
    price: 9.75,
    category: 'medical',
  },
  {
    id: '8',
    name: 'Imported box of chocolates',
    isImported: true,
    price: 11.25,
    category: 'food',
  },
  {
    id: '9',
    name: 'Imported bottle of perfume',
    isImported: true,
    price: 27.99,
    category: 'hygiene and beauty',
  },
];

export const input1: Product[] = [
  { ...productList[0], quantity: 1 },
  { ...productList[0], quantity: 1 },
  { ...productList[1], quantity: 1 },
  { ...productList[2], quantity: 1 },
];

export const input2: Product[] = [
  { ...productList[3], quantity: 1 },
  { ...productList[4], quantity: 1 },
];

export const input3: Product[] = [
  { ...productList[8], quantity: 1 },
  { ...productList[5], quantity: 1 },
  { ...productList[6], quantity: 1 },
  { ...productList[7], quantity: 1 },
  { ...productList[7], quantity: 1 },
];

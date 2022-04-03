import React, { useState, useEffect } from 'react';
import { TrashIcon } from '@heroicons/react/solid';
import AddProductDialog from './components/add-product-dialog.component';
import ReceiptDialog from './components/receipt-dialog';
import { Product } from './types';
import { input1, input2, input3 } from './mocks';

function App() {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [shoppingBasketInput, setShoppingBasketInput] = useState('');

  const onAddProduct = (product: Product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  const onRemoveAllProducts = () => {
    setSelectedProducts([]);
  };

  const setInput1 = () => {
    setSelectedProducts(input1);
  };

  const setInput2 = () => {
    setSelectedProducts(input2);
  };

  const setInput3 = () => {
    setSelectedProducts(input3);
  };

  useEffect(() => {
    const newShoppingBasketInput = selectedProducts
      .map(
        (product) =>
          `${product.quantity} ${product.name} at ${product.price.toFixed(2)}`
      )
      .join('\r\n');
    setShoppingBasketInput(newShoppingBasketInput);
  }, [selectedProducts]);

  return (
    <div className="min-h-screen bg-indigo-100 p-4">
      <header>
        <p className="text-center text-3xl font-bold text-indigo-900">
          Sales Taxes Calculator
        </p>
        <p className="text-center text-l font-medium text-indigo-700">
          DealerOn Development Candidate Code Test
        </p>
      </header>
      <div className="flex justify-center">
        <label
          htmlFor="shopping-basket-input"
          className="flex flex-col font-semibold mt-4 mr-4 text-indigo-900"
        >
          Added Products (Input)
          <textarea
            className="mt-1 ml-0 w-full"
            name="shopping-basket-input"
            id="shopping-basket-input"
            cols={35}
            rows={14}
            value={shoppingBasketInput}
            readOnly
            placeholder="No products added."
          />
        </label>
        <div className="mt-11 flex flex-col">
          <AddProductDialog onAddProductHandler={onAddProduct} />
          <button
            type="button"
            className="bg-indigo-400 text-white font-bold py-2 px-4 rounded-md flex items-center mt-2 w-full hover:bg-indigo-600 transition-colors duration-200 disabled:bg-slate-300 disabled:cursor-not-allowed disabled:hover:bg-slate-300"
            onClick={setInput1}
          >
            Add Input 1
          </button>
          <button
            type="button"
            className="bg-indigo-400 text-white font-bold py-2 px-4 rounded-md flex items-center mt-2 w-full hover:bg-indigo-600 transition-colors duration-200 disabled:bg-slate-300 disabled:cursor-not-allowed disabled:hover:bg-slate-300"
            onClick={setInput2}
          >
            Add Input 2
          </button>
          <button
            type="button"
            className="bg-indigo-400 text-white font-bold py-2 px-4 rounded-md flex items-center mt-2 w-full hover:bg-indigo-600 transition-colors duration-200 disabled:bg-slate-300 disabled:cursor-not-allowed disabled:hover:bg-slate-300"
            onClick={setInput3}
          >
            Add Input 3
          </button>
          <button
            type="button"
            className="bg-pink-500 text-white font-bold py-2 px-4 rounded-md flex items-center mt-6 w-full hover:bg-pink-700 transition-colors duration-200 disabled:bg-slate-300 disabled:cursor-not-allowed disabled:hover:bg-slate-300"
            onClick={onRemoveAllProducts}
            disabled={selectedProducts.length === 0}
          >
            Remove Products
            <TrashIcon className="ml-3 h-5 w-5" />
          </button>
          <ReceiptDialog selectedProducts={selectedProducts} />
        </div>
      </div>
    </div>
  );
}

export default App;

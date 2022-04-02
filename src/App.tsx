import React, { useState, useEffect } from 'react';
import { TrashIcon } from '@heroicons/react/solid';
import AddProductDialog from './components/add-product-dialog.component';
import ReceiptDialog from './components/receipt-dialog';
import { Product } from './types';

function App() {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [shoppingBasketInput, setShoppingBasketInput] = useState('');

  const onAddProduct = (product: Product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  const onRemoveAllProducts = () => {
    setSelectedProducts([]);
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
        <p className="text-center text-3xl font-bold">Sales Taxes Calculator</p>
        <p className="text-center text-l font-medium">
          DealerOn Development Candidate Code Test
        </p>
      </header>
      <div className="flex justify-center">
        <label
          htmlFor="shopping-basket-input"
          className="flex flex-col font-semibold mt-4 mr-4"
        >
          Added Products (Input)
          <textarea
            className="mt-1 w-full border-gray-300 rounded-md shadow-sm"
            name="shopping-basket-input"
            id="shopping-basket-input"
            cols={30}
            rows={10}
            value={shoppingBasketInput}
            readOnly
            placeholder="No products added."
          />
        </label>
        <div className="mt-11 flex flex-col">
          <AddProductDialog onAddProductHandler={onAddProduct} />
          <button
            type="button"
            className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-md flex items-center mt-2 w-full"
            onClick={onRemoveAllProducts}
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

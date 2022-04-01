import React, { useState } from 'react';
import AddProductDialog from './components/add-product-dialog.component';
import { Product } from './types';

function App() {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const onAddProduct = (product: Product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  return (
    <div className="min-h-screen bg-indigo-100 p-4">
      <header>
        <p className="text-center text-3xl font-bold">Sales Taxes Calculator</p>
        <p className="text-center text-l font-medium">
          DealerOn Development Candidate Code Test
        </p>
      </header>
      <hr />
      <div className="mt-2">
        <AddProductDialog onAddProductHandler={onAddProduct} />
      </div>
      <div>
        {selectedProducts.length ? (
          <div>
            <h2 className="text-center text-2xl font-bold">
              Selected Products
            </h2>
            <ul>
              {selectedProducts.map((product) => (
                <li key={product.id}>
                  {product.name} - {product.quantity}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;

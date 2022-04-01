import React, { Fragment, useState, useCallback } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { PlusCircleIcon } from '@heroicons/react/solid';
import ProductListbox from './product-listbox.component';
import { Product } from '../types';

interface AddProductDialogProps {
  onAddProductHandler: (_product: Product) => void;
}

export default function AddProductDialog({
  onAddProductHandler,
}: AddProductDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [productQuantity, setProductQuantity] = useState(1);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setSelectedProduct(null);
  }, [setIsOpen]);

  const addProduct = () => {
    const product = {
      ...(selectedProduct as Product),
      quantity: productQuantity,
    };
    onAddProductHandler(product);
    closeModal();
  };

  // eslint-disable-next-line no-console
  console.log('selectedProduct:', selectedProduct);

  return (
    <>
      <div className="flex">
        <button
          type="button"
          onClick={openModal}
          className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-md flex items-center"
        >
          Add Product
          <PlusCircleIcon className="ml-3 h-5 w-5" />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="mt-2">
                  <ProductListbox
                    selectedProduct={selectedProduct}
                    setSelectedProduct={setSelectedProduct}
                  />
                  <div className="mt-4">
                    {selectedProduct ? (
                      <div className="border rounded-md px-4 py-4">
                        <label
                          htmlFor="product-name"
                          className="font-bold mr-1"
                        >
                          Product Name:
                          <input
                            type="text"
                            name="product-name"
                            id="product-name"
                            value={selectedProduct.name}
                            readOnly
                          />
                        </label>
                        <label
                          htmlFor="product-price"
                          className="font-bold mr-1"
                        >
                          Product Price:
                          <input
                            type="text"
                            name="product-price"
                            id="product-price"
                            value={selectedProduct.price}
                            readOnly
                          />
                        </label>
                        <label
                          htmlFor="product-quantity"
                          className="font-bold mr-1"
                        >
                          Quantity
                          <input
                            type="number"
                            name="product-quantity"
                            id="product-quantity"
                            value={productQuantity}
                            onChange={(e) =>
                              setProductQuantity(Number(e.target.value))
                            }
                          />
                        </label>
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={addProduct}
                    disabled={!selectedProduct}
                  >
                    Add Product
                  </button>
                  <button
                    type="button"
                    className="ml-4 inline-flex justify-center px-4 py-2 text-sm font-medium text-pink-700 bg-pink-200 border border-transparent rounded-md hover:bg-pink-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pink-500"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

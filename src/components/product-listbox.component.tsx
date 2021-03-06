import React, { Fragment /* , useState */ } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { Product } from '../types';
import { productList } from '../mocks';

interface ProductListboxProps {
  selectedProduct: Product | null;
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product | null>>;
}

export default function ProductListbox({
  selectedProduct,
  setSelectedProduct,
}: ProductListboxProps) {
  return (
    <div>
      <Listbox value={selectedProduct} onChange={setSelectedProduct}>
        <div className="relative mt-1">
          <Listbox.Button
            className="relative inline-flex w-full py-2 pl-3 pr-10 text-left font-medium
            bg-white rounded-md shadow-sm cursor-default focus:outline-none focus-visible:ring-2
            focus-visible:ring-opacity-75 focus-visible:border-indigo-500 text-sm border
            border-gray-300  text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-offset-2
            focus:ring-offset-gray-100 focus:ring-indigo-500"
          >
            <span className="block truncate">
              {selectedProduct
                ? `${selectedProduct.name} ($${selectedProduct.price.toFixed(
                    2
                  )})`
                : 'Select a product'}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {productList.map((product) => (
                <Listbox.Option
                  key={product.id}
                  className={({ active }) =>
                    `cursor-default select-none relative py-2 pl-10 pr-4 ${
                      active ? 'bg-indigo-500 text-white' : 'text-gray-700'
                    }`
                  }
                  value={product}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {product.name} (${product.price.toFixed(2)})
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-300">
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

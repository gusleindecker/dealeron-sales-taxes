import React, { Fragment /* , useState */ } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { Product } from '../types';

const productList: Product[] = [
  { id: '1', name: 'Book', isImported: false, price: 12.49 },
  { id: '2', name: 'Music CD', isImported: false, price: 14.99 },
  { id: '3', name: 'Chocolate bar', isImported: false, price: 0.85 },
  { id: '4', name: 'Box of chocolates', isImported: true, price: 10.0 },
  { id: '5', name: 'Bottle of perfume', isImported: true, price: 47.5 },
  { id: '6', name: 'Bottle of perfume', isImported: true, price: 27.99 },
  { id: '7', name: 'Packet of headache pills', isImported: false, price: 9.75 },
  {
    id: '8',
    name: 'Box of chocolates',
    isImported: true,
    price: 11.25,
  },
];

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
              {selectedProduct ? selectedProduct.name : 'Select a product'}
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
                        {product.name}
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

import React, { Fragment, useState, useCallback, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Product } from '../types';

interface ReceiptDialogProps {
  selectedProducts: Product[];
}

export default function ReceiptDialog({
  selectedProducts,
}: ReceiptDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [receipt, setReceipt] = useState('');

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  useEffect(() => {
    const basicSalesTax = 0.1;
    const basicSalesTaxExemptItems = ['books', 'food', 'medical'];
    const importDuty = 0.05;

    const roundUpToNearest5Cents = (number: number) => {
      return Math.ceil(number * 20) / 20;
    };

    const roundToNearestCent = (number: number) => {
      return Math.round(number * 100) / 100;
    };

    const calculateTaxes = (product: Product) => {
      const { price, isImported, category } = product;
      const isExempt = basicSalesTaxExemptItems.some(
        (element) => element === category
      );
      const basicSalesTaxValue = !isExempt
        ? roundUpToNearest5Cents(price * basicSalesTax)
        : 0;
      const importDutyValue = isImported
        ? roundUpToNearest5Cents(price * importDuty)
        : 0;
      const totalTaxes = roundToNearestCent(
        basicSalesTaxValue + importDutyValue
      );
      const totalPrice = roundToNearestCent(price + totalTaxes);

      return {
        ...product,
        basicSalesTaxValue,
        importDutyValue,
        totalTaxes,
        totalPrice,
      };
    };

    const selectedProductsDetailed = selectedProducts.map((prod) =>
      calculateTaxes(prod)
    );

    const calculatedProducts = [
      ...selectedProductsDetailed
        .reduce((map, currentProduct) => {
          if (!map.has(currentProduct.id)) {
            map.set(currentProduct.id, { ...currentProduct, quantity: 0 });
          }
          // eslint-disable-next-line no-param-reassign
          map.get(currentProduct.id).quantity += currentProduct.quantity;
          return map;
        }, new Map())
        .values(),
    ];

    const receiptProducts = calculatedProducts
      .map((product) => {
        const quantityTimesPrice =
          product.quantity > 1
            ? `(${product.quantity} @ ${product.totalPrice})`
            : '';
        return `${product.name}: ${(
          product.totalPrice * product.quantity
        ).toFixed(2)} ${quantityTimesPrice}`;
      })
      .join('\r\n');
    const receiptSalesTaxes = `Sales Taxes: ${calculatedProducts
      .reduce((acc, currentProduct) => {
        return acc + currentProduct.totalTaxes * currentProduct.quantity;
      }, 0)
      .toFixed(2)}\r\n`;
    const receiptTotal = `Total: ${calculatedProducts
      .reduce((acc, currentProduct) => {
        return acc + currentProduct.totalPrice * currentProduct.quantity;
      }, 0)
      .toFixed(2)}\r\n`;
    const newReceipt = `${receiptProducts}\r\n${receiptSalesTaxes}${receiptTotal}`;

    setReceipt(newReceipt);
  }, [selectedProducts]);

  return (
    <>
      <div className="flex">
        <button
          type="button"
          onClick={openModal}
          className="bg-emerald-500 text-white font-bold py-2 px-4 rounded-md flex items-center mt-2 w-full"
        >
          Generate receipt
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
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 text-left transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Taxes receipt (Output)
                </Dialog.Title>
                <div className="mt-2">
                  <textarea
                    className="mt-1 w-full border-gray-300 rounded-md shadow-sm bg-orange-100 text-neutral-900 read-only:border-orange-300 focus:border-orange-300 ring-0 focus:ring-0"
                    name="shopping-basket-input"
                    id="shopping-basket-input"
                    cols={30}
                    rows={10}
                    value={receipt}
                    readOnly
                    placeholder="No products added."
                  />
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Got it, thanks!
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

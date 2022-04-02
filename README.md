## DealerOn's Development Candidate<br>// Coding Test

##### Table of Contents
1. [The Problem](#problem)
2. [The Solution](#solution)
3. [Project Setup](#setup)
3. [Available Scripts](#scripts)
## <a name="problem"></a>The Problem

#### Sales Taxes (Problem Two)
There are a variety of items for sale at a store. When a customer purchases items, they receive a receipt. The receipt lists all of the items purchased, the sales price of each item (with taxes included), the total sales taxes for all items, and the total sales price.

Basic sales tax applies to all items at a rate of 10% of the item’s list price, with the exception of books, food, and medical products, which are exempt from basic sales tax. An import duty (import tax) applies to all imported items at a rate of 5% of the shelf price, with no exceptions.

Write an application that takes input for shopping baskets and returns receipts in the format shown below, calculating all taxes and totals correctly. When calculating the sales tax, round the value up to the nearest 5 cents. For example, if a taxable item costs \$5.60, an exact 10% tax would be \$0.56, and the final price after adding the rounded tax of \$0.60 should be 6.20.

##### Input Samples
Book: 24.98 (2 @ 12.49)
Music CD: 16.49
Chocolate bar: 0.85
Sales Taxes: 1.50
Total: 42.32

| INPUT 1                  | EXPECTED OUTPUT FOR INPUT 1 |
| ------------------------ | --------------------------- |
| 1 Book at 12.49          | Book: 24.98 (2 @ 12.49)     |
| 1 Book at 12.49          | Music CD: 16.49             |
| 1 Music CD at 14.99      | Chocolate bar: 0.85         |
| 1 Chocolate bar at 0.85  | Sales Taxes: 1.50           |
|                          | Total: 42.32                |

| INPUT 2                                | EXPECTED OUTPUT FOR INPUT 2        |
| -------------------------------------- | ---------------------------------- |
| 1 Imported box of chocolates at 10.00  | Imported box of chocolates: 10.50  |
| 1 Imported bottle of perfume at 47.50  | Imported bottle of perfume: 54.65  |
|                                        | Sales Taxes: 7.65                  |
|                                        | Total: 65.15                       |

| INPUT 3                                | EXPECTED OUTPUT FOR INPUT 3                    |
| -------------------------------------- | ---------------------------------------------- |
| 1 Imported bottle of perfume at 27.99  | Imported bottle of perfume: 32.19              |
| 1 Bottle of perfume at 18.99           | Bottle of perfume: 20.89                       |
| 1 Packet of headache pills at 9.75     | Packet of headache pills: 9.75                 |
| 1 Imported box of chocolates at 11.25  | Imported box of chocolates: 23.70 (2 @ 11.85)  |
| 1 Imported box of chocolates at 11.25  | Sales Taxes: 7.30                              |
|                                        | Total: 86.53                                   |
## <a name="solution"></a>The Solution
For this solution I decided to configure the project using [Vite](https://vitejs.dev/), [React](https://reactjs.org/) with [React Hooks](https://reactjs.org/docs/hooks-intro.html), [Typescript](https://www.typescriptlang.org/) and [Tailwind CSS](https://tailwindcss.com/). These are some of the technologies that have caught my attention lately.

I chose to create an application in which on its home screen we can add both products individually (custom input) and add the requested predefined inputs (sample inputs). There is the "Add Product" button to add products individually and also three other buttons that respectively add each of the three predefined inputs. It is also possible to clear the added items by clicking on the "Remove Products" button and finally by clicking on "Generate Receipt" the fee receipt is displayed.

## <a name="setup"></a>Project Setup
I recommend using [pnpm](https://pnpm.io/). To install it see instructions [here](https://pnpm.io/installation).
1. Clone this repo.
    - via HTTPS: `git clone https://github.com/gusleindecker/dealeron-sales-taxes.git`
    - via SSH: `git clone git@github.com:gusleindecker/dealeron-sales-taxes.git`
2. `cd <project-folder>`
3. `pnpm install`
## <a name="scripts"></a>Available Scripts
- `pnpm run dev`: Runs the app in the development mode.
- `pnpm run build`: Builds the app for production to the `dist` folder.
- `pnpm run preview`: Runs the production build from the `dist` folder. (need to run `pnpm run build` first).
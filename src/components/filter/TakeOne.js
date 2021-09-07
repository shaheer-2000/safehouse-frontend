/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, FilterIcon, MinusSmIcon, PlusSmIcon, ViewGridIcon } from '@heroicons/react/solid'
import Sort from './Sort'

const datas = [
    {
        id:1, address: 'asdasd', rooms: '2', bedroom:'1', bathroom:'1', price:'2500',
    },
    {
        id:2, address: 'asdasd', rooms: '2', bedroom:'1', bathroom:'1', price:'2500',
    },
    {
        id:3, address: 'asdasd', rooms: '2', bedroom:'1', bathroom:'1', price:'2500',
    },
    {
        id:4, address: 'asdasd', rooms: '2', bedroom:'1', bathroom:'1', price:'2500',
    },
    {
        id:3, address: 'asdasd', rooms: '2', bedroom:'1', bathroom:'1', price:'2500',
    },
    {
        id:4, address: 'asdasd', rooms: '2', bedroom:'1', bathroom:'1', price:'2500',
    },
]


// const sortOptions = [
//   { name: 'Most Popular', href: '#', current: true },
//   { name: 'Best Rating', href: '#', current: false },
//   { name: 'Newest', href: '#', current: false },
//   { name: 'Price: Low to High', href: '#', current: false },
//   { name: 'Price: High to Low', href: '#', current: false },
// ]

// const subCategories = [
//   { name: 'Totes', href: '#' },
//   { name: 'Backpacks', href: '#' },
//   { name: 'Travel Bags', href: '#' },
//   { name: 'Hip Bags', href: '#' },
//   { name: 'Laptop Sleeves', href: '#' },
// ]
const filters = [
  {
    id: 'range',
    name: 'Range',
    options: [
      { value: 'range', label: 'MinMaxRange', },
      // { value: 'white', label: 'White', checked: false },
      // { value: 'beige', label: 'Beige', checked: false },
      // { value: 'blue', label: 'Blue', checked: true },
      // { value: 'brown', label: 'Brown', checked: false },
      // { value: 'green', label: 'Green', checked: false },
      // { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'rooms',
    name: 'Rooms',
    options: [
      { value: '1', label: '1', checked: false },
      { value: '2', label: '2', checked: true },
      { value: '3', label: '3', checked: false },
      { value: '4', label: '4', checked: false },
      { value: '5', label: '5', checked: false },
    ],
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    options: [
      { value: '1', label: '1', checked: false },
      { value: '2', label: '2', checked: true },
      { value: '3', label: '3', checked: false },
      { value: '4', label: '4', checked: false },
      { value: '5', label: '5', checked: false },
    ],
  },
  {
    id: 'bathroom',
    name: 'Bathroom',
    options: [
      { value: '1', label: '1', checked: false },
      { value: '2', label: '2', checked: true },
      { value: '3', label: '3', checked: false },
      { value: '4', label: '4', checked: false },
      { value: '5', label: '5', checked: false },
    ],
  },
]

function RangeInput(props) {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);

  const { minLabel, maxLabel } = props;

  return (
    <>
    <div className="space-y-6">
        <div className="flex items-center flex-col">
            <div className="mb-6 flex items-center flex-row">
                <input className="h-6 w-20 border-gray-300 rounded text-gary-500 focus:ring-indigo-500" type="number" onChange={(e) => {
                    setMinValue(e.target.value)
                }} />
                <label className="ml-3 min-w-0 flex-1 text-gray-500">
                    {minLabel}
                </label>
            </div>
            <div className="flex items-center flex-row">
                <input className="h-6 w-20 border-gray-300 rounded text-gary-500 focus:ring-indigo-500"  type="number" onChange={(e) => {
                    setMaxValue(e.target.value)
                }} />
                <label className="ml-3 min-w-0 flex-1 text-gray-500">
                    {maxLabel}
                </label>
            </div>
            
        </div>
    </div>
    
      
    </>
  );
}

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [mobileFilters, setMobileFilters] = useState({});

  const handleMobileFilterChange = (value, checked) => {
    setMobileFilters(Object.assign(mobileFilters, {
      [value.replace(/-/g, '_')]: checked
    }));

    console.log(mobileFilters);
  };

  useEffect(() => {
    console.log(mobileFiltersOpen, mobileFilters);
  }, []);

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 flex z-40 " onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4 border-t border-gray-200">

                  {filters.map((section) => (
                    <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">{section.name}</span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                                ) : (
                                  <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div key={option.value} className="flex items-center">
                                  { 
                                  option.label === 'MinMaxRange' ? <RangeInput minLabel="Minimum Price" maxLabel="Maximum Price" /> : 
                                    <>
                                      <input
                                        id={`filter-mobile-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        type="checkbox"
                                        defaultChecked={option.checked}
                                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        onChange={(e) => handleMobileFilterChange(option.value, e.target.checked)} />
                                      <label
                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                        className="ml-3 min-w-0 flex-1 text-gray-500"
                                      >
                                        {option.label}
                                      </label>
                                    </>
                                  }
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">

            <div className="flex items-center">
              <Sort/>
              <button
                type="button"
                className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 "
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FilterIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">  
              {/* Product grid */}
              <div className="lg:col-span-3">
                {/* Replace with your content */}
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 lg:h-full">
                    {datas.map((data) => (
                    <div>
                        {data.address} 
                        {data.rooms} 
                        {data.bedroom}
                        {data.bathroom}
                        {data.price}
                    </div>))}
                    
                </div>
                {/* /End replace */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

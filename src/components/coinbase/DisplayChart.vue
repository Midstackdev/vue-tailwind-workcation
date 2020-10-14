<template>
  <div class="container mx-auto sm:px-4 pt-6 pb-8">
    <div class="bg-white border-t border-b sm:border-l sm:border-r sm:rounded shadow">
      <div class="border-b px-6">
        <div class="flex justify-between -mb-px">
          <div class="md:hidden text-blue-600 py-4 text-lg">
            Price Charts
          </div>
          <div class="hidden md:flex">
            <div class="py-4 text-blue-600 border-b border-blue-600 mr-4">
              Bitcoin &middot; US$12,400.02
            </div>
            <div class="py-4 text-gray-600 border-b border-transparent hover:border-gray-600 mr-4">
              Etherium &middot; US$3020.02
            </div>
            <div class="py-4 text-gray-600 border-b border-transparent hover:border-gray-600">
              Litecoin &middot; US$42.02
            </div>
          </div>
          <div class="flex">
            <div class="py-4 text-blue-600 border-b border-blue-600 mr-3">
              1H
            </div>
            <div class="py-4 text-gray-600 border-b border-transparent hover:border-gray-600 mr-3">
              1D
            </div>
            <div class="py-4 text-gray-600 border-b border-transparent hover:border-gray-600 mr-3">
              1W
            </div>
            <div class="py-4 text-gray-600 border-b border-transparent hover:border-gray-600 mr-3">
              1M
            </div>
            <div class="py-4 text-gray-600 border-b border-transparent hover:border-gray-600 mr-3">
              1Y
            </div>
            <div class="py-4 text-gray-600 border-b border-transparent hover:border-gray-600">
              ALL
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center px-6 md:hidden">
        <div class="flex-grow flex-shrink-0 py-6">
          <div class="text-gray-600 mb-2">
            <span class="text-3xl align-top">US$</span>
            <span class="text-5xl">21,404</span>
            <span class="text-3xl align-top">.74</span>
          </div>
          <div class="text-green-200 flex items-center text-sm">
            <svg class="fill-current h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M13 5.41V21a1 1 0 0 1-2 0V5.41l-5.3 5.3a1 1 0 1 1-1.4-1.42l7-7a1 1 0 0 1 1.4 0l7 7a1 1 0 1 1-1.4 1.42L13 5.4z"/></svg>
            <span>US$ 12,988.34 (124.23%)</span>
          </div>
        </div>
        <div class="flex-shrink w-32 inline-block relative">
          <select class="appearance-none w-full block bg-white border border:bg-gray-400 px-4 py-2 pr-8 rounded focus:outline-none text-gray-600" name="" id="">
            <option value="">BTC</option>
            <option value="">BCH</option>
            <option value="">ETC</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
            <svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <div class="hidden md:flex">
        <div class="w-1/3 text-center py-6">
          <div class="border-r">
            <div class="text-gray-600 mb-2">
              <span class="text-3xl align-top">US$</span>
              <span class="text-5xl">21,404</span>
              <span class="text-3xl align-top">.74</span>
            </div>
            <div class="text-gray-400 uppercase tracking">
              Bitcoin Price
            </div>
          </div>
        </div>
        <div class="w-1/3 text-center py-6">
          <div class="border-r">
            <div class="text-gray-600 mb-2">
              <span class="text-3xl align-top"><span class="text-green-300 align-top">+</span>US$</span>
              <span class="text-5xl">12,404</span>
              <span class="text-3xl align-top">.74</span>
            </div>
            <div class="text-gray-400 uppercase tracking">
              Since lat month (CAD)
            </div>
          </div>
        </div>
        <div class="w-1/3 text-center py-6">
          <div class="">
            <div class="text-gray-600 mb-2">
              <span class="text-3xl align-top"><span class="text-green-300 align-top">+</span></span>
              <span class="text-5xl">140.34</span>
              <span class="text-3xl align-top">%</span>
            </div>
            <div class="text-gray-400 uppercase tracking">
              Since lat month (%)
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  
  export default {

  }
</script>
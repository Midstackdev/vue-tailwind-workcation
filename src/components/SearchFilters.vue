<template>
  <section class="bg-gray-800 xl:w-72">
    <div class="px-4 py-3 flex justify-between xl:hidden">  
      <div class="relative max-w-xs w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="h-6 w-6 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
        </div>
        <input class="block w-full bg-gray-900 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search by keywords">
      </div>
      <button 
        @click="toggle" 
        type="button" 
        class="ml-4 inline-flex rounded-lg shadow hover:bg-gray-600 focus:outline-none focus:shadow-outline pl-3 pr-4 py-3"
        :class="{'bg-gray-900': isOpen, 'bg-gray-700': !isOpen }"
      >
        <svg class="h-6 w-6 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M2.3 7.7A1 1 0 0 1 2 7V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v4a1 1 0 0 1-.3.7L15 14.42V17a1 1 0 0 1-.3.7l-4 4A1 1 0 0 1 9 21v-6.59l-6.7-6.7zM4 4v2.59l6.7 6.7a1 1 0 0 1 .3.71v4.59l2-2V14a1 1 0 0 1 .3-.7L20 6.58V4H4z"/></svg>
        <span class="ml-1 text-white font-medium">Filters</span>
      </button>
    </div>
    <form @click.prevent="" v-show="isOpen" class="xl:h-full xl:flex xl:flex-col xl:justify-between">
      <div class="lg:flex xl:block xl:overflow-y-auto">
        <fieldset class="px-4 py-4 border-t border-gray-900 lg:w-1/3 xl:border-t-0 xl:w-full">
          <div class="flex flex-wrap -mx-2"> 
            <label class="block w-1/2 px-2 sm:w-1/4 lg:w-1/2" for="">
              <span class="text-sm font-semibold text-gray-500">Bedrooms</span>
              <select class="mt-1 form-select block w-full" name="" id="">
                <option value="1">1</option>
              </select>
            </label>
            <label class="block w-1/2 px-2 sm:w-1/4 lg:w-1/2" for="">
              <span class="text-sm font-semibold text-gray-500">Bathrooms</span>
              <select class="mt-1 form-select block w-full" name="" id="">
                <option value="2">2</option>
              </select>
            </label>
            <label class="mt-4 px-2 block w-full sm:w-1/2 sm:mt-0 lg:mt-4 lg:w-full" for="">
              <span class="text-sm font-semibold text-gray-500">Price Range</span>
              <select class="mt-1 form-select block w-full" name="" id="">
                <option value="2">Up to $2000/wk</option>
              </select>
            </label>
          </div>
        </fieldset>
        <fieldset class="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l xl:w-full">
          <span class="block text-sm font-semibold text-gray-500">Property Type</span>
          <div class="sm:flex sm:-mx-2 sm:flex-wrap lg:block lg:mx-0">
            <label class="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
              <input class="form-radio" type="radio" name="propertyType" id="" value="house">
              <span class="ml-2 text-white">House</span>
            </label>
            <label class="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
              <input class="form-radio" type="radio" name="propertyType" id="" value="apartment">
              <span class="ml-2 text-white">Apartment</span>
            </label>
            <label class="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
              <input class="form-radio" type="radio" name="propertyType" id="" value="loft">
              <span class="ml-2 text-white">Loft</span>
            </label>
            <label class="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
              <input class="form-radio" type="radio" name="propertyType" id="" value="townhouse">
              <span class="ml-2 text-white">Townhouse</span>
            </label>
            <label class="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
              <input class="form-radio" type="radio" name="propertyType" id="" value="townhouse">
              <span class="ml-2 text-white">Hut House</span>
            </label>
          </div>
        </fieldset>
        <fieldset class="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l xl:w-full">
          <span class="block text-sm font-semibold text-gray-500">Amenities</span>
          <div class="sm:flex sm:-mx-2 sm:flex-wrap">    
            <label class="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-1/2 xl:w-full">
              <input class="form-checkbox" type="checkbox" name="balcony">
              <span class="ml-2 text-white">Balcony</span>
            </label>
            <label class="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-1/2 xl:w-full">
              <input class="form-checkbox" type="checkbox" name="pool">
              <span class="ml-2 text-white">Pool</span>
            </label>
            <label class="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-1/2 xl:w-full">
              <input class="form-checkbox" type="checkbox" name="beach">
              <span class="ml-2 text-white">Beach</span>
            </label>
            <label class="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-1/2 xl:w-full">
              <input class="form-checkbox" type="checkbox" name="petFriendly">
              <span class="ml-2 text-white">Pet Friendly</span>
            </label>
            <label class="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-1/2 xl:w-full">
              <input class="form-checkbox" type="checkbox" name="kidFriendly">
              <span class="ml-2 text-white">Kid Friendly</span>
            </label>
            <label class="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-1/2 xl:w-full">
              <input class="form-checkbox" type="checkbox" name="parking">
              <span class="ml-2 text-white">Parking</span>
            </label>
            <label class="mt-3 sm:w-1/2 sm:px-2 flex items-center lg:w-full xl:w-full">
              <input class="form-checkbox" type="checkbox" name="airConditioning">
              <span class="ml-2 text-white">Air Conditioning</span>
            </label>
          </div>
        </fieldset>
      </div>
      <div class="bg-gray-900 px-4 py-4 sm:text-right">
        <button class="block w-full sm:w-auto sm:inline-block bg-indigo-500 font-semibold text-white px-4 py-2 rounded-lg xl:block xl:w-full">Update results</button>
      </div>
    </form>
  </section>
</template>

<script>
  
  export default {
    data() {
      return {
        isOpen: true
      }
    },

    methods: {
      toggle() {
        this.isOpen = !this.isOpen
      }
    }
  }
</script>
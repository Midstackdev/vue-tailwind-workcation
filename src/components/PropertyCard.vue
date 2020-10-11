<template>
  <div>
    <div class="relative pb-5/6">
      <img class="absolute inset-0 h-full rounded-lg shadow-md" :src="property.imageUrl" alt="mordern-house"> 
    </div>
    <div class="relative px-4 -mt-16">
      <div class="bg-white rounded-lg px-4 py-3 shadow-lg object-cover">
        <div class="flex">
          <span class="inline-block px-2 py-1 leading-none bg-teal-200 text-teal-800 rounded-full font-semibold uppercase tracking-wide text-xs">Plus</span>
          <div class="ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide">
            {{ property.beds }} beds &bull; {{ property.baths }} baths
          </div>
        </div>
        <h4 class="mt-1 text-gray-900 font-semibold text-lg">{{ property.title }}</h4>
        <div class="mt-1">
         <span class="text-gray-900">{{ formattedPrice }}</span>
         <span class="ml-1 text-sm text-gray-600">/wk</span>
        </div>
        <div class="mt-2 flex text-sm text-gray-600">
          <svg 
            v-for="i in 5" :key="i" 
            class="h-4 w-4 fill-current" 
            :class="property.rating >= i ? 'text-teal-500' : 'text-gray-400'" 
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
          >
            <path d="M6.1 21.98a1 1 0 0 1-1.45-1.06l1.03-6.03-4.38-4.26a1 1 0 0 1 .56-1.71l6.05-.88 2.7-5.48a1 1 0 0 1 1.8 0l2.7 5.48 6.06.88a1 1 0 0 1 .55 1.7l-4.38 4.27 1.04 6.03a1 1 0 0 1-1.46 1.06l-5.4-2.85-5.42 2.85zm4.95-4.87a1 1 0 0 1 .93 0l4.08 2.15-.78-4.55a1 1 0 0 1 .29-.88l3.3-3.22-4.56-.67a1 1 0 0 1-.76-.54l-2.04-4.14L9.47 9.4a1 1 0 0 1-.75.54l-4.57.67 3.3 3.22a1 1 0 0 1 .3.88l-.79 4.55 4.09-2.15z"/>
          </svg>
          <span class="ml-1">{{ property.reviewCount }} reviews</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    props: [
      'property'
    ],

    computed: {
      formattedPrice() {
        const formatter = new Intl.NumberFormat('enn-GH', {
          style: 'currency',
          currency: 'GHS'
        })

        return formatter.format(this.property.price / 100)
      }
    }
  }
</script>
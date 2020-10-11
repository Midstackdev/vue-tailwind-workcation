<template>
  <div id="app" class="min-h-screen bg-gray-200 antialiased xl:flex xl:flex-col xl:h-screen"> 
    <SideHeader class="xl:flex-shrink-0"/>
    <div class="xl:flex xl:flex-1 xl:overflow-y-hidden">
      <SearchFilters />
      <main class="py-6 xl:flex-1 xl:overflow-x-hidden">
        <div class="px-4">  
          <h3 class="text-gray-900 text-xl">Los Angeles</h3>
          <p class="text-gray-600">Live like the stars in these luxurios Southern Carlifornia estates.</p>
        </div>
        <div class="mt-6 sm:overflow-x-auto">
          <div class="px-4 sm:inline-flex sm:-mx-2 sm:pb-8">
            <div v-for="(property, index) in properties" :key="index" :class="{'mt-10': property > 1}" class="sm:mt-0 sm:w-80 sm:flex-shrink-0 sm:px-2">
              <PropertyCard :property="property" />
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import SideHeader from './components/SideHeader'
import SearchFilters from './components/SearchFilters'
import PropertyCard from './components/PropertyCard'

export default {
  name: 'App',
  components: {
    SideHeader,
    SearchFilters,
    PropertyCard,
  },

  data() {
    return {
      properties: [
        {
          imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          beds: 3,
          baths: 4,
          title: 'Modern hime in city cebter',
          price: 150000,
          reviewCount: 24,
          rating: 3
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          beds: 4,
          baths: 2,
          title: 'Modern hime in city cebter',
          price: 160000,
          reviewCount: 34,
          rating: 5
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          beds: 3,
          baths: 2,
          title: 'Modern hime in city cebter',
          price: 140000,
          reviewCount: 34,
          rating: 1
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          beds: 3,
          baths: 2,
          title: 'Modern hime in city cebter',
          price: 140000,
          reviewCount: 34,
          rating: 2
        },
      ]
    }
  }
}
</script>

<style src="./assets/css/tailwind.css"></style>

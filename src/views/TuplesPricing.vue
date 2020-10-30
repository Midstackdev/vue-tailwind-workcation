<template>
  <div class="bg-gray-200">
    <Header />
    <main class="px-4 pt-4">
      <h1 class="max-w-xs mx-auto text-center text-2xl font-bold leading-snug text-gray-900">
        <span class="relative text-white">
          <span aria-hidden class="absolute inset-0 bg-indigo-600" style="transform: skewY(-.5deg) scaleX(1.05)"></span>
          <span class="relative">Pays for itself</span>
        </span> 
        with one great paring session
      </h1>
      <p class="mt-4 text-center text-gray-700">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam molestias, rem eum quas debitis nostrum cupiditate vero accusamus.
      </p>
      <Cards/>
      <Slices />
    </main>
    <Testimonial />
  </div>
</template>

<script>
  import Header from '@/components/pricing/Header'
  import Cards from '@/components/pricing/Cards'
  import Slices from '@/components/pricing/Slices'
  import Testimonial from '@/components/pricing/Testimonial'

  export default {
    components: {
      Header,
      Cards,
      Slices,
      Testimonial,
    }
  }
</script>
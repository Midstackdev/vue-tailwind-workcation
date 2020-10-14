<template>
  <div>
    <div class="bg-gray-100">
      <TopNav />
      <SecondNav />
      <DisplayChart />

      
    </div>
  </div>
</template>

<script>
  import TopNav from '@/components/coinbase/TopNav'
  import SecondNav from '@/components/coinbase/SecondNav'
  import DisplayChart from '@/components/coinbase/DisplayChart'
  
  export default {
    components: {
      TopNav,
      SecondNav,
      DisplayChart,
    }
  }
</script>
<template>
  <div class="h-screen flex flex-col">
    <Header />
    <div class="flex-1 flex">    
      <Sidebar />
      <main class="bg-gray-200">
        <div></div>
        <div></div>
      </main>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/inbox/Header'
  import Sidebar from '@/components/inbox/Sidebar'

  export default {
    components:{
      Header,
      Sidebar,
    }
  }
</script>
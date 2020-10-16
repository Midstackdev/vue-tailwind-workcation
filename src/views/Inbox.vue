<template>
  <div class="h-screen flex flex-col">
    <Header />
    <div class="flex-1 flex overflow-hidden">    
      <Sidebar />
      <main class="flex-1 flex bg-gray-200">
        <ContentPreview />
        <div class="flex-1 bg-red-100">jiop</div>
      </main>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/inbox/Header'
  import Sidebar from '@/components/inbox/Sidebar'
  import ContentPreview from '@/components/inbox/ContentPreview'

  export default {
    components:{
      Header,
      Sidebar,
      ContentPreview,
    }
  }
</script>
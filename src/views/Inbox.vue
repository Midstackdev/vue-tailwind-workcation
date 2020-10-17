<template>
  <div class="h-screen flex flex-col">
    <Header />
    <div class="flex-1 flex overflow-hidden">    
      <Sidebar />
      <main class="flex-1 flex bg-gray-200">
        <ContentPreview />
        <Content />
      </main>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/inbox/Header'
  import Sidebar from '@/components/inbox/Sidebar'
  import ContentPreview from '@/components/inbox/ContentPreview'
  import Content from '@/components/inbox/Content'

  export default {
    components:{
      Header,
      Sidebar,
      ContentPreview,
      Content,
    }
  }
</script>
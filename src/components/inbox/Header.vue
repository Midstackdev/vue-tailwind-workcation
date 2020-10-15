<template>
  <header class="flex">
    <div class="w-64 flex-shrink-0 px-4 py-3 bg-gray-800">
      <button class="block w-full flex items-center">
        <img 
          class="h-8 w-8 rounded-full object-cover" 
          src="https://images.unsplash.com/photo-1598635239935-2d037ba3819c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" alt=""
        >
        <span class="text-sm text-white font-medium ml-4 mr-2">Monica Smith</span>
        <svg class="ml-auto h-6 w-6 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"/>
        </svg>
      </button>
    </div>
    <div class="flex flex-1 bg-gray-700 justify-between px-6 items-center">
      <nav class="flex">
        <a href="#" class="inline-block px-3 py-2 leading-none bg-gray-800 rounded-lg text-sm text-white font-medium ">Mailbox</a>
        <a href="#" class="ml-2 inline-block px-3 py-2 leading-none rounded-lg text-sm text-white font-medium hover:bg-gray-600">Customers</a>
        <a href="#" class="ml-2 inline-block px-3 py-2 leading-none rounded-lg text-sm text-white font-medium hover:bg-gray-600">Reporting</a>
        <a href="#" class="ml-2 inline-block px-3 py-2 leading-none rounded-lg text-sm text-white font-medium hover:bg-gray-600">Manage</a>
      </nav>
      <div class="flex items-center">
        <div class="relative w-64">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg class="h-5 w-5 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
            </svg>
          </span>
          <input type="text" class="block w-full pl-8 pr-4 py-2 bg-gray-900 rounded-lg text-sm placeholder-gray-100 text-white focus:outline-none focus:bg-gray-600" placeholder="Search">
        </div>
        <button type="button" class="ml-4 text-gray-400 hover:text-gray-200">
          <svg class="h-5 w-5 fill-current text-sm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M15 19a3 3 0 0 1-6 0H4a1 1 0 0 1 0-2h1v-6a7 7 0 0 1 4.02-6.34 3 3 0 0 1 5.96 0A7 7 0 0 1 19 11v6h1a1 1 0 0 1 0 2h-5zm-4 0a1 1 0 0 0 2 0h-2zm0-12.9A5 5 0 0 0 7 11v6h10v-6a5 5 0 0 0-4-4.9V5a1 1 0 0 0-2 0v1.1z"/>
          </svg>
        </button>
        <button type="button" class="ml-4 text-gray-400 hover:text-gray-200">
          <svg class="h-5 w-5 fill-current text-sm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM10.59 8.59a1 1 0 1 1-1.42-1.42 4 4 0 1 1 5.66 5.66l-2.12 2.12a1 1 0 1 1-1.42-1.42l2.12-2.12A2 2 0 0 0 10.6 8.6zM12 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script>

  export default {

  }
</script>
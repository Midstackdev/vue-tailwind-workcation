<template>
  <div class="hidden sm:block bg-blue-600 sm:bg-white sm:border-b">
    <div class="container mx-auto px-4">
      <div class="sm:flex">  
        <div class="flex -mb-px mr-6">
          <a href="#" class="text-white sm:text-blue-600 flex items-center py-4 border-b border-blue-600">
            <svg class="fill-current h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M5 3h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v4h4V5H5zm10-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v4h4V5h-4zM5 13h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4c0-1.1.9-2 2-2zm0 2v4h4v-4H5zm10-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4c0-1.1.9-2 2-2zm0 2v4h4v-4h-4z"/></svg>
            Dashboard
          </a>
        </div>
        <div class="flex -mb-px mr-6">
          <a href="#" class="text-white opacity-50 sm:opacity-100 sm:text-gray-500 flex items-center py-4 border-b border-transparent hover:opacity-100 sm:hover:border-gray-500">
            <svg class="fill-current h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M5.41 16H18a2 2 0 0 0 2-2 1 1 0 0 1 2 0 4 4 0 0 1-4 4H5.41l2.3 2.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.42 1.4L5.4 16zM6 8a2 2 0 0 0-2 2 1 1 0 0 1-2 0 4 4 0 0 1 4-4h12.59l-2.3-2.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4L18.6 8H6z"/></svg>
            Buy/Sell
          </a>
        </div>
        <div class="flex -mb-px mr-6">
          <a href="#" class="text-white opacity-50 sm:opacity-100 sm:text-gray-500 flex items-center py-4 border-b border-transparent hover:opacity-100 sm:hover:border-gray-500">
            <svg class="fill-current h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M8 7V5c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h4zm8 2H8v10h8V9zm2 0v10h2V9h-2zM6 9H4v10h2V9zm4-2h4V5h-4v2z"/></svg>
            Accounts
          </a>
        </div>
        <div class="flex -mb-px mr-6">
          <a href="#" class="text-white opacity-50 sm:opacity-100 sm:text-gray-500 flex items-center py-4 border-b border-transparent hover:opacity-100 sm:hover:border-gray-500">
            <svg class="fill-current h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm14 8V5H5v6h14zm0 2H5v6h14v-6zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>
            Tools
          </a>
        </div>
        <div class="flex -mb-px mr-6">
          <a href="#" class="text-white opacity-50 sm:opacity-100 sm:text-gray-500 flex items-center py-4 border-b border-transparent hover:opacity-100 sm:hover:border-gray-500">
            <svg class="fill-current h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M9 4.58V4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v.58a8 8 0 0 1 1.92 1.11l.5-.29a2 2 0 0 1 2.74.73l1 1.74a2 2 0 0 1-.73 2.73l-.5.29a8.06 8.06 0 0 1 0 2.22l.5.3a2 2 0 0 1 .73 2.72l-1 1.74a2 2 0 0 1-2.73.73l-.5-.3A8 8 0 0 1 15 19.43V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.58a8 8 0 0 1-1.92-1.11l-.5.29a2 2 0 0 1-2.74-.73l-1-1.74a2 2 0 0 1 .73-2.73l.5-.29a8.06 8.06 0 0 1 0-2.22l-.5-.3a2 2 0 0 1-.73-2.72l1-1.74a2 2 0 0 1 2.73-.73l.5.3A8 8 0 0 1 9 4.57zM7.88 7.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 0 0 0 2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 0 0 2.4 1.4l.72.2V20h2v-2.04l.71-.2a6 6 0 0 0 2.41-1.4l.54-.51 1.77 1.02 1-1.74-1.76-1.01.17-.73a6.02 6.02 0 0 0 0-2.78l-.17-.73 1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 0 0-2.4-1.4l-.72-.2V4h-2v2.04l-.71.2a6 6 0 0 0-2.41 1.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
            Settings
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  
  export default {

  }
</script>
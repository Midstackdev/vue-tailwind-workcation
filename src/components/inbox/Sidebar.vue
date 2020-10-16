<template>
  <div class="w-64 p-6 bg-gray-100">
    <nav>
      <h2 class="text-xs font-semibold text-gray-600 uppercase tracking-wide">Mailboxes</h2>
      <div class="mt-3">
        <a href="#" class="mt-2 -mx-2 px-3 py-2 flex items-center justify-between text-sm font-medium bg-gray-200 rounded-lg">
          <span class="inline-flex">
            <svg class=" w-6 h-6 fill-current text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 10v6h14v-6h-2.38l-1.45 2.9a2 2 0 0 1-1.79 1.1h-2.76a2 2 0 0 1-1.8-1.1L7.39 13H5zm14-2V5H5v6h2.38a2 2 0 0 1 1.8 1.1l1.44 2.9h2.76l1.45-2.9a2 2 0 0 1 1.79-1.1H19z"/></svg>
            <span class="ml-2 text-gray-900">Inbox</span>
          </span>
          <span class="inline-block w-8 text-center py-1 leading-none text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">6</span>
        </a> 
        <a href="#" class="mt-2 -mx-2 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg">
          <span class="inline-flex">
            <svg class=" w-6 h-6 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path class="heroicon-ui" d="M4 16v5a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1h8.5a1 1 0 0 1 .7.3l.71.7H21a1 1 0 0 1 .9 1.45L19.11 10l2.77 5.55A1 1 0 0 1 21 17h-8.5a1 1 0 0 1-.7-.3l-.71-.7H4zm7-12H4v10h7.5a1 1 0 0 1 .7.3l.71.7h6.47l-2.27-4.55a1 1 0 0 1 0-.9L19.38 5H13v4a1 1 0 0 1-2 0V4z"/>
            </svg>
            <span class="ml-2 text-gray-700">Flagged</span>
          </span>
          <!-- <span class="inline-block w-8 text-center py-1 leading-none text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">6</span> -->
        </a>
        <a href="#" class="mt-2 -mx-2 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg">
          <span class="inline-flex">
            <svg class=" w-6 h-6 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path class="heroicon-ui" d="M6.3 12.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM8 16h2.59l9-9L17 4.41l-9 9V16zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a1 1 0 0 1 0 2H4v14h14v-6z"/>
            </svg>
            <span class="ml-2 text-gray-700">Drafts</span>
          </span>
          <span class="inline-block w-8 text-center py-1 leading-none text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">6</span>
        </a>        
        <a href="#" class="mt-2 -mx-2 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg">
          <span class="inline-flex">
            <svg class=" w-6 h-6 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path class="heroicon-ui" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"/>
            </svg>
            <span class="ml-2 text-gray-700">Assigned</span>
          </span>
          <span class="inline-block w-8 text-center py-1 leading-none text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">6</span>
        </a> 
        <a href="#" class="mt-2 -mx-2 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg">
          <span class="inline-flex">
            <svg class=" w-6 h-6 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"/>
            </svg>
            <span class="ml-2 text-gray-700">Closed</span>
          </span>
          <!-- <span class="inline-block w-8 text-center py-1 leading-none text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">6</span> -->
        </a>        
        <a href="#" class="mt-2 -mx-2 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg">
          <span class="inline-flex">
            <svg class=" w-6 h-6 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path class="heroicon-ui" d="M20 9v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2zm0-2V5H4v2h16zM6 9v10h12V9H6zm4 2h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2z"/>
            </svg>
            <span class="ml-2 text-gray-700">Junk</span>
          </span>
          <!-- <span class="inline-block w-8 text-center py-1 leading-none text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">6</span> -->
        </a>   
      </div>
      <h2 class="mt-8 text-xs font-semibold text-gray-600 uppercase tracking-wide">Folders</h2>
      <div class="mt-4">
        <a href="#" class="mt-4 block text-sm font-medium text-gray-700">Refunds</a>
        <a href="#" class="mt-4 block text-sm font-medium text-gray-700">Discounts</a>
        <a href="#" class="mt-4 block text-sm font-medium text-gray-700">Bugs</a>
      </div>
    </nav>
  </div>
</template>

<script>
  
  export default {

  }
</script>
<template>
    <div class="border-b-2 border-gray-200">
        <header class="px-6">
            <div class="py-3 flex justify-between items-center border-b border-gray-200">
                <div class="flex-1">
                    <div class="relative w-64">
                        <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                            <svg class="h-6 w-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
                            </svg>
                        </span>
                        <input class="block w-full pl-10 pr-4 py-2 text-sm rounded-md border border-gray-400 text-gray-900 placeholder-gray-600 focus:outline-none" type="text" placeholder="Search">
                    </div>
                </div>
                <div class="flex items-center">
                    <button class="focus:outline-none">
                        <svg class="h-6 w-6 text-gray-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path class="heroicon-ui" d="M15 19a3 3 0 0 1-6 0H4a1 1 0 0 1 0-2h1v-6a7 7 0 0 1 4.02-6.34 3 3 0 0 1 5.96 0A7 7 0 0 1 19 11v6h1a1 1 0 0 1 0 2h-5zm-4 0a1 1 0 0 0 2 0h-2zm0-12.9A5 5 0 0 0 7 11v6h10v-6a5 5 0 0 0-4-4.9V5a1 1 0 0 0-2 0v1.1z"/>
                        </svg>
                    </button>
                    <button class="ml-6 focus:outline-none">
                        <img 
                        class="h-9 w-9 rounded-full object-cover" 
                        src="https://images.unsplash.com/photo-1579591919791-0e3737ae3808?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&crop&w=144&h=144&q=80" alt="profile image">
                    </button>
                </div>
            </div>
            <div class="py-2 flex items-center justify-between">
                <div class="flex items-center">
                    <h2 class="text-2xl font-semibold text-gray-900 leading-tight">All Issues</h2>
                    <div class="ml-6 flex items-center">
                        <span class="rounded-full border-2 border-white">  
                            <img 
                            class="h-6 w-6 rounded-full object-cover"
                            src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&crop&w=144&h=144&q=80" alt="">
                        </span>
                        <span class="-ml-2 rounded-full border-2 border-white"> 
                            <img 
                            class="h-6 w-6 rounded-full object-cover" 
                            src="https://images.unsplash.com/photo-1579591919791-0e3737ae3808?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&crop&w=144&h=144&q=80" alt="profile image">
                        </span>
                        <span class="-ml-2 rounded-full border-2 border-white"> 
                            <img 
                            class="h-6 w-6 rounded-full object-cover"
                            src="https://images.unsplash.com/photo-1595085610978-b5e35eb24dcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&crop&w=144&h=144&q=80" alt="">
                        </span>
                        <span class="-ml-2 rounded-full border-2 border-white"> 
                            <img 
                            class="h-6 w-6 rounded-full object-cover"
                            src="https://images.unsplash.com/photo-1601653734034-c456d8f76c0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&crop&w=144&h=144&q=80" alt="">
                        </span>
                    </div>
                </div>
                <div class="flex">
                    <span class="inline-flex p-1 border bg-gray-200 rounded-md">
                        <button class="px-2 py-1 rounded focus:outline-none">
                            <svg class="h-6 w-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path class="heroicon-ui" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                            </svg>
                        </button>
                        <button class="px-2 py-1 bg-white rounded shadow focus:outline-none">
                            <svg class="h-6 w-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path class="heroicon-ui" d="M14 5.62l-4 2v10.76l4-2V5.62zm2 0v10.76l4 2V7.62l-4-2zm-8 2l-4-2v10.76l4 2V7.62zm7 10.5L9.45 20.9a1 1 0 0 1-.9 0l-6-3A1 1 0 0 1 2 17V4a1 1 0 0 1 1.45-.9L9 5.89l5.55-2.77a1 1 0 0 1 .9 0l6 3A1 1 0 0 1 22 7v13a1 1 0 0 1-1.45.89L15 18.12z"/>
                            </svg>
                        </button>
                    </span>
                    <button class="ml-5 flex pl-2 pr-4 py-2 items-center text-sm font-medium text-white focus:outline-none bg-gray-800 rounded-md hover:bg-gray-700">
                        <svg class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill-rule="evenodd" d="M11.75 4.5a.75.75 0 01.75.75V11h5.75a.75.75 0 010 1.5H12.5v5.75a.75.75 0 01-1.5 0V12.5H5.25a.75.75 0 010-1.5H11V5.25a.75.75 0 01.75-.75z"></path></svg>
                        <span class="ml-1">New Issue</span>
                    </button>
                </div>
            </div>
        </header>
    </div>
</template>
<template>
    <div class="h-screen flex">
        <div 
            :class="sidebarOpen ? 'md:hidden' : '-translate-x-full'"
            class="fixed z-30 inset-y-0 left-0 w-64 px-8 py-4 bg-gray-100 border-r overflow-auto"
        >
            <div class="-mx-3 pl-3 pr-1 flex items-center justify-between">
                <span><img class="h-9 w-9" src="@/assets/svg/tuples-logo.svg" alt="logo"></span>
                <button @click="sidebarOpen = true" class="text-gray-700 focus:outline-none">
                    <svg class="h-8 w-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path class="heroicon-ui" d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"/>
                    </svg>
                </button>
            </div>
            <SideBar />
        </div>
        <div class="flex-1 min-w-0 flex flex-col bg-white">
            <NavBar
                v-on:open="toggle"
            />
            <div class="flex-1 overflow-auto">
                <MainSection />
            </div>
        </div>
    </div>
</template>

<script>
    import SideBar from '@/components/kaban/SideBar'
    import NavBar from '@/components/kaban/NavBar'
    import MainSection from '@/components/kaban/MainSection'

    export default {
        components: {
            SideBar,
            NavBar,
            MainSection,
        },

        data () {
            return {
                sidebarOpen: false
            }
        },

        methods: {
            toggle(val) {
                // console.log('open')
                this.sidebarOpen = val
            }
        }
    }
</script>
<template>
    <div class="h-screen flex">
        <div class="w-64 px-8 py-4 bg-gray-100 border-r">
            <img class="h-9 w-9" src="@/assets/svg/tuples-logo.svg" alt="logo">
            <SideBar />
        </div>
        <div class="flex-1 min-w-0 bg-white">
            <NavBar />
            <div></div>
        </div>
    </div>
</template>

<script>
    import SideBar from '@/components/kaban/SideBar'
    import NavBar from '@/components/kaban/NavBar'

    export default {
        components: {
            SideBar,
            NavBar
        }
    }
</script>
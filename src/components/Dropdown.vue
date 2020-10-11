<template>
  <div class="relative">
    <button @click="toggle" type="button" class="block focus:outline-none" @focus="buttonHasFocus = true" @blur="buttonHasFocus = false">
      <slot name="trigger" :hasFocus="buttonHasFocus" :isOpen="isOpen"></slot>
    </button>
    <div class="" :class="[isOpen ? 'sm:block' : 'sm:hidden']">  
      <button @click="isOpen = false" type="button" class="z-30 block fixed w-full h-full opacity-0 inset-0 cursor-default"></button>
      <div class="absolute right-0 z-40">
        <slot name="dropdown"></slot>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        isOpen: false,
        buttonHasFocus: false,
      }
    },

    methods: {
      toggle() {
        this.isOpen = !this.isOpen
      },
    },

    mounted() {
      const onEscape = e => {
        if(!this.isOpen || e.key !== 'Escape') {
          return 
        }
        this.isOpen = false
      }

      document.addEventListener('keydown', onEscape)

      this.$on('hook:destroyed', () => {
        document.removeEventListener('keydown', onEscape)
      })
    }
  }
</script>
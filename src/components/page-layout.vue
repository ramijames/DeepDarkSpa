<template>
  <transition name="fade" class="fade" appear>
    <div class="h-full mx-auto page-layout flex flex-col px-8">
      <NavBar />
      <slot />
    </div>
  </transition>
</template>

<script setup>
import NavBar from "@/components/navigation/desktop/nav-bar.vue";
import MobileNavBar from "@/components/navigation/mobile/mobile-nav-bar.vue";
// import PageFooter from "@/components/page-footer.vue";
</script>

<style>


.fade-enter-active, 
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s ease-in;
}

.fade-enter-to, 
.fade-leave-to {
  opacity: 1;
}

.fade-appear-active {
  transition: opacity 1.5s;
}

</style>

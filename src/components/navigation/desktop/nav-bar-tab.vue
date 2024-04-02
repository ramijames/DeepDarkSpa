<template>
  <router-link
    :to="props.path"
    exact
    class="navbar-tab"
    active-class="text-crt-9"
  >
    {{ props.label }}
  </router-link>
</template>

<script setup>
const props = defineProps({
  path: String,
  label: String,
});
</script>

<style scoped>

.navbar-tab {
  line-height: 44px;
}

</style>

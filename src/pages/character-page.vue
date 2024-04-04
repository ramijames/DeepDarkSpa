<template>
  <PageLayout class="character-bg w-full">
    <h1 class="flex-none deep-dark-shadow text-center w-full text-4xl poppins-extrabold mb-8">Create Your Character</h1>
    <section id="character-box" class="flex flex-col justify-center flex-grow mx-auto">
      <div id="character" class="border-4 border-white"></div>
    </section>
    <section class="flex-none w-full text-center border-t-4 p-8">
      character options widget
    </section>
  </PageLayout>
</template>

<script setup>
import PageLayout from "@/components/page-layout.vue";
import { useAuth0 } from "@auth0/auth0-vue";

const { user } = useAuth0();

</script>

<style scoped>

.character-bg {
  background-color: #0B0610;
  background-image: url("@/assets/images/character-bg.jpg");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
}

#character-box {

}

#character {
  width:160px;
  height: 160px;
}

</style>

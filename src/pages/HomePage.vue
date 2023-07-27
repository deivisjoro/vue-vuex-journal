<script setup>
  import MainLayout from '@/layouts/MainLayout.vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const goToDayBook = () => {
    router.push({ name: 'no-entry' })
  }
</script>

<template>
  <MainLayout>
    <div>Home Page</div>
    <div>
      <button @click="goToDayBook">
        Ir a daybook
      </button>
    </div>
  </MainLayout>
</template>

<style scoped>

</style>


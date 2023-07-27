<script setup>
  import { defineAsyncComponent } from 'vue';

  const Navbar = defineAsyncComponent(() =>
    import('../components/Navbar.vue')
  )

  const EntryList = defineAsyncComponent(() =>
    import('../components/EntryList.vue')
  )
</script>

<template>
  <Navbar />
  <div class="d-flex">
    <div class="col-4">
      <EntryList />
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>

</style>
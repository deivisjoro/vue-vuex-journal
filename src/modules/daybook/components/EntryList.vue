<script setup>

  import { defineAsyncComponent } from 'vue';

  const Entry = defineAsyncComponent(() =>
    import('../components/Entry.vue')
  )
  
</script>

<template>
  <div class="entry-container">
    <div class="px-2 pt-2">
      <input 
        type="text"
        class="form-control" 
        placeholder="Buscar entrada"
      />
    </div>
    <div class="scrollablearea mt-2">
      <Entry v-for="(entry, index) in 50" :key="index" :entry="entry" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  
  .entry-container{
    border-right: 1px solid #2c3e50;
    height: calc(100vh - 56px);
  }

  .scrollablearea{
    height: calc(100vh - 110px);
    overflow-y: scroll;
  }

</style>
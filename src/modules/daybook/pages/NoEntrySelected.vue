<script setup>
  import { defineAsyncComponent } from 'vue';

  const FabButton = defineAsyncComponent(() =>
    import('../components/FabButton.vue')
  )
  
</script>

<template>
  <div class="d-flex justify-content-center">
    <h2 class="align-self-center">No hay nada seleccionado</h2>
  </div>
  <FabButton icon="fa-plus" />
</template>

<style scoped lang="scss">
    div{
        height: 100%;
    }
</style>
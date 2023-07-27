<script setup>

  import { defineAsyncComponent } from 'vue';

  const FabButton = defineAsyncComponent(() =>
    import('../components/FabButton.vue')
  )
  
</script>

<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">17</span>
      <span class="mx-1 fs-3">Julio</span>
      <span class="mx-2 fs-4 fw-light">2023, jueves</span>
    </div>
    <div>
      <button class="btn btn-danger mx-2">
        <i class="fa fa-trash-alt"></i> Borrar
      </button>
      <button class="btn btn-primary">
        <i class="fa fa-upload"></i> Subir foto
      </button>
    </div>
  </div>
  <hr>
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="¿Que sucedio hoy?"></textarea>
  </div>
  <FabButton icon="fa-save"/>
  <img src="https://cdn.pixabay.com/photo/2015/05/25/14/27/garden-783344_1280.jpg" alt="entry picture" class="img-thumbnail">
</template>

<style scoped lang="scss">

  textarea{
    font-size: 20px;
    border:none;
    height: 100%;

    &:focus{
      outline: none;
    }
  }

  img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.2);
  }

</style>
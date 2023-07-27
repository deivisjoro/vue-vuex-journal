<script setup>

  import { useRouter } from 'vue-router';
  const router = useRouter();
  
</script>

<template>
  <div class="entry-item-container mb-3 pointer p-2" @click="router.push({name: 'entry', params: {id:10} })">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">18</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2023, Martes</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore alias quia corporis nulla eos ea accusamus et aliquam sequi consectetur maxime modi eveniet reiciendis.
    </div>
  </div>
</template>

<style scoped lang="scss">

  .entry-item-container{
    border-bottom: 1px solid #2c3e50;
    transition: all 0.2s ease-in;

    &:hover{
      background-color: lighten($color: gray, $amount: 45);
      transition: all 0.2s ease-in;
    }
    .entry-description{
      font-size: 12px;
    }
  }


</style>
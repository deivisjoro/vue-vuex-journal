<script setup>

  import { defineProps } from 'vue';

  const props = defineProps({
    icon: {
      required: true,
      type: String
    }
  })

  const { icon } = props;

  console.log(icon)
  
</script>

<template>
  <button class="btn btn-primary">
    <i class="fa fa-2xl" :class="icon"></i>
  </button>
</template>

<style scoped lang="scss">

    button{
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>
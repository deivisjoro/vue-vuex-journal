<template>
  <nav class="navbar bg-primary">
    <RouterLink class="navbar-brand text-white d-flex align-items-center" :to="{name: 'daybook'}">
        <img src="/assets/images/libro.png" alt="icon book" class="d-inline-block align-text-top ms-2 me-1" width="24">
        DayBook
    </RouterLink>

    <div class="d-flex mx-2">
        <button class="btn btn-outline-info">
            <i class="fa fa-sign-out-alt"></i>
        </button>
    </div>
  </nav>
</template>
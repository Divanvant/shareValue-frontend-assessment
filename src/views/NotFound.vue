<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <h1>Page Not Found. 404</h1>
    <p>The link you are trying to access could not be found.</p>

    <div>
      <button type="button" @click="$router.back">Go Back</button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
}
</style>

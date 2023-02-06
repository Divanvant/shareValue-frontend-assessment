<script setup lang="ts">
import { RouterView } from "vue-router";

import { copy } from "@/translations";
</script>

<template>
  <RouterView />

  <footer>&copy; {{ copy.siteName }} {{ new Date().getFullYear() }}</footer>
</template>

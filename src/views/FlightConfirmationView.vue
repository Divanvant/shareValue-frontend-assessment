<script setup lang="ts">
import { onMounted, ref } from "vue";

onMounted(() => {
  const pathParts = window.location.pathname.split("/");
  const flightId = pathParts[pathParts.length - 1];
  if (flightId) {
    console.log("get flight info");
  }
  console.log("show error");
  // show/route to error page
});

const flight = ref({
  departureAirport: "",
  arrivalAirport: "",
  airline: "",
  flightNumber: "",
  price: "",
  departureDateTime: "",
  returnDateTime: "",
  totalTime: "",
});
</script>

<template>
  <main>
    <h1>Flight from {{ flight.departureAirport }} to {{ flight.airline }}</h1>
    <h3>Operated by {{ flight.airline }}</h3>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";

type FlightSearchParams = {
  departureAirport: string;
  departureDate: string;
  arrivalAirport: string;
  numberOfPassengers: number;
};
const flightSearchParams = ref<FlightSearchParams>({
  departureAirport: "",
  departureDate: "",
  arrivalAirport: "",
  numberOfPassengers: 0,
});

const flightSearch = () => {
  const {
    departureAirport,
    departureDate,
    arrivalAirport,
    numberOfPassengers,
  } = flightSearchParams.value;
  // Search for available flights
  console.log(
    `Searching for flights from ${departureAirport} to ${arrivalAirport} on ${departureDate} for you${
      numberOfPassengers > 1
        ? " and " + (numberOfPassengers - 1) + " other"
        : ""
    }`
  );
};
</script>

<template>
  <form @submit.prevent="flightSearch">
    <label for="departureAirport">
      <span>Departure Airport</span>
      <input
        id="departureAirport"
        type="text"
        name="departureAirport"
        placeholder="Departure Airport"
        v-model="flightSearchParams.departureAirport"
      />
    </label>

    <label for="departureAirport">
      <span>Arrival Airport</span>
      <input
        id="arrivalAirport"
        type="text"
        name="arrivalAirport"
        placeholder="Arrival Airport"
        v-model="flightSearchParams.arrivalAirport"
      />
    </label>

    <label for="departureDate">
      <span>Departure Date</span>
      <input
        id="departureDate"
        type="date"
        name="departureDate"
        v-model="flightSearchParams.departureDate"
      />
    </label>

    <label for="passengers">
      <span>Passengers</span>
      <input
        id="passengers"
        type="number"
        name="passengers"
        v-model="flightSearchParams.numberOfPassengers"
      />
    </label>

    <button type="submit">Search flights</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}

label {
  display: flex;
  flex-flow: column;
  margin-bottom: calc(var(--spacing) * 4);
}

@media (min-width: 980px) {
  form {
    flex-flow: row nowrap;
  }
  label {
    margin-right: calc(var(--spacing) * 4);
  }
}
</style>

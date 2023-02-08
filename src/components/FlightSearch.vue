<script setup lang="ts">
import { ref } from "vue";
import type { TFlightSearchParams } from "@/types";
import { getSupportedAirports } from "@/assets/skyscannerData";
import { getDate } from "@/utils";

const emit = defineEmits<{
  (e: "searchForFlights", props: TFlightSearchParams): void;
}>();

const flightSearchParams = ref<TFlightSearchParams>({
  departureAirport: "",
  arrivalAirport: "",
  departureDate: "",
  numberOfPassengers: 1,
});

const currentDate = getDate(new Date().toISOString());
const airports = getSupportedAirports();

const flightSearch = () => {
  const { departureAirport, arrivalAirport, departureDate } =
    flightSearchParams.value;

  if (departureAirport === arrivalAirport) {
    alert("Please select different locations for your flight");
    return;
  }

  if (departureDate == "") {
    alert("Please select a date for your flight");
    return;
  }

  emit("searchForFlights", flightSearchParams.value);
};
</script>

<template>
  <form @submit.prevent="flightSearch">
    <label for="departureAirport">
      <span>Departure Airport</span>
      <select
        id="departureAirport"
        name="departureAirport"
        v-model="flightSearchParams.departureAirport"
      >
        <option disabled value="">From</option>
        <option
          v-for="airport in airports"
          :key="airport.Id"
          :value="airport.Id"
        >
          {{ airport.Name }}
        </option>
      </select>
    </label>

    <label for="departureAirport">
      <span>Arrival Airport</span>
      <select
        id="arrivalAirport"
        name="arrivalAirport"
        v-model="flightSearchParams.arrivalAirport"
      >
        <option disabled value="">To</option>
        <!-- <option
          v-for="airport in airports"
          :key="airport.Id"
          :value="airport.Id"
        >
          {{ airport.Name }}
        </option> -->
        <option value="AMS">Amsterdam</option>
        -->
      </select>
    </label>

    <label for="departureDate">
      <span>Departure Date</span>
      <input
        id="departureDate"
        type="date"
        name="departureDate"
        :min="currentDate"
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
        min="1"
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

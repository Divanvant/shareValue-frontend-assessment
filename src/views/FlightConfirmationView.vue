<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  clearSessionStorage,
  getFlightDetails,
  getPassengerDetails,
} from "@/utils/state";
import type { TFlightListing, TPassengerDetails } from "@/types";
import FlightListingItem from "@/components/FlightListingItem.vue";
import router from "@/router";

const flightDetails = ref<TFlightListing>();
const passengerDetails = ref<TPassengerDetails>();

onMounted(() => {
  flightDetails.value = getFlightDetails();
  passengerDetails.value = getPassengerDetails();
});

const confirmFlightDetails = () => {
  clearSessionStorage();
  router.push({
    path: "/flight-confirmed/",
  });
};
</script>

<template>
  <div class="page-wrapper container text-center">
    <main v-if="flightDetails && passengerDetails">
      <h1>You're almost ready to fly</h1>
      <h3>Confirm your details below</h3>

      <FlightListingItem
        :id="flightDetails.id"
        :airline="flightDetails.airline"
        :flightNumber="flightDetails.flightNumber"
        :price="flightDetails.price"
        :departureDateTime="flightDetails.departureDateTime"
        :arrivalDateTime="flightDetails.arrivalDateTime"
        :departureAirport="flightDetails.departureAirport"
        :arrivalAirport="flightDetails.arrivalAirport"
      />

      <div
        v-if="passengerDetails && passengerDetails.passengerName"
        class="text-left"
      >
        <h3>
          You're almost on your way,
          {{ passengerDetails.passengerName }}!
        </h3>

        <p>Please make sure all your details below are correct</p>
        <div class="passenger-details-table-item">
          <div>
            <strong>Date of birth:</strong>
          </div>
          <div>
            {{ passengerDetails.dateOfBirth }}
          </div>
        </div>
        <div class="passenger-details-table-item">
          <div>
            <strong>Passport number:</strong>
          </div>
          <div>
            {{ passengerDetails.passportNumber }}
          </div>
        </div>
        <div class="passenger-details-table-item">
          <div>
            <strong>Phone:</strong>
          </div>
          <div>
            {{ passengerDetails.phone }}
          </div>
        </div>
        <div class="passenger-details-table-item">
          <div>
            <strong>Email:</strong>
          </div>
          <div>
            {{ passengerDetails.email }}
          </div>
        </div>
      </div>

      <button @click="confirmFlightDetails">Confirm Flight Details</button>
      <a href="/" class="button secondary">Book another flight</a>
    </main>

    <main v-else>
      <h1 class="error">Something went wrong</h1>
      <h3 class="error">Click below to try and book another flight</h3>
      <a href="/" class="button">Go Back</a>
    </main>
  </div>
</template>

<style scoped>
button + .button {
  margin-top: calc(var(--spacing) * 4);
}
.passenger-details-table-item {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-bottom: calc(var(--spacing) * 2);
}
@media (min-width: 960px) {
  button + .button {
    margin-left: calc(var(--spacing) * 4);
  }
}
</style>

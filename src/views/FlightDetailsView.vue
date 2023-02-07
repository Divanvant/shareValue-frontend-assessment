<script setup lang="ts">
import FlightListingItem from "@/components/FlightListingItem.vue";
import { onMounted, ref } from "vue";
import router from "@/router";

import { copy } from "@/translations";
import { getFlights } from "@/assets/skyscannerData";
import type { TFlightListing } from "@/types";

const errorText = ref("");
const flightId = ref("");
const searchParams = ref<URLSearchParams>();

const flightRef = ref<TFlightListing>({
  id: "",
  airline: "",
  flightNumber: "",
  price: "",
  departureDateTime: "",
  arrivalDateTime: "",
  departureAirport: "",
  arrivalAirport: "",
});
const flightDetails = ref({
  passengerName: "",
  passportNumber: "",
  dateOfBirth: "",
  phone: "",
  email: "",
});

onMounted(() => {
  const pathParts = window.location.pathname.split("/");
  flightId.value = pathParts[pathParts.length - 1];
  searchParams.value = new URLSearchParams(window.location.search);

  const departureDate = searchParams.value.get("departureDate");
  const departureAirport = searchParams.value.get("departure") || "";
  const arrivalAirport = searchParams.value.get("arrival") || "";

  if (flightId.value && departureDate) {
    getFlights(
      departureDate.split("T")[0],
      departureAirport,
      arrivalAirport
    ).then((data) => {
      const flight = data.find((flight) => flight.id == flightId.value);

      if (flight) {
        flightRef.value = flight;
      }
    });
  } else {
    console.log("show error");
  }
});

const confirmFlightDetails = () => {
  const { passengerName, passportNumber, dateOfBirth, phone, email } =
    flightDetails.value;
  if (
    passengerName == "" ||
    passportNumber == "" ||
    dateOfBirth == "" ||
    phone == "" ||
    email == ""
  ) {
    errorText.value = "Please fill in all the fields above";
    return;
  }
  errorText.value = "";

  alert("Booking your flight");

  router.push({
    path: `/flight-confirmation/${
      flightId.value
    }?departure=${searchParams.value?.get(
      "departure"
    )}&arrival=${searchParams.value?.get(
      "arrival"
    )}&departureDate=${searchParams.value?.get("departureDate")}`,
  });
};
</script>

<template>
  <div class="page-wrapper container">
    <main>
      <div class="back-button">
        <button type="button" @click="$router.back">Back to search</button>
      </div>

      <div class="text-center">
        <h1>{{ copy.flightDetailsPage.title }}</h1>
        <p>{{ copy.flightDetailsPage.blurb }}</p>
      </div>

      <FlightListingItem
        :id="flightRef.id"
        :airline="flightRef.airline"
        :flightNumber="flightRef.flightNumber"
        :price="flightRef.price"
        :departureDateTime="flightRef.departureDateTime"
        :arrivalDateTime="flightRef.arrivalDateTime"
        :departureAirport="flightRef.departureAirport"
        :arrivalAirport="flightRef.arrivalAirport"
      />
    </main>
    <form @submit.prevent="confirmFlightDetails">
      <label for="passengerName">
        <span>Passenger Name</span>
        <input
          id="passengerName"
          type="text"
          name="passengerName"
          placeholder="Passenger Name"
          v-model="flightDetails.passengerName"
        />
      </label>

      <label for="passportNumber">
        <span>Passport Number</span>
        <input
          id="passportNumber"
          type="text"
          name="passportNumber"
          placeholder="Passport Number"
          v-model="flightDetails.passportNumber"
        />
      </label>

      <label for="dateOfBirth">
        <span>Date of birth</span>
        <input
          id="dateOfBirth"
          type="date"
          name="dateOfBirth"
          v-model="flightDetails.dateOfBirth"
        />
      </label>

      <label for="phoneNumber">
        <span>Phone Number</span>
        <input
          id="phoneNumber"
          type="phone"
          name="phoneNumber"
          placeholder="Phone Number"
          v-model="flightDetails.phone"
        />
      </label>

      <label for="email">
        <span>Email address</span>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email address"
          v-model="flightDetails.email"
        />
      </label>

      <div v-if="errorText !== ''" class="error">
        {{ errorText }}
      </div>

      <button type="submit">Confirm flight details</button>
    </form>
  </div>
</template>

<style scoped>
.back-button {
  padding: calc(var(--spacing) * 4) 0;
}
form > label {
  display: block;
}
form > label > span {
  margin-top: calc(var(--spacing) * 4);
  display: block;
}
</style>

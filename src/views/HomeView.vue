<script setup lang="ts">
import FlightSearch from "@/components/FlightSearch.vue";

import { copy } from "@/translations";

const availableAirports = [
  {
    code: "QRH",
    name: "Rotterdam Airport",
    city: "Rotterdam",
    state: "",
    country: "Netherlands",
    tz: "Europe/Amsterdam",
    icao: "",
    direct_flights: "2",
    carriers: "1",
  },
  {
    code: "AMS",
    name: "Schiphol Airport",
    city: "Schiphol Zuid",
    state: "North Holland",
    country: "Netherlands",
    tz: "Europe/Amsterdam",
    icao: "EHAM",
    direct_flights: "284",
    carriers: "118",
  },
  {
    code: "CPT",
    name: "D F Malan Airport",
    city: "Cape Town",
    state: "Western Cape",
    country: "South Africa",
    tz: "Africa/Johannesburg",
    icao: "FACT",
    direct_flights: "23",
    carriers: "27",
  },
];
</script>

<template>
  <main>
    <h1>{{ copy.homePage.heading }}</h1>
    <p>{{ copy.homePage.blurb }}</p>

    <FlightSearch />
  </main>

  <AvailableFlights />

  <section>
    <h2>Popular Destinations</h2>

    <div class="flight-recommendations">
      <div
        v-for="airport in availableAirports.slice(0, 3)"
        :key="airport.code"
        class="flight-recommendations-item"
      >
        <h3>{{ airport.city }}</h3>
        <p>
          Explore all {{ airport.country }} has to offer by flying to
          {{ airport.name }}
          <span class="faint-text">({{ airport.code }})</span>
        </p>
        <p>
          With {{ airport.direct_flights }} flights a day with
          {{ airport.carriers }} carriers to choose from it's never been easier
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faint-text {
  font-size: 0.75em;
  opacity: 0.8;
}
.flight-recommendations {
  display: flex;
  align-items: center;
  justify-content: center;
}
.flight-recommendations-item:not(:last-child) {
  margin-right: calc(var(--spacing) * 4);
}
</style>

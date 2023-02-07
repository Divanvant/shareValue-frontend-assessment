<script setup lang="ts">
import { ref } from "vue";
import { getSupportedAirports } from "@/assets/skyscannerData";
import FlightListingItem from "@/components/FlightListingItem.vue";
import FlightSearch from "@/components/FlightSearch.vue";
import { copy } from "@/translations";
import type { TFlightListing, TFlightSearchParams } from "@/types";

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

const availableFlights = ref<TFlightListing[]>([]);
const flightLocations = ref<string[]>([]);

const searchForFlights = (props: TFlightSearchParams) => {
  const currentDepartureAirport = getSupportedAirports().find(
    (item) => item.Id === props.departureAirport
  );
  const currentArrivalAirport = getSupportedAirports().find(
    (item) => item.Id === props.arrivalAirport
  );
  flightLocations.value = [
    currentDepartureAirport?.Name || "",
    currentArrivalAirport?.Name || "",
  ];

  // @todo get flights
  availableFlights.value = [
    {
      id: "1",
      airline: "KLM",
      flightNumber: "KL598",
      price: "100€",
      departureDateTime: "2023-03-03T00:40",
      arrivalDateTime: "2023-03-03T11:40",
      departureAirport: currentDepartureAirport?.Name || "",
      arrivalAirport: currentArrivalAirport?.Name || "",
    },
  ];
};
</script>

<template>
  <main>
    <h1>{{ copy.homePage.heading }}</h1>
    <p>{{ copy.homePage.blurb }}</p>

    <FlightSearch @searchForFlights="searchForFlights" />
  </main>

  <section v-if="availableFlights.length">
    <h2>
      Showing flights from {{ flightLocations[0] }} to {{ flightLocations[1] }}
    </h2>
    <div v-for="flight in availableFlights" :key="flight.id">
      <FlightListingItem
        :id="flight.id"
        :airline="flight.airline"
        :flightNumber="flight.flightNumber"
        :price="flight.price"
        :departureDateTime="flight.departureDateTime"
        :arrivalDateTime="flight.arrivalDateTime"
        :departureAirport="flight.departureAirport"
        :arrivalAirport="flight.arrivalAirport"
      />
    </div>
  </section>

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

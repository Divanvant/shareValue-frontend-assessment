<script setup lang="ts">
import { ref } from "vue";
import { getSupportedAirports, getFlights } from "@/assets/skyscannerData";
import FlightListingItem from "@/components/FlightListingItem.vue";
import FlightSearch from "@/components/FlightSearch.vue";
import { copy } from "@/translations";
import type { TFlightListing, TFlightSearchParams } from "@/types";

const noFlightsText = ref("Use the Filters above to search for flights");
const availableAirports = getSupportedAirports();
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

  // @todo pass in parameters to filter with
  getFlights(props.departureDate).then((data) => {
    noFlightsText.value =
      "There were no flights matching your search. Try updating your search parameters";
    availableFlights.value = data;
  });
};
</script>

<template>
  <div class="page-wrapper">
    <main class="container text-center">
      <h1>{{ copy.homePage.heading }}</h1>
      <p>{{ copy.homePage.blurb }}</p>

      <FlightSearch @searchForFlights="searchForFlights" />
    </main>

    <section class="container" v-if="availableFlights.length">
      <h2>
        Showing flights from {{ flightLocations[0] }} to
        {{ flightLocations[1] }}
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
          showBookButton
        />
      </div>
    </section>
    <div v-else class="text-center">
      {{ noFlightsText }}
    </div>

    <section class="container popular-destinations">
      <h2>Popular Destinations</h2>

      <div class="flight-recommendations">
        <div
          v-for="airport in availableAirports.slice(0, 3)"
          :key="airport.CityId"
          class="flight-recommendations-item"
        >
          <h3>{{ airport.Name }}</h3>
          <p>
            Explore all {{ airport.CountryId }} has to offer by flying to
            {{ airport.Name }} located at
            <span class="faint-text">({{ airport.Location }})</span>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.faint-text {
  font-size: 0.75em;
  opacity: 0.8;
}
.flight-recommendations {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.flight-recommendations-item:not(:last-child) {
  margin-right: calc(var(--spacing) * 4);
}

.popular-destinations {
  margin: calc(var(--spacing) * 10) auto calc(var(--spacing) * 10);
}

@media (min-width: 960px) {
  .flight-recommendations {
    align-items: center;
    flex-flow: row nowrap;
  }
}
</style>

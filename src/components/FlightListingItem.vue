<script setup lang="ts">
defineProps<{
  id: string;
  airline: string;
  flightNumber: string;
  price: string;
  departureDateTime: string;
  arrivalDateTime: string;
  departureAirport: string;
  arrivalAirport: string;
  showBookButton?: boolean;
}>();

const getDepartureDate = (dateTime: string) => {
  return dateTime.split("T")[0];
};

const getDepartureTime = (dateTime: string) => {
  return dateTime.split("T")[1];
};
</script>

<template>
  <div class="flight-listing" itemscope itemtype="http://schema.org/Flight">
    <div>
      <h2 itemprop="name">
        <span
          itemprop="departureAirport"
          itemscope
          itemtype="http://schema.org/Airport"
        >
          {{ departureAirport }}
        </span>
        to
        <span
          itemprop="arrivalAirport"
          itemscope
          itemtype="http://schema.org/Airport"
        >
          {{ arrivalAirport }}
        </span>
      </h2>

      <h3 itemprop="provider" itemscope itemtype="http://schema.org/Provider">
        {{ airline }}
      </h3>

      <h4>
        On {{ getDepartureDate(departureDateTime) }} at
        <time
          itemprop="departureTime"
          datetime="{{ getDepartureTime(departureDateTime) }}"
        >
          {{ getDepartureTime(departureDateTime) }}
        </time>
      </h4>
    </div>
    <div class="price-column">
      <h4>
        <span itemprop="offers" itemscope itemtype="http://schema.org/Offer">
          <span itemprop="price">{{ price }}</span>
        </span>
      </h4>

      <a
        v-if="showBookButton"
        :href="`/flight-details/${id}?departure=${'CPT'}&arrival=${'AMS'}&departureDate=${departureDateTime}`"
        class="button"
        >Book Now</a
      >
    </div>
  </div>
</template>

<style scoped>
.flight-listing {
  padding: calc(var(--spacing) * 4) calc(var(--spacing) * 8);
  border: 1px solid var(--secondary-color);
  border-radius: var(--spacing);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: calc(var(--spacing) * 8);
}
.flight-listing:hover {
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.4);
}

.price-column h4 {
  margin-top: 0;
  font-size: 1.5rem;
}

@media (min-width: 960px) {
  .flight-listing {
    align-items: center;
    flex-flow: row nowrap;
  }
  .price-column {
    text-align: right;
  }
}
</style>

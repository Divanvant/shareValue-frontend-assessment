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
}>();
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

      <h3>
        <span
          itemprop="provider"
          itemscope
          itemtype="http://schema.org/Provider"
        >
          {{ airline }}
        </span>
        flight <span itemprop="flightNumber">{{ flightNumber }}</span>
      </h3>

      <div>
        <strong>Departure Time: </strong>
        <time itemprop="departureTime" datetime="{{ departureDateTime }}">
          {{ departureDateTime }}
        </time>
      </div>
      <div>
        <strong>Arrival Time: </strong>
        <time itemprop="arrivalTime" datetime="{{ arrivalDateTime }}">
          {{ arrivalDateTime }}
        </time>
      </div>
    </div>
    <div class="price-column">
      <h4>
        <span itemprop="offers" itemscope itemtype="http://schema.org/Offer">
          <span itemprop="price">{{ price }}</span>
        </span>
      </h4>

      <a :href="`/flight-details/${id}`" class="button">Book Now</a>
    </div>
  </div>
</template>

<style scoped>
.flight-listing {
  padding: calc(var(--spacing) * 4) calc(var(--spacing) * 8);
  border: 1px solid var(--primary-color);
  border-radius: var(--spacing);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.flight-listing:hover {
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.4);
}

.price-column {
  text-align: right;
}

.price-column h4 {
  margin-top: 0;
  font-size: 1.5rem;
}
</style>

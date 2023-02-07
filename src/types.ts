export type TAirport = {
  Id: string;
  Name: string;
  CityId: string;
  CountryId: string;
  Location: string;
};

export type TFlightSearchParams = {
  departureAirport: string;
  arrivalAirport: string;
  departureDate: string;
  numberOfPassengers: number;
};

export type TFlightListing = {
  id: string;
  airline: string;
  flightNumber: string;
  price: string;
  departureDateTime: string;
  arrivalDateTime: string;
  departureAirport: string;
  arrivalAirport: string;
};

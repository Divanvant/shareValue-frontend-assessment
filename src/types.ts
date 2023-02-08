// export enum SupportedCountries {
//   "ES" = "Spain",
//   "PT" = "Portugal",
//   "GR" = "Greece",
//   "NL" = "Netherlands",
//   "ZA" = "South Africa",
// }

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

export type TPassengerDetails = {
  passengerName: string;
  passportNumber: string;
  dateOfBirth: string;
  phone: string;
  email: string;
};

export type TSkyScannerQuote = {
  QuoteId: number;
  MinPrice: number;
  Direct: boolean;
  OutboundLeg: {
    CarrierIds: number[];
    OriginId: number;
    DestinationId: number;
    DepartureDate: string;
  };
  QuoteDateTime: string;
};

export type TSkyScannerCarrier = {
  CarrierId: number;
  Name: string;
};

export type TSkyScannerPlace = {
  Name: string;
  Type: string;
  PlaceId: number;
  SkyscannerCode: string;
  IataCode?: string;
  CityName?: string;
  CityId?: string;
  CountryName?: string;
};

export type TSkyScannerData = {
  Quotes: TSkyScannerQuote[];
  Carriers: TSkyScannerCarrier[];
  Places: TSkyScannerPlace[];
};

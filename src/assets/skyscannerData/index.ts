import type { TAirport } from "@/types";

// @todo get this from the places
export const getSupportedAirports = (): TAirport[] => {
  return [
    {
      Id: "CPT",
      Name: "Cape Town",
      CityId: "CPTA",
      CountryId: "ZA",
      Location: "18.602074, -33.971499",
    },
    {
      Id: "EIN",
      Name: "Eindhoven",
      CityId: "EIND",
      CountryId: "NL",
      Location: "5.3783917, 51.45045",
    },
    {
      Id: "AMS",
      Name: "Amsterdam",
      CityId: "AMST",
      CountryId: "NL",
      Location: "4.768056, 52.308333",
    },
    {
      Id: "FAO",
      Name: "Faro",
      CityId: "FARO",
      CountryId: "PT",
      Location: "-7.9697522, 37.017613",
    },
    {
      Id: "LIS",
      Name: "Lisbon",
      CityId: "LISB",
      CountryId: "PT",
      Location: "-9.1353882, 38.775577",
    },
  ];
};
